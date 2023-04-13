<template>
  <div id="newaddress">
    <ul>
      <li><input type="text" placeholder="请填写你的姓名" v-model="name"></li>
      <li @click="toSearchAddress">
        <input type="text" placeholder="小区/写字楼/学校等" v-model="area">
      </li>
      <li><input type="text" placeholder="请填写详细送餐地址" v-model="detailaddress" :style="redborder1"></li>
      <p class="des" :style="redp1">{{redp1content}}</p>
      <li><input type="text" placeholder="请填写能够练习到您的手机号" v-model="userphone" :style="redborder2"></li>
      <p class="des" :style="redp2">{{redp2content}}</p>
      <li id="spare"><input type="text" placeholder="备用联系电话（选填）" v-model="sparephone"></li>
      <p class="des" :style="redp3">请输入正确手机号</p>
    </ul>
    <div id="logout"><span @click="newAddress">新增地址</span></div>
  </div>
</template>

<script>
  export default {
    name: "NewAddress",
    created(){
      this.$store.commit("updateCharacter","新增地址");
      this.$store.commit("updateRoute","/address");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",false);
     this.area=this.$route.query.selectAddress;
    },
    data() {
      return {
        name: "",
        area: "",
        detailaddress: "",
        userphone: "",
        sparephone: "",
        redp1: "",
        redp1content: "",
        redborder1: "",
        redp2: "",
        redp2content: "",
        redborder2: "",
        redp3: "",
      }
    },
    watch: {
      detailaddress() {
        if (this.detailaddress.length < 3 && this.detailaddress.length >= 1) {
          this.redp1 = {display: 'block'};
          this.redborder1 = {border: "1px solid red"};
          this.redp1content = "送餐地址太短了，不能辨识"
        }
        if (this.detailaddress.length < 1) {
          this.redp1 = {display: 'block'};
          this.redborder1 = {border: "1px solid red"};
          this.redp1content = "请详细填写送餐地址"
        }
        if (this.detailaddress.length >= 3) {
          this.redp1 = {display: 'none'};
          this.redborder1 = "";
        }
      },
      userphone() {
        if ((this.userphone.length <= 10 && this.userphone.length >= 1) || this.userphone.length > 11) {
          this.redp2 = {display: 'block'};
          this.redborder2 = {border: "1px solid red"};
          this.redp2content = "请输入正确手机号"
        }
        if (this.userphone.length < 1) {
          this.redp2 = {display: 'block'};
          this.redborder2 = {border: "1px solid red"};
          this.redp2content = "手机号不能为空"
        }
        if (this.userphone.length > 10 && this.userphone.length < 12) {
          this.redp2 = {display: 'none'};
          this.redborder2 = "";
        }
      },
      sparephone() {
        if ((this.sparephone.length <= 10 && this.sparephone.length >= 1) || this.sparephone.length > 11) {
          this.redp3 = {display: 'block'};
        }
        if (this.sparephone.length ==11 ) {
          this.redp3 = {display: 'none'};
        }
      },
    },

    methods: {
      toSearchAddress() {
       // this.$router.push({path:"/searchaddress"})
        this.$router.push({path:'/search-address'})
      },
      newAddress(){
          this.$router.push({path:"/address"})
      }
    }
  }
</script>

<style scoped>
  #newaddress ul {
    padding: 0.4rem;
    margin-top: 0.7rem;
    background-color: white;
  }

  #newaddress ul li {
    margin-bottom: 0.4rem;
  }

  #newaddress ul #spare {
    margin-bottom: 0;
  }

  #newaddress ul li input {
    border: 1px solid #ddd;
    border-radius: 3px;
    font-size: .8rem;
    margin: 0 auto;
    padding: .3rem;
    outline: none;
    width: 100%;
    background-color: #f2f2f2;
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
    margin-top: 1.2rem;
    text-align: center;
    width: 95%;
    background-color: #4cd964;
    color: white;
    font-size: 0.7rem;
    opacity: 0.7;
  }

  .des {
    margin: 0.4rem 0;
    font-size: 0.4rem;
    color: #ea3106;
    display: none;
  }
</style>
