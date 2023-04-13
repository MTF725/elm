<template>
  <div id="username">
    <input type="text" placeholder="输入用户名" v-model="demo" :style="redborder">
    <p :style="redfont">用户名只能修改一次（5-24字符之间）</p>
    <span @click="changename" :style="btn">确认修改</span>
  </div>
</template>

<script>
  export default {
    name: "Username",
    data() {
      return {
        demo: "",
        redfont: "",
        redborder: "",
        value: "",
        btn:""
      }
    },
   watch:{
     demo(val){
       if (this.demo.length >= 5 && this.demo.length <= 24) {
         this.redfont = {color: "#666"};
         this.redborder = {border: "1px solid #ddd"};
         this.btn={opacity:1}
       }
       if ((this.demo.length >= 1 && this.demo.length < 5) || (this.demo.length >= 24)) {
         this.redfont = {color: "#ea3106",margin:"0",fontsize:"0.7rem"};
         this.redborder = {border: "1px solid #ea3106"};
       }
     }
   },

    methods: {
      changename() {

      }
    },
    created(){
      this.$store.commit("updateCharacter","修改用户名");
      this.$store.commit("updateRoute","/account");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",false);
    }
  }
</script>

<style scoped>
  #username {
    padding: 0.4rem;
  }

  #username input {
    background: none;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: .2rem .1rem;
    line-height: 1.2rem;
    font-size: .7rem;
    display: block;
    width: 100%;
    height: 1.9rem;
  }

  #username p {
    font-size: .6rem;
    margin: 0.6rem 0;
  }

  #username span {
    margin-top: 0.6rem;
    background-color: #3190e8;
    display: inline-block;
    width: 100%;
    line-height: 2rem;
    font-size: .7rem;
    color: #fff;
    opacity: .6;
    transition: all 1s;
    height: 2.3rem;
    text-align: center;
    line-height: 2.3rem;
  }
</style>
