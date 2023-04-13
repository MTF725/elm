<template>
  <div id="box">
    <router-link :to="{path:'/delievery-address'}" v-if="
c" id="one">
      <img src="../../assets/endPrice/dt.png"/>
      <div>请添加一个收货地址</div>
      <img src="../../assets/endPrice/jt.png"/>
    </router-link>
    <div id="zhong" v-else @click="tod">
      <div>
        <div>
          <span>{{data.name}}</span>
          <span>{{data.sex}}</span>
          <span>{{data.phone}}</span>
        </div>
        <div>
          <span style="color: red">家</span>
          <span>{{data.address | chan}}</span>
        </div>
      </div>
      <div>
        <img src="../../assets/endPrice/dh.png"/></div>
    </div>
    <div id="two">
      <div></div>
      <div>送达时间</div>
      <div>
        <span>尽快送达 | 预计 <span>08:05</span></span>
        <span>蜂鸟专送</span>
      </div>
    </div>
    <div id="three">
      <div>
        <span>支付方式</span>
        <router-link :to="{}" @click.native="tanFun">
          <span>在线支付</span>
          <img src="../../assets/endPrice/jt.png"/>
        </router-link>
      </div>
      <div>
        <span>红包</span>
        <span>暂时只能在app里使用</span>
      </div>
    </div>
    <div id="four">
      <div>
        <img :src="imgTitle+storeData.image_path"/>
        <span>{{storeData.name}}</span>
      </div>
      <div>
        <div class="four_shang" v-for="(v,i) in routerData">
          <span>{{v.name}}</span>
          <span>×{{v.oneNum}}</span>
          <span>￥{{v.oneNum*v.specfoods[0].price}}</span>
        </div>
      </div>
      <div>
        <div>
          <span>订单</span>
          <span>待支付</span>
        </div>
        <div>
          <span>{{jiage}}</span>
          <span>{{jiage}}</span>
        </div>
      </div>
    </div>
    <div id="five">
      <router-link :to="{path:'/bz'}">
        <div>订单备注</div>
        <div>
          <span>{{bei}}</span>
          <img src="../../assets/endPrice/jt.png"/>
        </div>
      </router-link>
      <router-link :to="{path:'/fp'}">
        <div>发票抬头</div>
        <div>
          <span>不需要开发票</span>
          <img src="../../assets/endPrice/jt.png"/>
        </div>
      </router-link>
      <div></div>
    </div>
    <div id="six">
      <div>
        <span>待支付</span><span>￥{{jiage}}</span>
      </div>
      <div @click="tozhidu">确认下单</div>
    </div>
    <div id="qi" @click="tanFun1" v-if="tan">
      <div :class="{tanDC:tan}">
        <div>支付方式</div>
        <div>
          <div>
            <span>货到付款(商家不支持此方式)</span>
            <img src="../../assets/endPrice/duihaogrey.png"/>
          </div>
          <div>
            <span>在线支付</span>
            <img src="../../assets/endPrice/duihaogreen.png"/>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  let a = '';
  export default {
    data() {
      return {
        //弹框是否出来
        tan: false,
        //路由页面传来的值
        routerData: [],
        //店铺信息
        storeData: [],
        imgTitle: 'http://elm.cangdu.org/img/',
        //备注
        beizu: '',
        c:true,
        data:{}
      }
    },
    methods: {
      tanFun() {
        this.tan = !this.tan
      },
      tanFun1() {
        this.tan = false
      },
      tozhidu(){
        this.$router.push({path:'/exchangevip'})
      },
      tod(){
        this.$router.push({path:'/delievery-address'})
      }
    },
    computed: {
      jiage() {
        let a = 0
        this.routerData.forEach(v => a += v.oneNum * v.specfoods[0].price);
        return a;
      },
      bei(){
        // if(this.beizu.length<=0){
        //  return '口味’偏好等'
        // }else {
        //   if( this.beizu.length>15){
        //     return this.beizu.substr(0,15)+'...'
        //   }else {
            return this.beizu
        //   }
        // }
      },
    },
    created() {
      console.log(this.$route.query.data );
      if(this.$route.query.data){
this.c=false
        this.data = this.$route.query.data
      }else {
        this.c=true
      }
      //是否创建头部 尾部
      this.$store.commit("updateCharacter","确认下单");
      this.$store.commit("updateRoute","/sp/spf");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",false);
      //路由跳转的位置
      this.$store.commit('updateRoute', '/sp/spf');
      this.routerData = JSON.parse(localStorage.getItem("cartData"))
      console.log('加载本地购物车保存的数据');
      //头像
      this.myHttp.get('/shopping/restaurant/3269?latitude=31.22299&longitude=121.36025', data => {
        this.storeData = data;
      });
      //备注信息
      if(!(this.$route.query.a)){
        this.beizu = a
        console.log('加载更新时保存的备注数据')
      }else {
        this.beizu = this.$route.query.a
      }
    },
    updated() {
      a =this.beizu ;
    },
  }
</script>

<style scoped>
  #box {
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    overflow: auto;
  }

  #box > * {
    flex: 1;
    margin-bottom: 0.4rem;
    background-color: white;
    padding: 0.3rem;
    color: black;
  }

  #one {
    display: flex;
    padding: 0.5rem 1rem;
    justify-content: space-between;
    align-items: center;
  }

  #one > img:nth-of-type(1) {
    flex: 1;
    width: 1rem;
  }

  #one > div {
    flex: 8;
  }

  #one > img:nth-of-type(2) {
    flex: 1;
    width: 1rem;
  }

  #two {
    display: flex;
    align-items: center;
  }

  #two > div:nth-of-type(1) {
    flex: 0.1;
    background-color: #459cff;
    width: 0.2rem;
    height: 100%;
    padding: 2rem 0;
    border: 0;
    margin-right: 1.5rem;
  }

  #two > div:nth-of-type(2) {
    flex: 3;
    font-weight: bold;
    font-size: 1rem;
  }

  #two > div:nth-of-type(3) {
    flex: 6.9;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 0.7rem;
    color: #2957ff;
  }

  #two > div:nth-of-type(3) > span:nth-child(2) {
    background-color: #2ba5ff;
    color: white;
    border-radius: 10%;
    margin-top: 0.3rem;
  }

  #three {
    display: flex;
    flex-direction: column;
  }

  #three > div {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    color: #b1b1b1;

  }

  #three > * {
    font-size: 0.6rem;
  }

  #three > div:nth-of-type(1) {
    border-bottom: 0.02rem solid #f5f5f5;
  }

  #three > div:nth-of-type(1) > a {
    color: #b1b1b1;
  }

  #three > div:nth-of-type(1) > a > img {
    width: 1rem;
    color: #b1b1b1;
  }

  #four {
    display: flex;
    flex-direction: column;
    padding: 0 0.5rem;
  }

  #four > div:nth-of-type(1) {
    border-bottom: 0.02rem solid #f5f5f5;
    padding: 0.5rem 0.3rem;
  }

  #four > div:nth-of-type(1) > img {
    width: 1.3rem;
  }

  .four_shang {
    display: flex;
    justify-content: space-between;
    padding: 0.3rem 0.3rem;
    color: #6a6a6a;
    font-size: 0.8rem;
  }

  .four_shang > span:nth-of-type(1) {
    flex: 2;
  }

  .four_shang > span:nth-of-type(2) {
    flex: 3;
    display: flex;
    justify-content: flex-end;
    padding-right: 2rem;
    color: red;
  }

  .four_shang > span:nth-of-type(3) {
    flex: 1.4;
    display: flex;
    justify-content: flex-end;
  }

  #four > div:nth-of-type(3) {
    color: #6a6a6a;
    font-size: 0.8rem;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0.3rem;
    border-top: 0.02rem solid #f5f5f5;
  }

  #four > div:nth-of-type(3) > div {
    display: flex;
    flex-direction: column;
  }

  #four > div:nth-of-type(3) > div > span {
    margin: 0.3rem 0;
  }

  #five {
    display: flex;
    flex-direction: column;
    padding: 0 0.5rem;
    margin-bottom: 3.2rem;
    font-size: 0.6rem;
  }

  #five > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem 0;
    color: #6b6b6b;
  }

  #five > a:nth-of-type(1) {
    border-bottom: 0.04rem solid #f5f5f5;
  }

  #five > a > div > img {
    width: 0.7rem;
  }

  #five > a > div > span {
    font-size: 0.6rem;
  }

  #six {
    position: fixed;
    bottom: -0.35rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: #3b3b3b;
    color: white;
    padding: 0;
    font-size: 0.8rem;
  }

  #six > div:nth-of-type(1) {
    flex: 2;
    padding-left: 0.7rem;
    display: flex;
    align-items: center;
  }

  #six > div:nth-of-type(2) {
    flex: 1;
    background-color: olivedrab;
    padding: 0.7rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #qi {
    background-color: white;
    flex: 1;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: -0.4rem;
    padding: 0;
    display: flex;
    align-items: flex-end;
  }

  #qi > div {
    width: 100%;
    background-color: white;
    font-size: 0.8rem;
  }

  #qi > div > div:nth-of-type(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6rem;
    background-color: #f5f5f5;
  }

  #qi > div > div:nth-of-type(2) {
    margin-bottom: 3rem;
  }

  #qi > div > div:nth-of-type(2) > div {
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 0;
    margin: 0 0.5rem;
  }

  #qi > div > div:nth-of-type(2) > div > img {
    width: 1rem;
    height: 1rem;
  }

  .tanDC {
    animation: tanD .5s linear;
  }

  @keyframes tanD {
    0% {
      height: 0;
    }
    100% {
      height: 26%;
    }
  }

  #zhong{
    display: flex;
    font-size: 0.6rem;
    font-weight: bold;
    padding: 0.5rem;
    justify-content: space-between;
    align-items: center;
  }
  #zhong>div:nth-of-type(1){
    display: flex;
    flex-direction: column;
  }
  #zhong>div:nth-of-type(1)>div:nth-of-type(1){
    margin-bottom: 0.5rem;
  }
  #zhong>div>span{
    margin-right: 0.2rem;
  }
  #zhong>div:nth-of-type(2)>img{
    width: 1rem;
  }
</style>
