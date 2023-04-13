<template>
  <div id="box">
    <div>
      <img :src="'http://elm.cangdu.org/img/'+products.image_path"/>
    </div>
    <div>
      <div>{{products.name}}</div>
      <div id="one">
        <span>评分</span>
        <van-rate v-model="value" allow-half size="2"/>
        <span style="color: red">{{value}}</span>
      </div>
      <div id="two">
        <p>月售{{products.month_sales}}单</p>
        <p style="color: red">售价￥{{products.specfoods[0].price}}起</p>
      </div>
      <div id="three">
        <p>评论数{{products.rating_count}}</p>
        <p>好评率{{products.satisfy_rate}}%</p>
      </div>
    </div>
  </div>
</template>

<script>
  let a = [];
  export default {
    data() {
      return {
        products: [],
      }
    },
    computed: {
      //vant组件数据
      value() {
        return this.products.rating
      }
    },
    created() {
      //获取路由sp/spf传来的数据
      this.products = JSON.parse(this.$route.params.data);
      //是否创建头部 尾部
      this.$store.commit('updateShowOfHidden', true);
      this.$store.commit('updateEndShowOfHidden', false);
      //头部路由跳转的位置
      this.$store.commit('updateRoute', '/sp/spf');
      //头部内容
      this.$store.commit('updateCharacter', this.products.name);
    },
  }
</script>

<style scoped>
#box{
  display: flex;
  flex-direction: column;
  padding: 0 0.6rem;
}
#box>div:nth-of-type(1){
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
#box>div:nth-of-type(2)>div{
  font-size: 0.6rem;
  padding: 0.3rem 0;
}
#box>div:nth-of-type(2)>div:nth-of-type(1){
    font-size: 1rem;
    color: #4b0616;
    padding: 0.5rem 0;
  }
  #two{
    display: flex;
    flex-direction: row;
  }
#two>p{
  margin-right: 0.6rem;
}
#three{
  display: flex;
  flex-direction: row;
}
#three>p{
  margin-right: 0.6rem;
}
</style>
