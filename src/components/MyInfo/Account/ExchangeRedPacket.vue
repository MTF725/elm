<template>
  <div id="exchangeredpacket">
    <input type="text" placeholder="请输入兑换码" v-model.trim="exchangecode" @keyup="bluebtn">
    <div id="line2">
      <input type="text" placeholder="验证码" v-model.trim="surecode" maxlength="4" @keyup="bluebtn">
      <div id="code">
        <img :src="codeimg" alt="">
        <p><span>看不清</span><span id="blue">换一张</span></p>
      </div>
    </div>
   <span class="btn" @click="exchangebtn" :class="{blue:changeblue}">兑换</span>
    <div id="download" :style="style1" @click="surebtn" class="box animated heartBeat">
      <img src="../../../assets/minePicture/gantanhao.png" alt="">
      <p>{{alertmsg}}</p>
      <span>确认</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ExchangeRedPacket",
    data() {
      return {
        gantanimg: '../../../assets/minePicture/gantanhao.png',
        style1: {display: "none"},
        alertmsg:"",
        userid: "",
        codeimg: "",
        exchangecode: "",
        surecode: "",
        changeblue:false,
      }
    },

    created() {
      this.$store.commit("updateCharacter","兑换红包");
      this.$store.commit("updateRoute","/discount");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",false);

      this.myHttp.get(this.myApi.myApi.getaccmsg, (data) => {
         this.userid=data.user_id
      }, (err) => {
        alert(err)
      })
      this.myHttp.post(this.myApi.myApi.surecode, {}, (data) => {
        this.codeimg = data.code
      }, (err) => {
          alert(err)
      })
    },
    methods: {
      downbtn() {
        this.style1 = {display: "block"}
      },
      surebtn() {
        this.style1 = {display: "none"}
      },
      exchangebtn() {
        this.myHttp.post(this.myApi.myApi.exchangeredpacket, {user_id :this.userid,exchange_code:this.exchangecode,captcha_code:this.surecode}, (data) => {
          this.alertmsg=data.message;
        this.downbtn();
        }, (err) => {
            alert(err)
        })
      },
      bluebtn(){
          if(this.surecode.length==4&&this.exchangecode.length>1){
            this.changeblue=true;
          }else{
            this.changeblue=false;
          }
      }
    },

  }
</script>

<style scoped>
  #exchangeredpacket {
    padding: 0.7rem;
   text-align: center;
  }

  #exchangeredpacket input {
    border-radius: 2px;
    font-size: 0.7rem;
    padding: 0.7rem 0.5rem;
    border: 0;
    outline: none;
    width: 100%;
    margin-bottom: 1rem;
  }

  #exchangeredpacket #line2 input {
    width: 60%;
    margin: 0;
  }

  #line2 {
    justify-content: space-between;
    display: flex;
    align-items: center;
  }

 .btn {
    width: 95%;
    background-color: #ccc;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: 1.4rem;
  }

  #code {
    display: flex;
    align-items: center;
    background-color: white;
    width: 39%;
    height: 2.4rem;

  }

  #code p {
    display: flex;
    flex-direction: column;
    margin: 0;
  }

  #code span {
    display: inline-block;
    font-size: .6rem;
  }

  #code #blue {
    color: #3b95e9;
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
  .blue{
    background-color:#3190e8 ;
  }
</style>
