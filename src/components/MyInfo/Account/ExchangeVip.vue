<template>
  <div id="exchangevip">
    <div id="paytime">
      <p id="timedes">支付剩余时间</p>
      <p id="countdown">00<span>:</span>{{minute}}<span>:</span>{{second}}</p>
    </div>
    <p id="payp">选择支付方式</p>
    <div id="payselection">
      <div class="alipay" @click="changeduihao1">
        <img src="../../../assets/minePicture/AlipayImg.png" alt="" class="aliimg">
        <span>支付宝</span>
        <img src="../../../assets/minePicture/duihaogreen.png" alt="" class="duihao" v-if="image1">
        <img src="../../../assets/minePicture/duihaogrey.png" alt="" class="duihao" v-else>
      </div>
      <div class="alipay" @click="changeduihao2">
        <img src="../../../assets/minePicture/WeChat.png" alt="" class="aliimg">
        <span>微信</span>
        <img src="../../../assets/minePicture/duihaogreen.png" alt="" class="duihao" v-if="image2">
        <img src="../../../assets/minePicture/duihaogrey.png" alt="" class="duihao" v-else>
      </div>
    </div>
    <div id="surechange"><span @click="btnpay">确认支付</span></div>
    <div id="download" :style="style1" @click="surebtn" class="box animated heartBeat">
      <img src="../../../assets/minePicture/gantanhao.png" alt="">
      <p>{{alertmsg}}</p>
      <span>确认</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ExchangeVip",

    data() {
      return {
        // gantanimg: '../../../assets/minePicture/gantanhao.png',
        // alipayimg: "../../../../assets/minePicture/AlipayImg.png",
        // wechatimg: "../../../../assets/minePicture/WeChat.png",
        duihaoali: "../../../../assets/minePicture/duihaogreen.png",
        duihaowechat: "../../../../assets/minePicture/duihaogrey.png",
        lefttime: "900",
        timer: "",
        minute: "15",
        second: "00",
        alertmsg: "",
        style1: {display: "none"},
        image1:true,
        image2:false,
      }
    },
    methods: {
      changeduihao1() {
        this.image1 = !this.image1;
        this.image2=false
      },
      changeduihao2() {
        this.image2 = !this.image2;
        this.image1=false
      },
      btnpay() {
        this.style1 = {display: "block"};
        this.alertmsg = "当前环境无法支付，请打开官方APP进行付款"
      },
      surebtn() {
        this.style1 = {display: "none"}
      },
      alert() {
        this.style1 = {display: "block"};
        this.alertmsg = "暂不开放支付功能"
      },
      setcountdown() {
        this.timer = setInterval(this.countdown, 1000)
      },
      countdown() {
        this.lefttime--;
        this.minute = Math.floor(this.lefttime / 60);
        this.second = Math.floor(this.lefttime % 60);
        if (this.minute < 10) {
          this.minute = "0" + this.minute
        }
        if (this.second < 10) {
          this.second = "0" + this.second
        }
        if (this.minute == 0 && this.second == 0) {
          clearInterval(this.timer);
          this.style1 = {display: "block"};
          this.alertmsg="支付超时，请重新请求支付"
        }
        console.log(this.minute, this.second);

      }
    },
    created() {
      this.$store.commit("updateCharacter","在线支付");
      this.$store.commit("updateRoute","/elmvip");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",false);
      this.setcountdown();
      this.alert();
    }
  }
</script>

<style scoped>
  #paytime {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 7.35rem;
    background-color: white;
  }

  #paytime span {
    margin: 0.6rem;
  }

  #countdown {
    width: 100%;
    font-size: 1.8rem;
  }

  #timedes {
    font-size: 0.9rem;
  }

  #payp {
    margin: 0;
    line-height: 2rem;
    padding: 0rem 0.82rem;
    font-size: 0.8rem;

  }

  .alipay {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.82rem;
    background-color: white;
    border-bottom: 2px solid rgba(0, 0, 0, 0.05);
  }

  .alipay span {
    text-align: left;
    width: 70%;
    font-size: 0.8rem;
    color: #666666;

  }

  .aliimg {
    width: 2.3rem;
    height: 2.3rem;
  }

  .duihao {
    width: 1.12rem;
    height: 1.12rem;
  }

  #surechange {
    width: 100%;
    text-align: center;
  }

  #surechange span {
    border-radius: 0.2rem;
    display: inline-block;
    line-height: 2.2rem;
    height: 2.2rem;
    margin-top: 2rem;
    text-align: center;
    width: 95%;
    background-color: #4cd964;
    color: white;
    font-size: 0.7rem;
  }

  #download {
    background-color: white;
    position: absolute;
    left: 2.3rem;
    top: 9rem;
    border-radius: 0.5rem;
    text-align: center;
    display: inline-block;
    font-size: 0.9rem;
    width: 14rem;
    height: 9.25rem;
    font-weight: 400;
  }

  #download img {
    width: 3.51rem;
    height: 3.51rem;
  }

  #download p {
    width: 100%;
  }

  #download span {
    border-radius: 0 0 0.5rem 0.5rem;
    color: white;
    height: 2.1rem;
    line-height: 2.1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline-block;
    background-color: #4cd964;
    width: 100%;
  }
</style>
