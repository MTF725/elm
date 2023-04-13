<template>
<div id="box">
  <div>
    <span>不需要开发票</span>
    <div @click="num=!num">
      <img :src="num?img:img1"/>
      <img src="../../assets/endPrice/duihaogreen.png" alt="" v-if="num">
      <img src="../../assets/endPrice/duihaogrey.png" alt="" v-else>
    </div>
  </div>
  <div @click="tiao">确定</div>
</div>
</template>

<script>
  export default {
    data(){
      return{
        num:true,
        // img:'../../assets/endPrice/duihaogreen.png',
        // img1:'../../assets/endPrice/duihaogrey.png'
      }
    },
    created() {
      //是否创建头部 尾部
      this.$store.commit('updateShowOfHidden', true);
      this.$store.commit('updateEndShowOfHidden', false);
      //路由跳转的位置
      this.$store.commit('updateRoute', '/qr');
    },
    methods:{
     tiao(){
       this.$router.push({path:'/qr'})
     }
    }
  }
</script>

<style scoped>
#box{
  display: flex;
  flex-direction: column;
  height: 96%;
  background-color: #f5f5f5;
}
  #box>div:nth-of-type(1){
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    align-items: center;
    background-color: white;
  }
#box>div:nth-of-type(1)>span{
  padding: 1rem;
}
#box>div:nth-of-type(1)>div{
  padding: 1rem;
}
#box>div:nth-of-type(1)>div>img{
  width: 1rem;
}
#box>div:nth-of-type(2){
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem 0;
  background-color: #4CD964;
  border-radius: 5%;
  color: white;
}
  .bei{
    background-color: #4CD964;
  }
</style>
