<template>
  <!-- 正在加载数据的动画页面   路由 /loading-data    -->
  <div id="loading-data">
    <!--<button @click=" show = !show">更改状态</button>-->
    <transition name="my">
      <div v-if="show"  id="img_father">
        <img id="img_move" src="../assets/img/icon_loading.png" alt="" :style="{bottom: bottom+'px'}" >
      </div>
    </transition>
    <span id="img-shadow"></span>
  </div>

</template>

<script>
  export default {
    name: "LoadingData",
    data(){
      return{
        show:true,
        bottom :0,
        timer:'',
      }
    },
    created(){
      //   setInterval((()=>{
      //     this.show=!this.show;
      //   }) ,400);
      this.timer = setInterval((()=>{
        this.lunBo();
      }) ,800);
    },
    methods:{
      lunBo(){
        if(this.bottom > -300){
          this.bottom -= 50;
        }else {
          this.bottom = 0;
        }
      },
      shadow(){
      }
    }
  }
</script>

<style scoped>
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
    position: absolute;
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

</style>
