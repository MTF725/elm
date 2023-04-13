<template>
  <div id="box2">
    <div class="box">
      <div>
        <router-link :to="{}" v-for="(v,i) in classify " :key='i' @click.native="miaodian(i)"
                     :style="{backgroundColor:num==i?'white':'#ededed'}">
          <div v-if="num==i"></div>
          <span>{{v.name}}</span>
          <p
            style="border-radius: 50%;background-color: red;width: 0.7rem;height: 0.7rem;text-align: center;color: white"
            v-if="v.classifySumData!=0">{{v.classifySumData}}</p>
        </router-link>
      </div>
      <div>
        <div class="shangping" v-for="(v,i) in classify" id="a1">
          <div class="title" ref='ss'>
            <span>{{v.name}}<span style="font-size: 0.3rem">{{v.description}}</span></span>
          </div>
          <!--单个商品页面-->
          <div class="xuanze" v-for="(q,w) in v.foods" :key="w">
            <div @click="produstTo(q)"><img :src="imgTitle1+q.image_path"/></div>
            <div>
              <div>{{q.name}}</div>
              <div>{{q.description}}</div>
              <div>月售{{q.month_sales}},好评率{{q.satisfy_rate}}%</div>
              <div><span>{{q.acategory_id}}</span></div>
              <div>
                <div>{{q.specfoods[0].price}}</div>
                <div class="jia">
                  <span @click="jianhao(q,v)" v-if="q.oneNum>0?((q.specfoods.length>1?false:true) ):false">➖</span>
                  <div>{{q.oneNum>0?q.oneNum:''+q.specfoods.length>1?q.twoNum:''}}</div>
                  <span v-if="q.duo" @click="jiahao(q,v,$event)" ref="yijia">➕</span>
                  <span v-else style="borderRadius:40%" @click="xuangui(q)">选规格</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--//购物车-->
    <div id="box1">
      <div>
        <div @click="tang" :class="{aaa:tsd}" id="ccc">
          <div id="cart" :class="{co:cartB}" ref="yicart">
            <img src="../../assets/endPrice/gw.png"/></div>
        </div>
        <div>
          <div>￥{{zongjia}}</div>
          <div>配送费￥5</div>
        </div>
        <div @click="ruterQ">去结算</div>
      </div>
      <div v-if="taJ">
      <span class="qing">
        <span>购物车</span>
        <span @click="qing">清空</span>
      </span>
        <div v-for="(v,i) in cartJ" style="font-size: 0.6rem">
          <div style="flex: 3;margin-bottom: 0.3rem">{{v.name | Vname()}}</div>
          <div>￥{{v.specfoods[0].price}}</div>
          <div>
            <div class="jia1">
              <span @click="jianhao1(v)">➖</span>
              <div>{{v.oneNum}}</div>
              <span @click="jiahao1(v)">➕</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--多选框弹框-->
    <span id="tankuan" v-if="duo">
       <div id="duo">
       <div id="duo_one">
       <span>{{guiGe.name}}</span>
       <span @click="duo=false">❌</span>
     </div>
      <div id="duo_two">
        <span>规格</span>
        <span>
          <span @click="duoxuanS=0" :class="{co:duoxuanS==0}">{{guiGe.specfoods[0].specs_name}}</span>
          <span @click="das" :class="{co:duoxuanS==2}">{{guiGe.specfoods[1].specs_name}}</span>
        </span>
      </div>
      <div id="duo_three">
        <span>￥{{guiGe.specfoods[duoxuanS].price}}</span>
        <span @click="duoxuanJ">加入购物车</span>
      </div>
 </div>
    </span>
  </div>
</template>

<script>
  //保存分类总数
  // let fenData = [];
  let x = 0
  export default {
    data() {
      return {
        //分类
        classify: [],
        imgTitle1: 'http://elm.cangdu.org/img/',
        num: 0,
        //弹起页面
        ta: false,
        //购物车数据
        cartData: [],
        //多选择弹框是否创建
        duo: false,
        //选规格
        guiGe: [],
        //多选选择类型操作选择的个数
        duoxuanS: 0,
        duoxuanD: true,
        tsd: false,
      }
    },
    methods: {
      miaodian(i) {
        //添加跳转位置
        this.num = i
        // this.$refs.ss[i].parentNode.parentNode.scrollTop = this.$refs.ss[i].offsetTop - this.$refs.ss[0].offsetTop
        let q = 0;
        let ss1 = this.$refs.ss
        let a = setInterval(function (i, ss1) {
          // console.log(q)
          if (q >= ss1[i].offsetTop - ss1[0].offsetTop) {
            ss1[i].parentNode.parentNode.scrollTop = 0
            clearInterval(a);
          } else {
            q += 200;
            if (q >= ss1[i].offsetTop - ss1[0].offsetTop) {
              q = ss1[i].offsetTop - ss1[0].offsetTop;
              ss1[i].parentNode.parentNode.scrollTop = q
              clearInterval(a)
            }
            ss1[i].parentNode.parentNode.scrollTop = q
          }
        }, 1, i, ss1)

      },
      //判断减号是否存在
      jiahao(q, v, e) {
        q.oneNum++;
        v.classifySumData++;
        let _this = this;
        let dom = e.currentTarget;
        let dom1 = this.$refs.yicart;
        let dom2 = document.createElement("div");
        let f = document.getElementById('box');
        dom2.style.position = 'fixed';
        dom2.style.width = '1rem';
        dom2.style.height = '1rem';
        dom2.style.backgroundColor = '#3190e8';
        dom2.style.borderRadius = "50%";
        dom2.style.top = dom.getBoundingClientRect().top + "px";
        dom2.style.left = dom.getBoundingClientRect().left + "px";
        f.appendChild(dom2);

        console.log(dom2.style.top);
        console.log(dom2.style.left);

        // console.log(dom2);
        let x = 0, y = 0;
        //x为0时原位置  xh   left 位移的距离    left
        //yh为 topL  位移的距离
        let xh = dom1.getBoundingClientRect().left - dom.getBoundingClientRect().left;
        let yh = dom1.getBoundingClientRect().top - dom.getBoundingClientRect().top;
        let p = xh * xh / (-2 * yh);

        function flicker() {
          // 抛物线公式：x2=-2py
          // x 可以控制速度
          x -= 8;
          y = (x * x) / (-2 * p);
          // console.log(x,xh);
          if (x > xh) {
            requestAnimationFrame(flicker);
            dom2.style.transform = "translate(" + x + "px, " + y + "px)"
          } else {
            dom2.style.transform = "translate(" + 0 + "px, " + 0 + "px)"
            f.removeChild(dom2);
            _this.tsd = true;
          }
        }
        flicker()
      },
      jianhao(q, v) {
        q.oneNum--;
        v.classifySumData--;
        //删除购物车对应的数据
        this.cartData.forEach((v, i) => {
          if (v.oneNum == 0) {
            this.cartData.splice(i, 1);
          }
        });
      },
      jianhao1(v) {
        this.classify.forEach(i => {
          i.foods.forEach(t => {
            if (t == v) {
              t.oneNum--;
              i.classifySumData--;
            }
            if (t.oneNum == 0) {
              this.cartData.splice(i, 1);
            }
          })
        })
      },
      jiahao1(v) {
        this.classify.forEach(i => {
          i.foods.forEach(t => {
            if (t == v) {
              t.oneNum++;
              i.classifySumData++;
            }
          })
        })
      },
      tang() {
        if (this.cartData.length == 0) {
          this.ta = false
        } else {
          this.ta = !this.ta
        }
      },
      qing() {
        this.ta = false;
        this.cartData.forEach(v => v.oneNum = 0);
        this.classify.forEach(v => v.classifySumData = 0);
        this.cartData = [];
      },
      xuangui(q) {
        this.guiGe = q;
        this.duo = true
      },
      //多选加入购物车
      duoxuanJ() {
        if (this.duoxuanS == 0) {
          this.classify.forEach(v => {
            v.foods.forEach(i => {
              if (i == this.guiGe) {
                console.log(4)
                i.oneNum++
                v.classifySumData++
              }
            })
          })
        } else {
          this.classify.forEach(v => {
            v.foods.forEach(i => {
              if (i == this.guiGe) {
                console.log(5)
                i.twoNum++
                v.classifySumData++
              }
            })
          })
        }
        ;
        this.duo = false
      },
      //去结算跳转
      ruterQ() {
        this.$router.push({path: '/qr'})
      },
      das() {
        this.duoxuanS = 0;
        alert('别看了我不会');
      },
      //单个页面跳转
      produstTo(q) {
        this.$router.push({name: 'dg', params: {data: JSON.stringify(q)}});
      }
    },
    computed: {
      //总价
      zongjia() {
        let a = 0;
        this.cartData.forEach(v => {
          if (v.specfoods.length == 1) {
            a += v.specfoods[0].price * v.oneNum
          } else {
            a += v.specfoods[0].price * v.oneNum + v.specfoods[1].price * v.twoNum;
          }

        });
        return a;
      },
      //购物车的数据
      cartJ() {
        this.cartData.forEach((v, i) => {
          if (v.oneNum == 0) {
            this.cartData.splice(i, 1);
          }
        });
        return this.cartData
      },
      //购物车是否消失
      taJ() {
        if (this.cartData.length == 0) {
          this.ta = false
        }
        ;
        return this.ta;
      },
      //购物车背景色
      cartB() {
        if (this.cartData.length == 0) {
          return false
        } else {
          return true
        }
      },
    },
    filters: {
      Vname(q) {
        if (getLength(q) > 12) {
          return q.slice(0, 6) + ".."
        } else {
          return q
        }
      }
    },
    created() {
      this.$store.commit("updateDong",true);
      //是否创建头部 尾部
      this.$store.commit('updateShowOfHidden', false);
      this.$store.commit('updateEndShowOfHidden', false);
      //网络请求
      //本地保存的选择店铺的id
      let i_c = localStorage.getItem("id_chen");
      console.log(i_c)
      this.myHttp.get(`/shopping/v2/menu?restaurant_id=${i_c}`, data => {
        data.forEach((v, i) => {
          //分类里当前分类的总个数
          v['classifySumData'] = 0;
          v.foods.forEach(o => {
            if (o.specfoods.length > 1) {
              //加一个数据判断是不是选规格操作
              o['duo'] = false;
              //加一个数据已选择的个数
              o['oneNum'] = 0;
              o['twoNum'] = 0;
            } else {
              o['duo'] = true;
              o['oneNum'] = 0
              o['twoNum'] = 0
            }
          })
          this.$store.commit("updateDong",false);
        });
        //获取分类里已选数据
        //判断要有没有保存过数据如果没有重新保存
        if (localStorage.getItem("restaurant_id") == data[0].restaurant_id) {
          this.classify = JSON.parse(localStorage.getItem("fenData"))
          console.log('加载的本地数据')
          // console.log(data)
        } else {
          this.classify = data;
          console.log(localStorage.getItem("restaurant_id"));
          localStorage.restaurant_id = data[0].restaurant_id;
          localStorage.fenData = JSON.stringify(data);
          console.log('加载的网络数据')
        }
      }, err => {
        console.log(err)
      });
    },
    beforeUpdate() {
      //保存分类里已选数据
      this.classify.forEach(v => {
        v.foods.forEach(i => {
          if (i.oneNum > 0) {
            if (this.cartData.indexOf(i) == -1) {
              this.cartData.push(i);
              // console.log(this.cartData)
            }
          }
        })
      });
      localStorage.fenData = JSON.stringify(this.classify);
      //购物车数据
      localStorage.cartData = JSON.stringify(this.cartData);
    },
    mounted(){
      //老刚加的
      let drag = document.getElementById("ccc");
      drag.addEventListener('animationend', ()=>{
        this.tsd = false;
      }, false);
    }
  }

  //判断字符串的字节数
  function getLength(val) {
    var str = new String(val);
    var bytesCount = 0;
    for (var i = 0, n = str.length; i < n; i++) {
      var c = str.charCodeAt(i);
      if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
        bytesCount += 1;
      } else {
        bytesCount += 2;
      }
    }
    return bytesCount;
  }
</script>

<style scoped>
  .white1 {
    background-color: white;
  }

  #box2 {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .box {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: row
  }

  .box > div:nth-child(1) {
    flex: 0.8;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 0.6rem;
    overflow: auto;
  }

  .box > div:nth-child(1) > a {
    flex: 1;
    display: flex;
    border-bottom: 1px solid #f8f8f8;

    background-color: #ededed;
  }

  .box > div:nth-child(1) > a > div {
    flex: 1;
    background-color: blue;
    height: 100%;
  }

  .box > div:nth-child(1) > a > span {
    flex: 14;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.7rem 0.2rem;
  }

  .box > div:nth-child(2) {
    flex: 2.2;
    background-color: white;
    overflow: auto;
  }

  .shangping {
    display: flex;
    flex-direction: column;
  }

  .title {
    height: 7%;
    background-color: rgba(0, 0, 0, 0.07);
    padding: 0.3rem;
  }

  .xuanze {
    height: 30%;
    display: flex;
    padding: 0.3rem;
    border-bottom: 0.01rem solid #9999;
  }

  .xuanze > div:nth-child(1) {
    flex: 2;
    display: flex;
  }

  .xuanze > div:nth-child(1) > img {
    width: 100%;
    height: 3rem;
  }

  .xuanze > div:nth-child(2) {
    flex: 6;
    display: flex;
    flex-direction: column;
  }

  .xuanze > div:nth-child(2) > div:nth-child(1) {
    flex: 1.3;
    font-size: 1rem;
  }

  .xuanze > div:nth-child(2) > div:nth-child(2) {
    flex: 1;
    font-size: 0.5rem;
  }

  .xuanze > div:nth-child(2) > div:nth-child(3) {
    flex: 1;
    font-size: 0.6rem;
  }

  .xuanze > div:nth-child(2) > div:nth-child(4) {
    flex: 1;
    font-size: 0.6rem;
  }

  .xuanze > div:nth-child(2) > div:nth-child(4) > span {
    color: red;
    border-radius: 35%;
  }

  .xuanze > div:nth-child(2) > div:nth-child(5) {
    flex: 1.3;
    font-size: 0.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .xuanze > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) {
    color: red;
    font-weight: bold;
  }

  .jia {
    display: flex;
  }

  .jia > span {
    border-radius: 50%;
    border: 0.02rem solid #3190e8;
  }

  .jia > span:nth-of-type(2) {
    background-color: #3190e8;
  }

  .jia > div {
    margin: 0 0.2rem;
    font-weight: bold;
  }

  #box1 {
    flex: 0.05;
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    color: black;
  }

  #box1 > div:nth-child(1) {
    flex: 1;
    display: flex;
    justify-content: space-between;
    color: white;
    position: relative;
  }

  #box1 > div:nth-child(1) > div:nth-child(1) {
    flex: 1;
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    top: -0.7rem;
    left: 0.7rem;
    background-color: #333333;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #box1 > div:nth-child(1) > div:nth-child(1) > * {
    width: 90%;
    height: 90%;
    border-radius: 50%;
  }

  #box1 > div:nth-child(1) > div:nth-child(2) {
    flex: 4;
    margin-left: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.2rem;
  }

  #box1 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) {
    font-size: 0.7rem;
  }

  #box1 > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) {
    font-size: 0.5rem;
  }

  #box1 > div:nth-child(1) > div:nth-child(3) {
    flex: 2;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    background-color: olivedrab;
  }

  #box1 > div:nth-child(2) {
    flex: 1;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding-bottom: 0.5rem;
    font-size: 0.8rem;
    box-sizing: border-box;
  }

  #box1 > div:nth-child(2) > div {
    display: flex;
    justify-content: space-between;
    margin: 0 0.5rem;
  }

  #box1 > div:nth-child(2) > div > div:nth-child(1) {
    flex: 1.5;
  }

  #box1 > div:nth-child(2) > div > div:nth-child(2) {
    flex: 6;
    display: flex;
    justify-content: flex-end;
    padding-right: 1rem;
    box-sizing: border-box;
  }

  #box1 > div:nth-child(2) > div > div:nth-child(3) {
    flex: 2.5;
    display: flex;
    justify-content: flex-end;
    padding-right: 0.2rem;
    flex-direction: row;
    font-size: 0.4rem;
  }

  .jia1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .jia1 > * {
    flex: 1;
    margin: 0 0.2rem;
  }

  .jia1 > span {
    border: 1px solid #3190e8;
    border-radius: 50%;
  }

  .jia1 > div {
    font-size: 0.6rem;
  }

  .qing {
    display: flex;
    justify-content: space-between;
    background-color: #ECEFF1;
    padding: 0.3rem;
    font-size: 0.6rem;
    margin: 0;
  }

  #cart {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #cart > img {
    width: 60%;
  }

  .co {
    background-color: #3190E8;
  }

  #tankuan {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.53);
    color: white;
  }

  #duo {
    width: 70%;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    border-radius: 5%;
  }

  #duo_one {
    padding: 1rem 0.3rem;
    display: flex;
  }

  #duo_one > span:nth-of-type(1) {
    flex: 9.5;
    display: flex;
    justify-content: center;
  }

  #duo_one > span:nth-of-type(2) {
    flex: 0.5;
  }

  #duo_two {
    display: flex;
    flex-direction: column;
    padding: 0 0.5rem;
  }

  #duo_two > span:nth-of-type(2) {
    display: flex;
    margin-top: 0.4rem;
  }

  #duo_two > span:nth-of-type(2) > span {
    display: flex;
    flex-direction: row;
    border: 0.02rem solid #3199E8;
    padding: 0.2rem 1rem;
    margin: 1rem 0;
    border-radius: 5%;
    font-size: 0.6rem;
  }

  #duo_two > span:nth-of-type(2) > span:nth-of-type(1) {
    margin-right: 0.5rem;
  }

  #duo_three {
    display: flex;
    justify-content: space-between;
    padding: 0.7rem;
    background-color: #f5f5f5;
    align-items: center;
    border-radius: 0 0 5% 5%;
  }

  #duo_three > span:nth-of-type(1) {
    color: #ff144e;
    font-size: 0.8rem;
  }

  #duo_three > span:nth-of-type(2) {
    color: white;
    font-size: 0.6rem;
    padding: 0.2rem;
    background-color: #3199E8;

  }
  .aaa{
    animation:bounce 1s;
  }
</style>
