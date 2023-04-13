<template>
  <div class="box">
    <div>
      <!--<router-link :to="{path:'/xq'}" >-->
      <div style="color: white" @click="xiangq">
        <div>
          <img :src="imgTitle+storeData.image_path">
        </div>
        <div>
          <div>{{storeData.name}}</div>
          <div>
            <span>商家配送/分钟送达/{{storeData.piecewise_agent_fee.tips}}</span>
            <img src="../../assets/endPrice/jt.png">
          </div>
          <div>{{storeData.promotion_info}}</div>
        </div>
      </div>
      <div @click="huodong" style="color: white">
        <span style="color: white"><span style="background-color: #ff5f0d ; margin: 0 0.2rem ">减</span>{{storeData.activities[0].description}}</span>
        <span>
         <span>{{storeData.activities[0].id}}个活动</span>
        <img src="../../assets/endPrice/jt.png"/></span>
      </div>

    </div>
    <div>
      <div>
        <div>
          <router-link :to="{path:'/sp/spf'}">商品</router-link>
        </div>
        <div>
          <router-link :to="{path:'/sp/appraise'}">评价</router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
    <nav v-if="huo">
      <div>{{storeData.name}}</div>
      <div>
        <span>优惠信息</span>
      </div>
      <div>
        <span>减</span>
        <span style="font-size: 0.5rem">{{storeData.activities[0].description}}</span>
      </div>
      <div>
        <span>商家公告</span>
      </div>
      <div style="font-size: 0.5rem">{{storeData.promotion_info}}</div>
      <div id="but">
        <span @click="cha">
          <img src="../../assets/endPrice/ch.png"/>
        </span>
      </div>
    </nav>
    <nav-img style="position: fixed; top: 0; left: 0; z-index: 10000;width: 1.5rem;" @click="tohp">
      <img src="../../assets/img/prev.png" style="width: 90%"/>
    </nav-img>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //店铺信息
        storeData: {},
        imgTitle: 'http://elm.cangdu.org/img/',
        //是否创建活动页面
        huo:false,
      }

    },
    methods: {
      xiangq() {
        this.$router.push({path: '/xq'})
      },
      huodong() {
        // this.$router.push({path:'/hd'})
        this.huo = true
      },
      cha(){
       this.huo = false
      },
      tohp(){
        this.$router.go(-1);
      }
    },
    created() {
      //是否创建头部 尾部
      this.$store.commit('updateShowOfHidden', false);
      this.$store.commit('updateEndShowOfHidden', false);
      //商家信息头部/shopping/restaurant/1?latitude=31.22299&longitude=121.36025、
      ///shopping/restaurant/3269?latitude=31.22299&longitude=121.36025
      //商家产品分类和分类里的东西http://elm.cangdu.org/shopping/v2/menu?restaurant_id=1


      //上一个页面保存的过来的数据
      let id1 = localStorage.getItem('id_chen');
      if(id1==1){
        id1=3269;
      }
      console.log(id1);
      console.log(this.$route.query.id);
      this.myHttp.get(`/shopping/restaurant/${id1}?latitude=31.22299&longitude=121.36025`, data => {
        this.storeData = data;
        console.log(data)
      });
    },
  }
</script>

<style scoped>
  .box {
    width: 100%;
    height: 100%;
    background-color: darkgray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .box > div:nth-child(1) {
    flex: 1.4;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    padding: 0.3rem;
    z-index: 100;
    color: white;
  }

  .box > div:nth-child(2) {
    flex: 7.7;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .box > div:nth-child(3) {
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: #333333;
    z-index: 100;
  }

  .box > div:nth-child(1) > div:nth-child(1) {
    flex: 1 1;
    display: flex;
    margin-bottom: 0.2rem;
  }

  .box > div:nth-child(1) > div:nth-child(2) {
    flex: 1 1;
    display: flex;
    justify-content: space-between;
    font-size: 0.6rem;
  }

  .box > div:nth-child(1) > div:nth-child(2) > span > img {
    width: 0.6rem;
  }

  .box > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }

  .box > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) {
    flex: 3;
    margin-left: 0.3rem;
    display: flex;
    flex-direction: column;

  }

  .box > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > img {
    width: 100%;
  }

  .box > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) {
    flex: 5;
    font-size: 0.9rem;
  }

  .box > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) {
    flex: 2.5;
    font-size: 0.8rem;
  }

  .box > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    font-size: 0.6rem;
  }

  .box > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > img {
    width: 0.7rem;
  }

  .box > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) {
    flex: 2.5;
    font-size: 0.5rem;
    display: flex;
    align-items: center;
  }
  .box > div:nth-child(2) > div:nth-child(1) {
    /*height: 2rem;*/
    padding: 0.4rem 0;
    background-color: white;
    border-right: 1px solid #ccc;
    display: flex;
    font-size: 0.7rem;
    border-bottom: 0.01rem solid rgba(0, 0, 0, 0.15);
  }

  .box > div:nth-child(2) > router-view {
    height: 93%;
    border-right: 1px solid #ccc;
    display: flex;
    background-color: white;
  }

  .box > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav {
    background-color: black;
    z-index: 1000;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    padding: 2rem 1rem;
  }

  nav > div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    margin: 1rem 0;
  }

  nav > div:nth-of-type(3) {
    width: 100%;
    display: flex;
    justify-content: flex-start;

  }
  nav > div:nth-of-type(3)>span:nth-of-type(1) {
    background-color: #ff6017;
    margin-right: 0.5rem;
    font-size: 0.7rem;
  }

  nav > div:nth-of-type(5) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    font-size: 0.7rem;
  }
  nav > div:nth-of-type(2n)>span{
    border: 0.02rem solid white ;
    font-size: 0.6rem;
    padding: 0.2rem;
    border-radius: 20%;
  }
  #but>span{
    border: 0.02rem solid #f5f5f5;
    border-radius: 50%;
    margin-top: 2rem ;
  }
  #but>span>img{
    width: 1.3rem;
  }
</style>
