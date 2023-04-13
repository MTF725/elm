<template>
  <div id="recommend">
    <ul id="redpacketcontent">
      <li v-for="v in msg">
        <div class="parts">
          <div class="left">
            <p>¥<span>{{v.amount | currency(0, 1)}}</span>.<span>{{v.amount | currency(2, 3)}}</span></p>
            <p>{{v.description_map.sum_condition}}</p>
          </div>
          <div class="mid">
            <p class="name">{{v.name}}</p>
            <p>{{v.description_map.validity_periods}}<br>{{v.description_map.phone}}</p>
          </div>
          <img :src="overtimeimg" alt="">
        </div>
        <div class="othtermsg" :class="v.limit_map === undefined ? {cpadding:false} : {cpadding:true}"><p>{{v.limit_map===undefined?"":v.limit_map.restaurant_flavor_ids}}</p></div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    data() {
      return {
        user_id: "",
        msg:[],
        overtimeimg:"../../../../assets/minePicture/overtime.png",
      }
    },
    filters: {
      currency(v, start, end, flag) {
        return (v.toFixed(1) + "").slice(start, end);
      }
    },
    created(){
      this.$store.commit("updateCharacter","红包历史");
      this.$store.commit("updateRoute","/discount");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",false);
      this.myHttp.get(this.myApi.myApi.getaccmsg,(data)=>{
        this.user_id=data.user_id;
        this.myHttp.get(this.myApi.myApi.redpacketrecommend+"/"+this.user_id+"/expired_hongbaos?limit=20&offset=0",(data)=>{
          this.msg=data;
        },(err)=>{
          alert(err)
        })
      },(err)=>{
        alert(err)
      })

    }
  }
</script>

<style scoped>
  #recommend {
    overflow: auto;
    height: 100%;
    padding: 0.4rem;
    background-color: #f5f5f5
  }

  #redpacketcontent li {
    padding-top: 0.2rem;
    background-color:  #fff;
    border-radius: 5px;
    margin-top: 1rem;
  }

  #redpacketcontent .parts {
    padding: 0.5rem 0.5rem;
    display: flex;
  }

  .othtermsg {

    border-radius: 0 0 5px 5px;
    font-size: 0;
    background-color: #f9f9f9;
  }

  .othtermsg p {
    margin-left: .4rem;
    color: #999999;
    font-size: 0.6rem;
  }

  .left {
    color:#cccccc;
    width: 30%;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  .left p:nth-of-type(1) {
    margin: 0;

    font-size: 0.8rem;
  }

  .left p span:nth-of-type(1) {
    font-size: 1.8rem;
  }

  .left p:nth-of-type(2) {
    font-size: 0.6rem;

  }

  .mid {
    margin-left: 0.8rem;
  }

  .mid p:nth-of-type(1) {
    margin: 0;
    color: #666666;
    font-size: 1rem;
  }

  .mid p:nth-of-type(2) {
    color: #999999;
    font-size: 0.6rem;
  }

  .cpadding {
    padding: 0.4rem;
  }
  .parts{
    position: relative;
  }
  .parts img{
    position: absolute;
    right:0.2rem;
    top:0.3rem;
    width: 3.5rem;
    height: 3.5rem;
  }
</style>
