<template>
  <div class="myinfo">
    <router-link :to="{path: tocomponent}">
      <div id="info-out">
        <div id="info-left"><img :src="headimg" alt=""></div>
        <div id="info-mid">
          <p id="account">{{myusername}}</p>
          <div><img :src="phoneimg" alt=""><span>{{mobile}}</span></div>
        </div>
        <div id="info-right" class="glyphicon glyphicon-menu-right"></div>
      </div>
    </router-link>
    <router-link :to="{path:'/balance'}">
      <div id="balance">
        <p id="num1"><span id="font1">{{balance}}</span>元</p>
        <p id="name1">我的余额</p>
      </div>
    </router-link>
    <router-link :to="{path:'/discount'}">
      <div id="discount">
        <p id="num2"><span id="font2">{{disaccount}}</span>个</p>
        <p id="name2">我的优惠</p>
      </div>
    </router-link>
    <router-link :to="{path:'/integral'}">
      <div id="integral">
        <p id="num3"><span id="font3">{{integral}}</span>分</p>
        <p id="name3">我的积分</p>
      </div>
    </router-link>
    <router-link :to="{path:'/myorder'}">
      <div id="myorder">
        <img :src="order" alt="">
        <span class="names">我的订单</span>
        <span class="glyphicon glyphicon-menu-right"></span>
      </div>
    </router-link>
    <router-link :to="{path:'/integralshop'}">
      <div id="integralshop">
        <img :src="integra" alt="">
        <span class="names">积分商城</span>
        <span class="glyphicon glyphicon-menu-right"></span>
      </div>
    </router-link>
    <router-link :to="{path:'/elmvip'}">
      <div id="elmvip">
        <img :src="myvip " alt="">
        <span class="names">饿了么会员</span>
        <span class="glyphicon glyphicon-menu-right"></span>
      </div>
    </router-link>
    <router-link :to="{path:'/servercenter'}">
      <div id="servercenter">
        <img :src="integra" alt="">
        <span class="names">服务中心</span>
        <span class="glyphicon glyphicon-menu-right"></span>
      </div>
    </router-link>
    <router-link :to="{path:'/download'}">
      <div id="download">
        <img :src="elmimg " alt="">
        <span class="names">下载饿了么APP</span>
        <span class="glyphicon glyphicon-menu-right"></span>
      </div>
    </router-link>
    <div id="empty"></div>
  </div>
</template>

<script>
  import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
  import phone from "../../../static/minePicture/phone.png"
  import myorder from "../../../static/minePicture/order.png"
  import vip from "../../../static/minePicture/VIP.png"
  import integral from "../../../static/minePicture/integralshop.png"
  import elm from "../../../static/minePicture/bottom11.png"
  import head0 from "../../../static/minePicture/header0.png"

  export default {
    name: "MyInfo",
    data() {
      return {
        integral: "",
        disaccount: "",
        balance: "",
        tocomponent: "/login",
        mobile: "",
        myusername: "",
        headerimg: head0,
        phoneimg: phone,
        order: myorder,
        myvip: vip,
        integra: integral,
        elmimg: elm,
        headimg: head0
      }
    },


    created() {
         this.$store.commit("updateCharacter","我的");
      this.$store.commit("updateRoute","/my-position");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",true);


      getaccmsg:{
          this.myHttp.get(this.myApi.myApi.getaccmsg, (data) => {
          this.integral = data.point;
          this.disaccount = data.gift_amount;
          this.balance = data.balance;
          this.tocomponent = "/account";
          this.myusername = data.username;
          this.headimg = "http://elm.cangdu.org/img/" + data.avatar;
          if (data.mobile == "") {
            this.mobile = "暂无绑定手机号"
          } else {
            this.mobile = data.mobile
          }
          if (data.type == "GET_USER_INFO_FAIELD") {
            this.tocomponent = "/login";
            this.myusername = "登录/注册";
            this.mobile = "暂无绑定手机号";
            this.integral = 0;
            this.disaccount = 0;
            this.balance = 0
            this.headimg = head0
          }
        }, (err) => {

        })
      }
    }
  }
</script>

<style scoped>
  .myinfo {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }

  #info-out {
    width: 100%;
    height: 4.5rem;
    background-color: #3190e8;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  #info-left {
    padding-left: 1rem;
  }

  #info-left img {
    display: inline-block;
    width: 2.93rem;
    height: 2.93rem;
    border-radius: 50%;
  }

  #info-mid {
    padding-left: 0.5rem;
  }

  #info-mid img {
    display: inline-block;
    width: 0.9rem;
    height: 0.9rem;
  }

  #account {
    font-weight: 700;
    color: white;
    font-size: 0.95rem;
    width: 13rem;
    height: 1.1rem;
  }

  #info-mid div {
    font-weight: 700;
    color: white;
    font-size: 0.65rem;
    width: 13rem;
    height: 1.1rem;
  }

  #info-right {
    color: white;
    padding-right: 1rem;
  }

  #balance, #discount, #integral {
    margin-bottom: 1rem;
    background-color: white;
    border-left: 0.02rem solid #f5f5f5;
    float: left;
    width: 33.3%;
    box-sizing: border-box;
    height: 4.21rem;
  }

  #num1, #num2, #num3 {
    margin-top: 0.4rem;
    color: #666;
    font-weight: 400;
    font-size: 0.8rem;
    /*padding: .853333rem 0 .453333rem;*/
    text-align: center;
  }

  #name1, #name2, #name3 {
    box-sizing: border-box;
    color: #666;
    font-weight: 400;
    font-size: 0.8rem;
    text-align: center;
    line-height: 1.4rem;
  }

  #font1 {
    font-size: 1.2rem;
    color: #ff5f3e;
    font-weight: 700;
  }

  #font2 {
    font-size: 1.2rem;
    color: #6AC20B;
    font-weight: 700;
  }

  #font3 {
    font-size: 1.2rem;
    color: #ff5f3e;
    font-weight: 700;
  }

  #empty {
    clear: both;
  }

  #myorder, #integralshop, #elmvip, #servercenter, #download {
    margin-bottom: 0.1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 2.11rem;
    width: 100%;
    color: #333;
    font-size: 0.8rem;
    background-color: white;
    padding-left: 1rem;
  }

  #servercenter {
    margin-top: 0.8rem;
  }

  .names {
    width: 90%;
  }

  #myorder img, #integralshop img, #elmvip img, #servercenter img, #download img {
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
  }

</style>
