<template>
  <div id="elmvip">
    <p id="line1">为账户<span>{{username}}</span>购买会员</p>
    <div id="line2">
      <div id="part1"><span class="vipright">会员特权</span><span class="vipdes" @click="toAboutVip">会员说明</span><span
        class="glyphicon glyphicon-menu-right youjian"></span></div>
      <div class="part2">
        <img src="../../assets/minePicture/sheng.png" alt="">
        <p><span class="reduce">减免配送费</span><span class="reducedes">每月减免30单，每日可减免3单，每单最高减4元<br>蜂鸟专送专享</span></p>
      </div>
      <div class="part2">
        <img src="../../assets/minePicture/sheng2.png" alt="">
        <p><span class="reduce">减免配送费</span><span class="reducedes">每月减免30单，每日可减免3单，每单最高减4元<br>蜂鸟专送专享</span></p>
      </div>
    </div>
    <div id="line3">
      <p id="line3part1">开通会员</p>
      <p id="line3part2"><span>1个月</span><span id="line3money">￥20</span><span id="line3buy" @click="toExchangeVip">购买</span></p>
    </div>
    <div class="line4" @click="tocardforvip">
      <span class="vipright">兑换会员</span> <span class="vipdes carddes" >使用卡号卡密</span> <span class="glyphicon glyphicon-menu-right youjian"></span>
    </div>
    <div class="line4" @click="topurchaserecord">
      <span class="vipright">购买记录</span> <span class="vipdes billdes" >开发票</span> <span class="glyphicon glyphicon-menu-right youjian"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Elmvip",
    data() {
      return {
        username: "",
      }
    },
    methods:{
      tocardforvip(){
        this.$router.push({path:"/cardforvip"})
      },
      toExchangeVip(){
         this.$router.push({path:"/exchangevip"})
      },
      topurchaserecord(){
        this.$router.push({path:"/purchaserecord"})
      },
      toAboutVip(){
        this.myHttp.get(this.myApi.myApi.servercenter,(data)=>{
          this.$router.push({path:"/aboutvip",query:{memberTimesContent:data.memberTimesContent}})
          console.log(data)
        },(err)=>{
          alert(err)
        })
      }
    },
    created() {
      this.$store.commit("updateCharacter","会员中心");
      this.$store.commit("updateRoute","/mine");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",false);

      getaccmsg:{
        this.myHttp.get(this.myApi.myApi.getaccmsg, (data) => {
          this.username = data.username
        }, (err) => {
          alert(err)
        })
      }
    }
  }
</script>

<style scoped>
  #line1 {
    font-size: 0.7rem;
    padding: 0.4rem 0.7rem;
  }

  #line1 span {
    font-weight: 700;
  }

  #line2 {
    padding-left: 0.8rem;
    background-color: white;
  }

  .vipright {
    font-size: 0.8rem;
    color: #333333
  }

  .vipdes, .youjian {
    color: #999999;
    font-size: 0.7rem;
  }

  #part1 {
    padding: 0.45rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .vipdes {
    margin-left: 10.5rem;
  }

  .part2 {
    padding: 0.45rem 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .part2 span {
    display: inline-block;

  }

  .part2 img {
    margin-right: 0.5rem;
    z-index: 100;
    display: inline-block;
    width: 1.9rem;
    height: 2.1rem;
  }

  .reduce {
    color: #333333;
    font-size: 0.8rem;
  }

  .reducedes {
    color: #999999;
    font-size: 0.6rem;
  }

  #line3 {
    padding: 0 0.8rem 0 0.8rem;
    background-color: white;
    margin-top: 1rem;
  }

  #line3part1 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    padding: 0.45rem 0;
    font-size: 0.8rem;
  }

  #line3part2 {
    font-size: 0.8rem;
    padding: 0.45rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #line3money {
    text-align: left;
    width: 68%;
    color: #ff6600;
    font-weight: 700;
  }

  #line3buy {
    font-size: 0.7rem;
    border: 1px solid #ff6600;
    border-radius: 5px;
    padding: 0.2rem 0.8rem;
  }
  .line4{
   padding:0.45rem 0.8rem;
    background-color: white;
    margin-top: 1rem;
  }
  .carddes{
    margin-left: 8.2rem;
  }
  .billdes{
    margin-left: 10.2rem;
  }
</style>
