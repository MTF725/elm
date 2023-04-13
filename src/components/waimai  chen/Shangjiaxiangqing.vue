<template>
  <div id="box">
    <div>
      <div>活动与属性</div>
      <div>
        <span :style="{backgroundColor:'#'+ storeData.activities[0].icon_color,color:'white',padding:'0.2rem'}">减</span>
        <span style="font-size: 0.7rem">{{storeData.activities[0].description}}</span>
      </div>
      <div>
        <span :style="{backgroundColor:'#'+ storeData.supports[0].icon_color,color:'white',padding:'0.2rem'}">保</span>
        <span style="font-size: 0.7rem">{{storeData.supports[0].description}}</span>
      </div>
      <div>
        <span :style="{backgroundColor:'#'+ storeData.supports[1].icon_color,color:'white',padding:'0.2rem'}">准</span>
        <span style="font-size: 0.7rem">{{storeData.supports[1].description}}</span>
      </div>
      <div>
        <span :style="{backgroundColor:'#'+ storeData.supports[2].icon_color,color:'white',padding:'0.2rem'}">票</span>
        <span style="font-size: 0.7rem">{{storeData.supports[2].description}}</span>
      </div>
    </div>
    <div id="two">
      <router-link :to="{path:'/an'}">
        <span>食品监督安全公示</span>
        <div>
          <span>企业认证详情</span>
          <img src="../../assets/endPrice/jt.png">
        </div>
      </router-link>
        <div>
          <div>
          <img src="../../assets/endPrice/lh.png">
        </div>
        <div>
          <span>监督检查结果：良好</span>
          <span>检查日期</span>
        </div>
      </div>
    </div>
    <div id="three">
      <div>商家信息</div>
      <div>{{storeData.name}}</div>
      <div>
        <span>地址：{{storeData.address}}</span>
      </div>
      <div>营业时间：{{storeData.opening_hours}}</div>
      <div>
        <span>营业执照</span>
        <img src="../../assets/endPrice/d.png">
      </div>
      <div>
        <span>餐饮许可证</span>
        <img src="../../assets/endPrice/d.png">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        storeData:{},
      }
    },
    created() {
      this.$store.commit("updateDong",true);
      //是否创建头部 尾部
      this.$store.commit("updateCharacter","商家详情");
      this.$store.commit("updateRoute","/sp/spf");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",false);
      this.myHttp.get('/shopping/restaurant/3269?latitude=31.22299&longitude=121.36025', data => {
        this.storeData = data;
        console.log(this.storeData)
        this.$store.commit("updateDong",false);
      });
    },
  }
</script>

<style scoped>
  #box {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0.2rem 0 0 0;
    background-color: #f5f5f5;
  }

  #box > div {
    flex: 1;
    margin: 0.2rem 0;
    background-color: white;
  }
  #box > div:nth-child(1){
    padding: 0.3rem;
  }
  #box > div:nth-child(1) > div{
    margin-top: 0.3rem;
  }

  #box > div:nth-child(1) > div:nth-of-type(1) {
    border-bottom: 0.01rem solid rgba(0, 0, 0, 0.59);
    padding: 0.4rem;
    display: flex;
    align-items: center;
  }

  #box > div:nth-child(1) > div > span:nth-of-type(1) {
    width: 1rem;
    margin-right: 0.5rem;
  }

  #two {
    display: flex;
    flex-direction: column;
  }

  #two > a:nth-child(1) {
    flex: 1;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.01rem solid rgba(0, 0, 0, 0.73);
    padding: 0.3rem;
    color: black;

  }

  #two > a:nth-child(1) > div:nth-child(2) > span {
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.69);
  }

  #two > a:nth-child(1) > div:nth-child(2) > img {
    width: 1rem;
  }

  #two > div:nth-child(2) {
    flex: 2;
    display: flex;
    padding: 0.4rem;
  }

  #two > div:nth-child(2) > div:nth-child(1) {
    flex: 1;
  }

  #two > div:nth-child(2) > div:nth-child(1) > img {
    width: 100%;
    margin-right: 0.5rem;
  }

  #two > div:nth-child(2) > div:nth-child(2) {
    flex: 4;
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    justify-content: center;
    color: rgba(0, 0, 0, 0.69);
  }

  #two > div:nth-child(2) > div:nth-child(2) > span {
    padding-bottom: 0.3rem;
  }

  #three {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
  }

  #three > div {
    padding: 0.4rem;
    border-bottom: 0.02rem solid rgba(0, 0, 0, 0.73);
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.51);
  }

  #three > div:nth-child(1) {
    font-size: 1rem;
    color: black;
  }

  #three > div:nth-child(3) {
    display: flex;
    justify-content: space-between;
  }

  #three > div:nth-child(3) > a {
    border-radius: 50%;
    background-color: #84b3ff;
  }

  #three > div:nth-child(5) {
    display: flex;
    justify-content: space-between;
  }

  #three > div:nth-child(5) > img {
    width: 0.8rem;
  }

  #three > div:nth-child(6) {
    display: flex;
    justify-content: space-between;
  }

  #three > div:nth-child(6) > img {
    width: 0.8rem;
  }
</style>
