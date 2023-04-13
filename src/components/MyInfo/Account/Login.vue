<template>
  <div id="login">
    <div id="account"><input type="text" placeholder="账号" v-model="username"></div>
    <div id="password">
      <div id="both">
        <input :type="pass" placeholder="密码" v-model="password">
        <div class="show1" :class="{showc1:color}"></div>
        <div class="show2" @click="change" :class="{showc2:p}"></div>
      </div>
    </div>
    <div id="sure">
      <input type="text" placeholder="验证码" v-model="surecode">
      <img :src="surepic" alt="">
      <p @click="changeSureCode"><span>看不清</span><span id="hyz">换一张</span></p>
    </div>
    <button id="btn" @click="login">登录</button>
    <router-link :to="{path:'/changepassword'}">
      <p id="repassword">重置密码？</p>
    </router-link>
    <div id="download" :style="style1" @click="surebtn" class="box animated heartBeat">
      <img src="../../../assets/minePicture/gantanhao.png" alt="">
      <p>{{alertmsg}}</p>
      <span>确认</span>
    </div>
  </div>
</template>

<script>
  var code = "";
  export default {
    name: "Login",
    data() {
      return {
        gantanimg: '../../../assets/minePicture/gantanhao.png',
        style1: {display: "none"},
        color: false,
        p: true,
        pass: "password",
        surepic: "",
        surecode: "",
        username: "",
        password: "",
        alertmsg:""
      }
    },
    created() {
      this.changeSureCode();
    },

    methods: {
      change() {
        this.p = !this.p;
        this.color = !this.color;
        if (this.p) {
          this.pass = "password"
        } else {
          this.pass = "text"
        }
      },
      changeSureCode() {
        this.myHttp.post(this.myApi.myApi.surecode, {}, (data) => {
          this.surepic = data.code
        }, (err) => {
          console.log(err)
        })
      },
      login() {
        this.myHttp.post(this.myApi.myApi.login, {
          username: this.username,
          password: this.password,
          captcha_code: this.surecode
        }, (data) => {
          console.log(data)
          if(data.message){
            console.log(data.message)
            this.downbtn()
            this.alertmsg=data.message
          }
          if(data.__v==0) {
            this.tomyinfo()
          }

        }, (err) => {
          this.alertmsg=err
        })
      },
      downbtn() {
        this.style1 = {display: "block"}
      },
      surebtn() {
        this.style1 = {display: "none"}
      },
      tomyinfo(){
        this.$router.push({path:"/mine",query:{myusername:this.username}})
        console.log(2)
      }
    }
  }
</script>

<style scoped>
  #login {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: white;
  }

  #account, #sure, #password {
    box-sizing: border-box;
    background-color: white;
    padding: .6rem .8rem;
    border-bottom: 1px solid #f1f1f1;
    width: 100%;
    height: 2.4rem;
  }

  #account {
    margin-top: 1rem;
  }

  #login div input {
    line-height: 0.98rem;
    text-align: left;
    outline: none;
    border: 0;
    font-size: .7rem;
    color: #666;
    width: 9.4rem;
    height: 0.98rem;
  }

  #hint p {
    font-size: .5rem;
    color: red;
    padding: .2rem .6rem;
  }

  #btn {
    text-align: center;
    width: 17.58rem;
    height: 2.2rem;
    margin: 0 .5rem 1rem;
    font-size: .7rem;
    color: #fff;
    background-color: #4cd964;
    border: 1px;
    border-radius: .15rem;
    text-align: center;
  }

  #repassword {
    float: right;
    font-size: .8rem;
    color: #3b95e9;
    margin-right: .3rem;
  }

  #both {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  .show1 {
    margin-left: 3rem;
    width: 2rem;
    height: 0.88rem;
    background-color: #ccc;
    border: 1px;
    border-radius: .5rem;
  }

  .show2 {
    transition: .5s;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #f1f1f1;
    border-radius: 50%;
    right: 1rem;
  }

  .showc1 {
    background-color: #4cd964;
  }

  .showc2 {
    transition: .5s;
    right: -0.5rem;
  }

  #sure {
    position: relative;
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
