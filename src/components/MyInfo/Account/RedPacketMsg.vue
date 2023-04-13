<template>
  <div id="redpacketmsg">
    <div id="line1">
      <span id="baye">有{{packetnumber}}个红包即将到期</span>
      <img :src="quesimg" alt=""><span id="bades" @click="toservercontent">红包说明</span>
      <div id="empty"></div>
    </div>
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
          <div class="right">{{v.description_map.validity_delta}}</div>
        </div>
        <div class="othtermsg" :class="v.limit_map === undefined ? {cpadding:false} : {cpadding:true}"><p>{{v.limit_map===undefined?"":v.limit_map.restaurant_flavor_ids}}</p></div>
      </li>
    </ul>
    <div id="packethistory" @click="torecommend">查看历史红包<span class="glyphicon glyphicon-menu-right"></span></div>
  </div>
</template>

<script>
  export default {
    name: "RedPacketMsg",
    filters: {
      currency(v, start, end, flag) {
        return (v.toFixed(1) + "").slice(start, end);
      }
    },
    data() {
      return {
        quesimg: '../../../static/minePicture/ques.png',
        userId: 0,
        packetnumber: "0",
        msg: [],
        thispage:"isRedPacketMsg",
      }
    },
    created() {
      this.$store.commit("updateDong",true);
      this.myHttp.get(this.myApi.myApi.getaccmsg, (data) => {
        this.userId = data.user_id
        this.myHttp.get(this.myApi.myApi.redpacket + "/" + this.userId + "/hongbaos?limit=20&offset=0", (data) => {
          this.packetnumber=data.length;
          this.msg = data;
          this.$store.commit("updateDong",false);
        }, (err) => {
          alert(err)
        })
      }, (err) => {
        alert(err)
      });
     this.sendMsgToDiscounts()
    },
    methods:{
      toservercontent(){
        this.myHttp.get(this.myApi.myApi.servercenter,(data)=>{
           this.$router.push({path:"/aboutredpacket",query:{servercontents:data.hongbaoContent}})
        },(err)=>{
          alert(err)
        })
      },
      torecommend(){
        this.$router.push({path:"/redpackethistory"})
      },
      sendMsgToDiscounts(){
        this.$emit("redpacketmsg",this.thispage)
      }
    }
  }

</script>

<style scoped>
  #redpacketmsg {
    height: 100%;
    padding: 0.4rem;
    background-color: #f5f5f5
  }

  #line1 {
    line-height: 1rem;
    height: 1rem;
  }

  #line1 span {
    font-size: 0.6rem;
  }

  #bades {
    color: blue;
  }

  #line1 img {
    margin-right: 0.5rem;;
    margin-left: 8.8rem;
    width: 0.7rem;
    height: 0.7rem;
  }

  #redpacketcontent li {
    padding-top: 0.2rem;
    background-color: white;
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
    width: 30%;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  .left p:nth-of-type(1) {
    margin: 0;
    color: #ff5430;
    font-size: 0.8rem;
  }

  .left p span:nth-of-type(1) {
    font-size: 1.8rem;
  }

  .left p:nth-of-type(2) {
    font-size: 0.6rem;
    color: #999999;
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

  .right {
    color: #ff5430;
    font-size: 1rem;
  }
  .cpadding {
    padding: 0.4rem;
  }
  #packethistory{
    text-align: center;
    font-size: .5rem;
    color: #999;
    margin-right: .2rem;
  }
</style>
