<template>
  <div id="recommend">
    <img src="../../../assets/minePicture/activity.png" alt="" id="activeimg">
    <div id="part2">
      <div class="left">
        <img src="../../../assets/minePicture/WeChat.png" alt="" @click="downbtn">
        <p>邀请微信好友</p>
      </div>
      <div class="left">
        <img src="../../../assets/minePicture/QQ.png" alt="" @click="downbtn">
        <p>邀请QQ好友</p>
      </div>
      <div class="left">
        <img src="../../../assets/minePicture/erweima.png" alt="" @click="downbtn">
        <p>面对面邀请</p>
      </div>
    </div>
    <div id="part3">
      <div id="part3left">
        <p>累计收益</p>
        <p><span>0</span>元</p>
      </div>
      <div id="part3right">
        <p>成功邀请</p>
        <p><span>0</span>人</p>
      </div>
    </div>
    <div id="part4">
      <p>-收益明细-</p>
      <img src="../../../assets/minePicture/redpacket.png" alt="">
      <p>还不赶紧去邀请好友</p>
    </div>
    <div id="download" :style="style1" @click="surebtn" class="box animated heartBeat">
      <img src="../../../assets/minePicture/gantanhao.png" alt="">
      <p>请在饿了么APP中打开</p>
      <span>确认</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    created(){
      this.$store.commit("updateCharacter","推荐有奖");
      this.$store.commit("updateRoute","/discount");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",false);
    },
    data() {
      return {
        activityimg: "../../../assets/minePicture/activity.png",
        wechatimg: "../../../assets/minePicture/WeChat.png",
        qqimg: "../../../assets/minePicture/QQ.png",
        erweima:"../../../assets/minePicture/erweima.png",
        redpacketimg:"../../../assets/minePicture/redpacket.png",
        gantanimg: '../../../assets/minePicture/gantanhao.png',
        style1: {display: "none"},
      }
    },
    methods:{
      downbtn() {
        this.style1 = {display: "block"}
      },
      surebtn() {
        this.style1 = {display: "none"}
      },
    }

  }
 </script>

<style scoped>
  #recommend{
    margin: 0;
  }
  #activeimg {
    display: inline-block;
    width: 100%;
    height: 11.17rem;
  }

  #part2 {

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.4rem 0;
  }

  .left {
    padding: 1rem 0 0.6rem 0;
    font-size: 0.6rem;
    background-color: white;
    text-align: center;
    width: 33.3%;
  }

  .left img {
    width: 2.93rem;
    height: 2.93rem;
  }

  .left p {
    margin-top: 0.7rem;
  }
  #part3{
    color: #666666;
    font-size: 0.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #part3left,#part3right{
    text-align: center;
    width: 50%;
  }
  #part3left{
    border-right: 2px solid rgba(0,0,0,0.03);
  }
  #part3left span,#part3right span{
    font-size: 0.95rem;
    font-weight: 700;
  }
  #part3left span{
    color: #ff5633;
  }
  #part4{
    margin-top: 0.8rem;
    text-align: center;
  }
  #part4 img {
    width: 1.5rem;
    height: 1.5rem;
  }
  #part4 p:nth-of-type(1){
    margin-bottom: 1rem;
    font-size: 0.6rem;
    color: #666666;
  }
  #part4 p:nth-of-type(2){
    margin-top: 0.3rem;
    font-size: 0.6rem;
    color: #999999;
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
    margin: 1rem 0;
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
