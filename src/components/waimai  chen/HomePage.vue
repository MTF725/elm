<template>
  <!--路由waimai  外卖主页-->
  <div id="box">
    <div id="title">
      <img src="../../assets/img/prev.png" @click="af"/>
      <span @click="bf">{{title | chan}}</span>
      <img src="../../assets/img/geren.png" @click="cf"/>
    </div>
    <swiper :options="swiperOption" id="ac">
      <swiper-slide>
        <router-link :to="{path:'flxq'}" class="one_yi" v-for="(v,i) in superStratumOne" :key="i">
          <img :src="imgTitle+v.image_url">
          <div>{{v.title}}</div>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link :to="{path:'flxq'}" class="one_yi" v-for="(v,i) in superStratumTwo" :key="i">
          <img :src="imgTitle+v.image_url">
          <div>{{v.title}}</div>
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination" id="ad"></div>
    </swiper>
    <div class="bottom">
      <div class="fujin">
        <img src="../../assets/endPrice/shangjia.png"/>附近商家
      </div>
      <div class="bottom_two" v-for="(v,i) in bottonRowData" :key="i">
        <router-link :to="{}" style="color: #666666" @click.native="locID(v.id)">
          <div class="bottom_left">
            <img :src="imgTitle1+'/'+v.image_path"/>
          </div>
          <div class="bottom_right">
            <div class="a_row">
            <span class="a_row_left">
            <span style="font-size: 0.6rem;background-color: #FFD930">品牌</span>
              <span>{{v.name}}</span></span>
              <span class="a_row_right">保准票</span>
              <div class="empty"></div>
            </div>
            <div class="b_row">
            <span class="b_row_left">
              <span>{{v.rating}}</span>月售{{v.recent_order_num}}单
            </span>
              <span class="b_row_right">
              <span class="white" style="background-color: #23d6ff">蜂鸟专送</span>
              <span :style="{border:'1px solid #23d6ff'}">准时达</span>
            </span>
              <div class="empty"></div>
            </div>
            <div class="c_row">
            <span class="c_row_left">
              <span>￥{{v.float_minimum_order_amount}}</span>起送配送费约{{v.float_delivery_fee}}元
            </span>
              <span class="c_row_right">
              <span>{{v.distance}}</span>
              <span style="color: #21b7ff">{{v.order_lead_time}}</span>
            </span>
            </div>
          </div>
          <div class="empty"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    data() {
      return {
        title:'',
        id_chen:1,
        imgTitle: 'https://fuss10.elemecdn.com',
        imgTitle1: 'http://elm.cangdu.org/img/',
        superStratumOne: [],
        superStratumTwo: [],
        bottonRowData: [],
        swiperOption: {
          // autoplay: {//自动播放
          //   delay: 2500,
          //   disableOnInteraction: false
          // },
          pagination: {//分页
            el: '.swiper-pagination',
            clickable: false,
            renderBullet(index, className) {//自定义分页的按钮
              return `<span class="${className} swiper-pagination-bullet-custom"></span>`
            }
          }
        },
      }
    },
    methods:{
      locID(v) {
        localStorage.id_chen = v;
        this.$router.push({path: '/sp'})
      },
      af(){
        this.$router.go(-1);
      },
      bf(){
        this.$router.push({path:'/my-position'})
      },
      cf(){
        this.$router.push({path:'/mine'})
      }
    },
    created() {
      this.$store.commit("updateDong",true);
      //是否创建头部 尾部
      // this.$store.commit("updateCharacter","河南省郑州市");
      this.$store.commit('updateShowOfHidden',true);
      this.$store.commit("updateEndShowOfHidden",true);
      // this.$store.commit('updateEndShowOfHidden',true);
      //https://elm.cangdu.org/v2/index_entry  食品分类列表
      if(localStorage.getItem("addname")){
        this.title=localStorage.getItem("addname");
      }else{
        this.title='外卖'
      }

     console.log(this.$route.query);
      this.myHttp.get('/v2/index_entry', (data) => {
        data.forEach((v, i) => {
          if (i < 8) {
            this.superStratumOne.push(v);
          } else {
            this.superStratumTwo.push(v);
          }
        });
        this.$store.commit("updateDong",false);
      });
      //  下面获取商铺列表
      this.myHttp.get('/shopping/restaurants?latitude=31.22967&longitude=121.4762', (data) => {
        this.bottonRowData = data
        console.log(this.bottonRowData)
      });
    },
    components: {swiper, swiperSlide},
    filters:{
      chan(q){
        if(q.length>9){
          return q.substr(0,9)+'....'
        }else {
          return q
        }
      }
    }
  }
</script>

<style scoped>
  #box {
    width: 100%;
    font-size: 0;
    position: relative;
    background-color: #f5f5f5;
  }

  .one_yi {
    display: inline-block;
    width: 25%;
    padding-top: 0.5rem;
  }

  .one_yi > img {
    width: 45%;
    display: block;
    margin: 0 auto;
  }

  .one_yi > div {
    font-size: 0.6rem;
    text-align: center;
  }

  .one_yi > button {
    font-size: 20px;
  }

  #ad {
    position: absolute;
    bottom: 0;
  }

  #ac {
    position: relative;
    padding-bottom: 1rem;
    background-color: #ffffff;
  }

  .bottom {
    background-color: #f5f5f5;
    margin-top: 0.2rem;
    padding-top: 1rem;
  }

  .bottom_two {
    background-color: #ffffff;
    padding: 0.3rem 0.6rem;
  }

  .fujin {
    background-color: #ffffff;
    font-size: 0.5rem;
    height: 1rem;
    line-height: 1rem;
    padding-left: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 1rem;

  }

  .fujin > img {
    width: 0.7rem;
    margin-right: 0.3rem;
  }

  .bottom_left {
    float: left;
    margin-right: 0.5rem;
  }

  .bottom_left > img {
    width: 2.5rem;
    margin-left: 0.5rem;
    border: 1px solid darkgray;
  }

  .bottom_right {
    font-size: 0.5rem;
  }

  .a_row {
    font-size: 0.7rem;
    height: 1rem;
  }

  .a_row_left {
    float: left;
  }

  .a_row_right {
    float: right;
  }

  .b_row {
    height: 1rem;
  }

  .b_row_left {
    float: left;
  }

  .b_row_right {
    float: right;
  }

  .c_row {
    height: 1rem;
  }

  .c_row_left {
    float: left;
  }

  .c_row_right {
    float: right;
  }

  .empty {
    clear: both;
  }
  #title{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 1.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3190e8;
    font-size: 0.8rem;
    padding: 0 0.3rem;
    color: white;
  }
  #title>img{
    width: 1.3rem;
    height: 1.3rem;
  }
</style>
