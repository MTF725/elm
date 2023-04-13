<template>
  <div id="account">
    <div id="changehead">
      <input type="file" @change="chooseimg">
      <p>头像</p>
      <img :src="headimg" alt="">
      <span class="glyphicon glyphicon-menu-right name"></span>
    </div>
    <router-link :to="{path:'/username'}">
      <div id="username">
        <span class="namep">用户名</span><span class="name">{{ myusername}}</span><span
        class="glyphicon glyphicon-menu-right name"></span>
      </div>
    </router-link>
    <router-link :to="{path:'/address'}">
      <div id="address">
        <span class="namep">收货地址</span><span class="glyphicon glyphicon-menu-right name"></span>
      </div>
    </router-link>
    <p class="bind">账号绑定</p>
    <div id="myphone" @click="downbtn">
      <img src="../../../assets/minePicture/phone.png" alt="">
      <span id="phonep">手机</span>
      <span class="glyphicon glyphicon-menu-right "></span>
    </div>
    <p class="bind">安全设置</p>
    <router-link :to="{path:'/changepassword'}">
      <div id="changepassword">
        <span class="namep">登录密码</span><span class="name">修改</span><span
        class="glyphicon glyphicon-menu-right name"></span>
      </div>
    </router-link>
    <div id="logout"><span @click="logout">退出登录</span></div>
    <div id="download" :style="style1" @click="surebtn" class="box animated heartBeat">
      <img src="../../../assets/minePicture/gantanhao.png" alt="">
      <p>{{alertmsg}}</p>
      <span>确认</span>
    </div>
    <div id="outbgc" :style="style2" :class="{blackbgc:true}">
    </div>
    <div id="sureout" :style="style2" @click="surebtn" class="box animated heartBeat">
      <img src="../../../assets/minePicture/gantanhao.png" alt="">
      <p>是否退出登录</p>
      <div><span id="btnwait" @click="btnwait">再等等</span><span id="btnout" @click="btnout">退出登录</span></div>
    </div>
  </div>
</template>

<script>
  import Username from "./Username";
  import Changepassword from "./Changepassword";
  import Address from "./Address";


  export default {
    name: "Account",
    components: {Address, Changepassword, Username},
    methods: {
      chooseimg() {
        this.downbtn();
        this.alertmsg = "上传失败"
      },
      btnwait() {
        this.style2 = {display: "none"}
      },
      btnout() {
        this.myHttp.get(this.myApi.myApi.signout, (data) => {
          if (data.message) {
            this.$router.push({path: "/mine"});
          }
        }, (err) => {
          alert(err);
        })
      },
      downbtn() {
        this.style1 = {display: "block"};
        this.alertmsg = "请在手机APP中设置"
      },
      surebtn() {
        this.style1 = {display: "none"}
      },
      logout() {
        this.style2 = {display: "block"};
        console.log(2222)
        // this.style3={opacity:0.2,background:"black",zIndex:100}
        // this.$router.push({path:"/logout"});
      }
    },
    data() {
      return {
        alertmsg: "",
        demo: "",
        headimg: "",
        myusername: "",
        gantanimg: '../../assets/minePicture/gantanhao.png',
        phoneimg: "../../../assets/minePicture/phoneblue.png",
        style1: {display: "none"},
        style2: {display: "none"},
        style3: "",
      }
    },
    created() {
      this.$store.commit("updateRoute","/mine");
      this.$store.commit("updateCharacter","账户信息")
      this.$store.commit("updateEndShowOfHidden",false)
      this.$store.commit("updateShowOfHidden",true)
      getaccmsg:{
        this.myHttp.get(this.myApi.myApi.getaccmsg, (data) => {
          this.myusername = data.username;
          this.headimg = "http://elm.cangdu.org/img/" + data.avatar;
        }, (err) => {
          alert(err)
        })
      }
    }
  }
  </script>

<style scoped>
  #account {
    width: 100%;
    height: 100vh;
    font-size: 0.8rem;
    font-weight: 500;
  }

  #username, #address, #myphone, #changehead {
    margin-bottom: 2px;
    padding-left: 0.8rem;
    padding-right: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333;
    height: 2.4rem;
    background-color: white;
  }

  #changepassword {
    margin-bottom: 2px;
    padding-left: 0.8rem;
    padding-right: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333;
    height: 2.4rem;
    background-color: white;
  }

  #changehead {
    height: 3.6rem;
  }

  #changehead input {
    width: 100%;
    height: 3.6rem;
    opacity: 0;
    position: absolute;
  }

  #changehead p {
    width: 80%;
    height: 100%;
    line-height: 4.5rem;
  }

  #changehead img {
    height: 2.34rem;
    width: 2.34rem;
    border-radius: 50%;
  }

  .name {
    color: rgb(216, 216, 216);
  }

  .namep {
    width: 80%;
  }

  .bind {
    padding: .5rem 0.8rem;
    font-size: 0.6rem;
    font-weight: 500;

  }

  #myphone img {
    width: 1rem;
    height: 1rem;
  }

  #phonep {
    width: 80%;
  }

  #logout {
    width: 100%;
    text-align: center;
  }

  #logout span {
    border-radius: 0.2rem;
    display: inline-block;
    line-height: 1.7rem;
    height: 1.7rem;
    margin-top: 2rem;
    text-align: center;
    width: 95%;
    background-color: #d8584a;
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
    margin-top: 1rem;
    margin-bottom: 1rem;
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

  #sureout {
    z-index: 10000;
    background-color: white;
    position: absolute;
    left: 4%;
    top: 9rem;
    border-radius: 0.5rem;
    text-align: center;
    display: inline-block;
    font-size: 0.9rem;
    width: 92%;
    height: 15.25rem;
    font-weight: 400;
  }

  #sureout img {
    display: inline-block;
    margin-top: 2rem;
    margin-bottom: 1rem;
    width: 5rem;
    height: 5rem;
  }

  #sureout p {
    text-align: center;
    font-size: 30px;
    color: #575757;
    font-weight: 500;
    width: 100%;
  }

  #sureout div {
    color: white;
  }

  #btnwait {
    display: inline-block;
    background: #c1c1c1;
    margin-right: .7rem;
    padding: 0.2rem 1rem;
    border-radius: 0.2rem;
  }

  #btnout {
    display: inline-block;
    background: #dd6b55;
    padding: 0.2rem 1rem;
    border-radius: 0.2rem;
  }

  #outbgc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .blackbgc {
    background-color: black;
    opacity: 0.2;
  }
</style>
