<template>
  <div class="box">
    <div class="Top_la">
      <div>
        <div @click="shangjian">
          <span>分类</span>
          <img src="../../assets/endPrice/j.png" class="xuan" :class="{xuan1:aD.show,xuan2:aD.show1}"/>
        </div>
        <div @click="shangjian1">
          <span>排序</span>
          <img src="../../assets/endPrice/j.png" class="xuan" :class="{xuan1:bD.show,xuan2:bD.show1}"/>
        </div>
        <div @click="shangjian2">
          <span>筛选</span>
          <img src="../../assets/endPrice/j.png" class="xuan" :class="{xuan1:cD.show,xuan2:cD.show1}"/>
        </div>
      </div>
      <div id="xiala">
        <transition name="xia">
          <div v-if="xialaD==1" id="laOne">
            <div>
              <div class="laOne_one" v-for="(v,i) in shopClassify" :key="i" @click="shang(i)">
                <div>
                  <img :src="imgTitle+v.image_url+'.png'"/>
                  <span>{{v.name}}</span>
                </div>
                <div>
                  <span>{{v.count}}</span>
                  <img src="../../assets/endPrice/jt.png"/>
                </div>
              </div>
            </div>
            <div>
              <div class="laOne_two" v-for="(v,i) in xiShopClassify[n]" @click="classfiyAj(v.id)">
                <span>{{v.name}}</span>
                <span>{{v.count}}</span>
              </div>

            </div>
          </div>
          <div v-if="xialaD==2" id="laTwo">
            <div @click="sort(4)">
              <img src="../../assets/endPrice/shangjia.png"/>
              <span>智能排序</span>
            </div>
            <div @click="sort(5)">
              <img src="../../assets/endPrice/shangjia.png"/>
              <span>距离最近</span>
            </div>
            <div @click="sort(6)">
              <img src="../../assets/endPrice/shangjia.png"/>
              <span>销量最高</span>
            </div>
            <div @click="sort(1)">
              <img src="../../assets/endPrice/shangjia.png"/>
              <span>起送最低</span>
            </div>
            <div @click="sort(2)">
              <img src="../../assets/endPrice/shangjia.png"/>
              <span>配送速度最快</span>
            </div>
            <div @click="sort(3)">
              <img src="../../assets/endPrice/shangjia.png"/>
              <span>评分最高</span>
            </div>
          </div>
          <div v-if="xialaD==3" id="laThree">
            <span>配送方式</span>
            <div @click="sai=!sai">
            <span>
           <img src="../../assets/endPrice/shangjia.png" v-if="sai"/>
               <img src="../../assets/endPrice/dh.png" v-else/>
              蜂鸟专送
            </span>
            </div>
            <span>商家属性(可多选)</span>
            <div>
              <p :class="{co:saiArr[0]==1}" @click="dui(0)">
                <img src="../../assets/endPrice/dh.png" v-if="saiArr[0]==1"/>
                <span v-else>品</span>
                品牌商家
              </p>
              <p :class="{co:saiArr[1]==1}" @click="dui(1)">
                <img src="../../assets/endPrice/dh.png" v-if="saiArr[1]==1"/>
                <span v-else>品</span>
                外卖保
              </p>
              <p :class="{co:saiArr[2]==1}" @click="dui(2)">
                <img src="../../assets/endPrice/dh.png" v-if="saiArr[2]==1"/>
                <span v-else>准</span>
                准时达
              </p>
              <p :class="{co:saiArr[3]==1}" @click="dui(3)">
                <img src="../../assets/endPrice/dh.png" v-if="saiArr[3]==1"/>
                <span v-else>新</span>
                新店</p>
              <p :class="{co:saiArr[4]==1}" @click="dui(4)">
                <img src="../../assets/endPrice/dh.png" v-if="saiArr[4]==1"/>
                <span v-else>付</span>
                在线付
              </p>
              <p :class="{co:saiArr[5]==1}" @click="dui(5)">
                <img src="../../assets/endPrice/dh.png" v-if="saiArr[5]==1"/>
                <span v-else>票</span>
                开发票
              </p>
            </div>
            <div id="four">
              <div>清空</div>
              <div @click="classfiyQu">
                <span>确定</span>
                <span v-if="que!=0">({{que}})</span>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom_two" v-for="(v,i) in bottonRowData" :key="i">
        <router-link :to="{path:'/sp'}" style="color: #666666">
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
              <span style="font-size: 0.4rem">￥{{v.float_minimum_order_amount}}</span>起送配送费约{{v.float_delivery_fee}}元
            </span>
              <span class="c_row_right">
              <span>{{v.distance}} /</span>
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
  import "../../../node_modules/bootstrap/dist/css/bootstrap.css"

  export default {
    name: "FenLeiXiangQing",
    data() {
      return {
        a: 0,
        b: 0,
        c: 0,
        aD: {
          show: false,
          show1: false
        },
        bD: {
          show: false,
          show1: false
        },
        cD: {
          show: false,
          show1: false
        },
        //商品列表数据
        bottonRowData: [],
        //商铺分类
        shopClassify: [],
        //细分
        n: 0,
        xiShopClassify: [],
        //细分商品请求
        xiShopClassifyData: 0,
        //筛选
        screen: [],
        imgTitle: 'https://fuss10.elemecdn.com/',
        imgTitle1: 'http://elm.cangdu.org/img/',
        //下拉框创建第几个
        xialaD: 1,
        //筛选里的对号
        sai: true,
        saiArr: [0, 0, 0, 0, 0, 0],
      }
    },
    methods: {
      shangjian() {
        this.b = 0;
        this.c = 0;
        this.bD.show1 = false;
        this.bD.show = false;
        this.cD.show1 = false;
        this.cD.show = false;
        this.a++;
        if (this.xialaD == 1) {
          this.xialaD = 0;
        } else {
          this.xialaD = 1;
        }
        if (this.a % 2 == 0) {
          //为0时触发show动画 0 --》 180
          if (this.aD.show1 == true && this.aD.show == true) {
            this.aD.show = !this.aD.show
          } else {
            this.aD.show1 = !this.aD.show1
          }
        } else {
          //为1时触发show动画 180 --》 0
          if (this.aD.show1 == true && this.aD.show == true) {
            this.aD.show1 = !this.aD.show1
          } else {
            this.aD.show = !this.aD.show
          }
        }
      },
      shangjian1() {
        this.b++;
        this.c = 0;
        this.a = 0;
        this.aD.show1 = false;
        this.aD.show = false;
        this.cD.show1 = false;
        this.cD.show = false;
        if (this.xialaD == 2) {
          this.xialaD = 0;
        } else {
          this.xialaD = 2;
        }
        if (this.b % 2 == 0) {
          //为0时触发show动画 0 --》 180
          if (this.bD.show1 == true && this.bD.show == true) {
            this.bD.show = !this.bD.show
          } else {
            this.bD.show1 = !this.bD.show1
          }
        } else {
          //为1时触发show动画 180 --》 0
          if (this.bD.show1 == true && this.bD.show == true) {
            this.bD.show1 = !this.bD.show1
          } else {
            this.bD.show = !this.bD.show
          }
        }
      },
      shangjian2() {
        this.b = 0;
        this.c++;
        this.a = 0;
        this.bD.show1 = false;
        this.bD.show = false;
        this.aD.show1 = false;
        this.aD.show = false;
        if (this.xialaD == 3) {
          this.xialaD = 0;
        } else {
          this.xialaD = 3;
        }
        if (this.c % 2 == 0) {
          //为0时触发show动画 0 --》 180
          if (this.cD.show1 == true && this.cD.show == true) {
            this.cD.show = !this.cD.show
          } else {
            this.cD.show1 = !this.cD.show1
          }
        } else {
          //为1时触发show动画 180 --》 0
          if (this.cD.show1 == true && this.cD.show == true) {
            this.cD.show1 = !this.cD.show1
          } else {
            this.cD.show = !this.cD.show
          }
        }
      },
      dui(q) {
        if (this.saiArr[q] != 0) {
          this.saiArr.splice(q, 1, 0)
        } else {
          this.saiArr.splice(q, 1, 1)
        }
        ;
        console.log(this.saiArr[q])
      },
      shang(i) {
        this.n = i;
      },
      //排序
      sort(q) {
        this.$store.commit("updateDong",true);
        this.xialaD = 0;
        this.myHttp.get(`/shopping/restaurants?latitude=31.22967&longitude=121.4762/restaurant_category_id=1&order_by=${q}`, (data) => {
          this.bottonRowData = data;
          this.$store.commit("updateDong",false);
        }, err => {
          console.log(err)
        });
      },
      //筛选确认按钮发起请求
      classfiyQu() {
        this.$store.commit("updateDong",true);
        this.xialaD = 0;
        this.screen = [9];
        this.myHttp.get(`/shopping/restaurants?latitude=31.22967&longitude=121.4762/restaurant_category_id=1&support_ids=${this.screen}`, (data) => {
          this.bottonRowData = data;
          console.log(data)
          this.$store.commit("updateDong",false);
        }, err => alert('数据请求失败'));
      },
      //细分商品请求
      classfiyAj(q) {
        this.$store.commit("updateDong",true);
        this.xialaD = 0;
        this.xiShopClassifyData = q;
        console.log(this.xiShopClassifyData);
        this.myHttp.get(`/shopping/restaurants?latitude=31.22299&longitude=121.36025&offset=0&limit=20&restaurant_category_ids[]=${this.xiShopClassifyData}`, (data) => {
          this.bottonRowData = data;
          console.log(data)
          this.$store.commit("updateDong",false);
        }, err => alert('数据请求失败'));
      }
    },
    computed: {
      que() {
        let a = 0;
        this.saiArr.forEach(v => {
          if (v == 1) {
            a++;
          }
        });
        if (!this.sai) {
          a++;
        }
        return a
      }
    },
    created() {
      this.$store.commit("updateDong",true);
      this.xialaD = 0;
      //是否创建头部 尾部
      this.$store.commit('updateShowOfHidden', true);
      this.$store.commit('updateEndShowOfHidden', false);
      ///shopping/restaurants?latitude=31.22299&longitude=121.36025  分类请求
      this.myHttp.get('/shopping/restaurants?latitude=31.22967&longitude=121.4762/restaurant_category_id=1', (data) => {
        this.bottonRowData = data;
        this.$store.commit("updateDong",false);
        // console.log(data)
      });
      //商品分类
      this.myHttp.get('/shopping/v2/restaurant/category', (data) => {
        this.shopClassify = data;
        data.forEach(v => {
          this.xiShopClassify.push(v.sub_categories);
        });
        console.log(this.shopClassify)
      });
    }
  }
</script>

<style scoped>
  .box {
    width: 100%;
  }

  .Top_la {
    position: fixed;
    top: 1.75rem;
    width: 100%;
    font-size: 0;
    border-bottom: 1px solid #f5f5f5;
    background-color: white;
  }

  .Top_la > div:nth-of-type(1) > div {
    display: inline-block;
    text-align: center;
    width: 33.333%;
    font-size: 0.5rem;
    line-height: 1.5rem;
    border-right: 0.5px solid #f5f5f5;
  }

  .Top_la > div:nth-of-type(3) {
    border: 0;
  }

  .xuan {
    display: inline-block;
    transform-origin: center center;
    width: 0.9rem;
  }

  .xuan1 {
    animation: bounce-in 1s forwards;
  }

  .xuan2 {
    animation: bounce-in1 1s forwards;
  }

  @keyframes bounce-in {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(180deg);
    }
  }

  @keyframes bounce-in1 {
    0% {
      transform: rotateZ(180deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }

  .bottom {
    /*background-color: #f5f5f5;*/
    /*margin-top: 0.7rem;*/
    padding: 1rem 0;
    margin-top: 1rem;
  }

  .bottom_two {
    padding: 0.5rem;
    background-color: #ffffff;
    border-bottom: 0.02rem solid #f5f5f5;
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
    font-size: 0.4rem;
  }

  .white {
    color: white;
    font-size: 0.4rem;
    padding: 0.1rem;
  }

  #xiala {
    width: 100%;
    background-color: white;
    font-size: 20px;
    padding: 0.3rem 0;
  }

  #laOne {
    display: flex
    /*padding: 0.2rem;*/
  }

  #laOne > div {
    flex: 1;
  }

  #laOne > div:nth-of-type(1) {
    height: 11rem;
    overflow: auto;
  }

  #laOne > div:nth-of-type(2) {
    background-color: white;
    height: 11rem;
    overflow: auto;
  }

  .laOne_one {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.6rem;
    padding: 0.3rem;
    background-color: #f5f5f5;
  }

  .laOne_one > div {
    display: flex;
    align-items: center;
  }

  .laOne_one > div:nth-of-type(2) > span {
    background-color: #e2e2e2;
    border-radius: 25%;
  }

  .laOne_one > div:nth-of-type(1) > img {
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 0.2rem;
  }

  .laOne_one > div:nth-of-type(2) > img {
    width: 0.6rem;
    height: 0.6rem;
    margin-left: 0.2rem;
  }

  .laOne_two {
    display: flex;
    justify-content: space-between;
    font-size: 0.6rem;
    padding: 0.3rem 0;
    margin: 0 0.3rem;
    align-items: center;
    border-bottom: 0.02rem solid #dcdcdc;
  }

  #laTwo {
    display: flex;
    flex-direction: column;
    padding: 0 0.6rem;
  }

  #laTwo > div {
    padding: 0.3rem;
    border-bottom: 0.02rem solid #f5f5f5;
  }

  #laTwo > div > img {
    width: 1rem;
    margin-right: 0.2rem;
  }

  #laTwo > div > span {
    font-size: 0.6rem;
  }

  #laThree {
    display: flex;
    flex-direction: column;
    font-size: 0.6rem;
    padding: 0.5rem;
  }

  #laThree > div:nth-of-type(1) {
    margin: 0.6rem 0;
  }

  #laThree > div:nth-of-type(1) > span > img {
    width: 0.6rem;
  }

  #laThree > div:nth-of-type(1) > span {
    border: 0.02rem solid #f5f5f5;
    padding: 0.3rem 1rem 0.3rem 0.3rem;
  }

  #laThree > div:nth-of-type(2) {
    display: flex;
    flex-wrap: wrap;
  }

  #laThree > div:nth-of-type(2) > p {
    border: 0.02rem solid #f5f5f5;
    width: 4.2rem;
    height: 1.3rem;
    margin: 0.2rem;
    display: flex;
    align-items: center;
  }

  #laThree > div:nth-of-type(2) > p > span {
    margin-right: 0.3rem;
    margin-left: 0.3rem;
  }

  #laThree > div:nth-of-type(2) > p > img {
    margin-right: 0.3rem;
    margin-left: 0.3rem;
    width: 0.6rem;
  }

  #four {
    display: flex;
    justify-content: space-between;
    background-color: #f5f5f5;
    padding: 0.3rem;
  }

  #four > div {
    width: 100%;
    height: 100%;
    padding: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7%;
  }

  #four > div:nth-of-type(1) {
    margin-right: 0.3rem;
    background-color: white;
  }

  #four > div:nth-of-type(2) {
    color: white;
    background-color: #56D176;
  }

  .co {
    color: #57A9FF;
  }
  .xia-enter-active, .xia-leave-active {
    height: 11rem;
    transition: all 0.5s;
  }
  .xia-enter, .xia-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    height: 0;
  }
</style>
