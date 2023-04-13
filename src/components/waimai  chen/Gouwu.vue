<template>
  <div id="box1">
    <div>
      <div @click="tang">
        <div>s</div>
      </div>
      <div>
        <div>￥560</div>
        <div>配送费￥5</div>
      </div>
      <div>去结算</div>
    </div>
    <div v-if="ta">
      <span class="qing">
        <span>购物车</span>
        <span @click="qing">清空</span>
      </span>
      <div>
        <div>asd</div>
        <div>2</div>
        <div>
          <div class="jia1">
            <span>➖</span>
            <div>1</div>
            <span>➕</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //选择的商品
        commodity: [],
        //弹起页面
        ta: false,
        //所有数据
        data: []
      }
    },
    methods: {
      tang() {
        this.ta = !this.ta;
        this.data = JSON.parse(localStorage.getItem("fenData"));
        JSON.parse(localStorage.getItem("fenData")).forEach(v => {
          v.foods.forEach(o => {
            if (o.oneNum > 0) {
              if (this.commodity.indexOf(o) === -1) {
                this.commodity.push(o)
              }
            }
          })
        });
        if (!this.ta) {
          this.commodity = []
        };
        if( this.commodity == []){
          this.ta = false
        }
      },
      qing() {
        this.ta = !this.ta;
        this.commodity = [];
        this.data.forEach(v=>{
          v.foods.forEach(u=>{
            u.oneNum=0
            v.classifySumData=0
          })
        });
        localStorage.fenData = JSON.stringify(this.data);
      },
      jian(v){
        v.oneNum--;
        localStorage.fenData = JSON.stringify(this.data);
      },
      jia(v){
        v.oneNum++;
        localStorage.fenData = JSON.stringify(this.data);
      }
    }
  }
</script>

<style scoped>
  #box1 {
    flex: 1;
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
    border: 1px solid red;
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
    border: 1px solid blue;
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
</style>
