<template>
  <div id="changepassword">
    <input type="text" placeholder="账号" id="inputaccount" v-model="username">
    <input type="text" placeholder="旧密码" v-model="oldpassWord">
    <input type="text" placeholder="请输入新密码" v-model="newpassword">
    <input type="text" placeholder="请确认新密码" v-model="confirmpassword">
    <div id="sure">
      <input type="text" placeholder="验证码" v-model="captcha_code">
      <img :src="surepic" alt="">
      <p @click="changeSureCode"><span>看不清</span><span id="hyz">换一张</span></p>
    </div>
    <div id="surechange"><span @click="btnchange">确认修改</span></div>
    <div id="download" :style="style1" @click="surebtn" class="box animated heartBeat">
      <img src="../../../assets/minePicture/gantanhao.png" alt="">
      <p>{{alertmsg}}</p>
      <span>确认</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Changepassword",
    data() {
      return {
        gantanimg: '../../../assets/minePicture/gantanhao.png',
        style1: {display: "none"},
        alertmsg:"",
        username: "",
        oldpassWord: "",
        newpassword: "",
        confirmpassword: "",
        captcha_code: "",
        surepic: "",
      }
    },
    created() {
      this.changeSureCode();
      this.$store.commit("updateCharacter","重置密码");
      this.$store.commit("updateRoute","/account");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",false);
    },
    methods: {
      downbtn() {
        this.style1 = {display: "block"}
      },
      surebtn() {
        this.style1 = {display: "none"}
      },
      changeSureCode() {
        this.myHttp.post(this.myApi.myApi.surecode, {}, (data) => {
          this.surepic = data.code
        }, (err) => {
          console.log(err)
        })
      },
      btnchange() {
        this.myHttp.post(this.myApi.myApi.changepassword, {
          username: this.username,
          oldpassWord: this.oldpassWord,
          newpassword: this.newpassword,
          confirmpassword: this.confirmpassword,
          captcha_code: this.captcha_code
        }, (data) => {
          if(data.status==0){
            this.downbtn()
            this.alertmsg=data.message
          }
          if(data.status==1) {
            this.$router.push({path:"/mine"})
          }

        }, (err) => {
          this.alertmsg = err
        })
      },
    }
  }
</script>

<style scoped>
  #changepassword input {
    padding-left: 1rem;
    font-size: 0.75rem;
    border: none;
    color: #333;
    font-weight: 400;
    width: 100%;
    height: 2.5rem;
    background-color: white;
    margin-bottom: 2px;
  }

  #inputaccount {
    margin-top: 1rem;
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

  #sure {
    position: relative;
  }

  #sure img {
    position: absolute;
    top: 0.5rem;
    right: 3rem;
  }

  #sure p {
    position: absolute;
    top: 0.2rem;
    right: 0.5rem;
    width: 2.3rem;
    height: 1.9rem;
    font-size: 0.7rem;
  }

  #hyz {
    color: blue;
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
