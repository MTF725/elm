<template>

<div id="box">
  <div id="header" v-if="showOfHidden_H">
    <span id="d" @click="route_H">
      <div class="glyphicon glyphicon-menu-left navbar-left" ></div>
    </span>
    <span id="center">{{character_H}}</span>

  </div>
  <div id="two" v-if="showOfHidden_H"></div>
</div>
</template>

<script>
  import '../../node_modules/bootstrap/dist/css/bootstrap.css'

  export default {
    data() {
      return {
        // showOfHidden_H: "",//是否隐藏
        // character_H: '',//中间文字修改
        // route_H: "/",//路由跳转位置
      }
    },
    methods:{
      route_H(){
        this.$router.go(-1);
      }
    },
    computed:{
      showOfHidden_H(){
        return this.$store.state.header.showOfHidden
      },
      character_H(){
        return this.$store.state.header.character
      },
      // route_H(){
      //   return this.$store.state.header.route
      // }
    },
  }
</script>

<style scoped>
  #header {
    top: 0;
    left:0;
    width: 100%;
    background-color: #3190e8;
    height: 35px;
    font-size: 15px;
    padding-top: 8px;
    color: white;
    position: fixed;
    top: 0;
  }
  #two{
    height: 35px;
  }

  #center {
    width: 90%;
    text-align: center;
    display: inline-block;
  }
  #d{
    margin-left: 5px;
  }
</style>
