<template>
  <div id="cardforvip">
    <div id="part1">成功兑换后将关联到当前账号：<span>{{username}}</span></div>
    <div id="part2">
      <input type="text" placeholder="请输入10位卡号" maxlength="10">
      <input type="text" placeholder="请输入6位卡密" maxlength="6">
    </div>
    <div id="sureexchange"><span @click="btnexchange">兑换</span></div>
    <div id="notice">
     <h3>——温馨提示——</h3>
      <p>新兑换的会员服务，权益以「会员说明」为准。<br>月卡：30次减免配送费<br>季卡：90次减免配送费<br>年卡：360次减免配送费<br>*仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: "CardForVip",
    data() {
      return {
        username: "",
      }
    },
    methods: {
      btnexchange() {

      }
    },
    created() {
      this.$store.commit("updateCharacter","兑换会员");
      this.$store.commit("updateRoute","/elmvip");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",false);

      this.myHttp.get(this.myApi.myApi.getaccmsg, (data) => {
        this.username = data.username;
      }, (err) => {
        alert(err)
      })
    }
  }
</script>

<style scoped>
  #part1 {
    font-size: 0.7rem;
    color: #666666;
    padding: 0.6rem 0.85rem;
  }

  #part1 span {
    font-size: 0.8rem;
    color: #333333;
    font-weight: 700;
  }

  #part2 input {
    border: 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.02);
    font-size: 0.7rem;
    outline: none;
    width: 100%;
    padding: 0.4rem 0.82rem;
  }

  #sureexchange {
    width: 100%;
    text-align: center;
  }

  #sureexchange span {
    border-radius: 0.2rem;
    display: inline-block;
    line-height: 2.2rem;
    height: 2.2rem;
    margin-top: 2rem;
    text-align: center;
    width: 95%;
    background-color: #cccccc;
    color: white;
    font-size: 0.7rem;
  }
  #notice{
    padding-right: 0.4rem;
    color: #aaaaaa;
    font-size: 0.6rem;
  }
  #notice h3{

    font-size: 0.8rem;
    text-align: center;
  }
  #notice p{
    margin-left: 2rem;
  }
</style>
