<template>
  <div id="app">
    <Header @toright="zhixing"></Header>
    <transition :name="changeother" >
      <router-view style="height: 100%;overflow: auto" />
    </transition>
    <End></End>
    <!-- 正在加载数据的动画页面   路由 /loading-data    -->
    <div id="loading-data" v-if="dong">
      <!--<button @click=" show = !show">更改状态</button>-->
      <transition name="my">
        <div v-if="show"  id="img_father">
          <img src="../static/img/icon_loading.png" id="img_move" :style="{bottom: bottom+'px'}"/></div>
      </transition>
      <span id="img-shadow"></span>
    </div>

  </div>
</template>

<script>
  import Header from './components/Header'
  import End from './components/End'

  export default {
    name: 'App',
    components: {Header, End},
    data(){
      return{
        show:true,
        bottom :0,
        timer:'',
        msgfromson:"",
        changeother:'left',
      }
    },
    methods:{
      zhixing(v){
        this.msgfromson=v
      },
      lunBo(){
        if(this.bottom > -300){
          this.bottom -= 50;
        }else {
          this.bottom = 0;
        }
      },
      shadow(){
      }
    },
    created(){
      if(this.msgfromson=="change"){
        this.changeother=right;
      }
      //   setInterval((()=>{
      //     this.show=!this.show;
      //   }) ,400);
      this.timer = setInterval((()=>{
        this.lunBo();
      }) ,800);
    },
    computed:{
      dong(){
       return this.$store.state.dong
      },
    },

  }
let screenWidth = window.screen.width;
  let html = document.documentElement;
  html.style.fontSize = screenWidth/375*20 +'px';
</script>

<style>
  * {
    padding: 0;
    margin: 0 ;
    text-decoration: none;
    list-style: none;
  }

  html, body {
    background-color: #f2f2f2 !important;
    font-size: 20px;
    width: 100%;
    height: 100%;
  }
  #app{
    overflow: auto;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  @keyframes shadowScale {
    0% {
      transform: scale(1);
    }
    20%{
      transform: scale(0.8);
    }
    40%{
      transform: scale(0.6);
    }
    60%{
      transform: scale(0.4);
    }
    80%{
      transform: scale(0.2);
    }

    100%{
      transform: scale(0)
    }

  }
  @keyframes imgFatherMove {
    100% {
      transform: translateY(-40px);
    }
    80%{
      transform: translateY(-20px);;
    }
    60%{
      transform: translateY(0px);
    }
    40%{
      transform: translateY(20px);
    }
    20%{
      transform: translateY(40px);
    }

    0%{
      transform: translateY(60px);
    }

  }
  #loading-data{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.09) ;
    position: absolute;
    /*padding-top:80%;*/
    /*padding-left:35%;*/
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 101000000;
  }
  #loading-data >div{
    position: absolute;
    right: 42%;
    top: 30%;
    width: 50px;
    height: 50px;
    overflow: hidden;
  }
  #loading-data >div >img{
    position: absolute;
    /*bottom:0;*/
    width: 50px;

  }
  #img-shadow{
    position: fixed;
    top: 45%;
    left: 40%;
    width: 100px;
    height:40px;
    border-radius: 50%;
    background-color: lightgray;
    border: 1px solid lightgray;
    animation: shadowScale  0.4s  infinite  alternate ;
  }
  #img_father{
    animation: imgFatherMove  0.4s  infinite  alternate ;
  }
  .left-enter-active {
    transition: all 0.4s ease;
  }
  .left-leave-active {
    transition: all 0.4s ease;
  }
  .left-enter, .left-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(-100%);
    opacity: 0;
  }
  /*.right-enter-active {*/
    /*transition: all 2s ease;*/
  /*}*/
  /*.right-leave-active {*/
    /*transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
  /*}*/
  /*.right-enter, .right-leave-to*/
    /*!* .slide-fade-leave-active for below version 2.1.8 *! {*/
    /*transform: translateX(100%);*/
    /*opacity: 0;*/
  /*}*/
</style>
