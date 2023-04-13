<template>
  <div id="elm">
    <img src="../../assets/minePicture/elmlogo.png" alt="">
    <p>下载饿了么APP</p>
    <span id="btn" @click="downbtn">下载</span>
    <div id="download" :style="style1" @click="surebtn"  class="box animated heartBeat">
      <img src="../../assets/minePicture/gantanhao.png" alt="">
      <p>IOS用户请前往AppStore下载</p>
      <span>确认</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Downloade",
    created(){
      this.$store.commit("updateCharacter","下载");
      this.$store.commit("updateRoute","/mine");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",false);
    },
    data() {
      return {
        style1:{display:"none"}
      }
    },
    methods:{
      downbtn (){
       this.style1={display:"block"}
      },
      surebtn(){
        this.style1={display:"none"}
      }
    }
  }
</script>

<style scoped>
  #elm {
    position: relative;
    height: 100%;
    background-color: white;
    text-align: center;
  }

  #elm img {
    margin-top: 1.1rem;
    margin-bottom: 0.8rem;
    width: 9rem;
    height: 9rem;
  }

  #elm p {
    font-size: .8rem;
    color: #666;
    margin-bottom: 1rem;
  }

  #btn {
    width: 17.11rem;
    height: 2.1rem;
    display: inline-block;
    background-color: #4cd964;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 2.1rem;
    border-radius: .2rem;
    margin-top: .5rem;
  }

  #download {
    background-color: white;
    position: absolute;
    left: 2.3rem;
    top:9rem;
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
  #download p{
    width: 100%;
  }
  #download span{
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
