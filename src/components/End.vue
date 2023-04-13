<template>
  <div id="end" v-if="showOfHidden_E">
    <router-link :to="{path:'/hp'}" class="box" @click.native="img1=1">
      <img src="../assets/endPrice/e1.png" class="img" v-if="img1==1">
      <img src="../assets/endPrice/e.png" class="img" v-else>
      <div>外卖</div>
    </router-link>
    <router-link :to="{path:'/search_page'}" class="box"  @click.native="img1=2">
      <img src="../assets/endPrice/s1.png" class="img" v-if="img1==2">
      <img src="../assets/endPrice/s.png" class="img" v-else>
      <div>搜索</div>
    </router-link>
    <router-link :to="{path:'/order_page'}" class="box"  @click.native="img1=3">
      <img src="../assets/endPrice/d1.png" class="img" v-if="img1==3">
      <img src="../assets/endPrice/d.png" class="img" v-else>
      <div>订单</div>
    </router-link>
    <router-link :to="{path:'/mine'}" class="box"  @click.native="img1=4">
      <img src="../assets/endPrice/w1.png" class="img" v-if="img1==4">
      <img src="../assets/endPrice/w.png" class="img" v-else>
      <div>我的</div>
    </router-link>
  </div>
</template>

<script>
  import '../../node_modules/bootstrap/dist/css/bootstrap.css'

  export default {
    data() {
      return {
        img1:1,
        img2:'../assets/endPrice/s.png',
        img3:'../assets/endPrice/d.png',
        img4:'../assets/endPrice/w.png',
      }
    },
    computed:{
      showOfHidden_E(){
        return this.$store.state.end.showOfHidden;
      }
    }
  }
</script>

<style scoped>
  #end {
    width: 100%;
    background-color:white;
    border-top: 1px solid #cacaca;
    font-size: 0;
    position:fixed;
    bottom: 0;
    left: 0;
    height: 35px;
  }
  .box{
    display: inline-block;
    padding: 0;
    width: 25%;
    font-size: 10px;
    text-align: center;
    height: 1rem;
  }
  .img{
    width: 1rem;
    height: 1rem;
  }
</style>
