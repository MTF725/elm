<template>
  <div id="box">
    <div id="one">
      <div>快速备注</div>
      <div>
        <div>
          <span @click="data=1" :class="{color:data==1}">不要辣</span>
          <span @click="data=2" :class="{color:data==2}">少点辣</span>
          <span @click="data=3" :class="{color:data==3}">多点辣</span>
        </div>
        <div @click="data2=!data2" :class="{color:data2}">不要香菜</div>
      </div>
      <div>
        <span @click="data3=!data3" :class="{color:data3}">不要洋葱</span>
        <span @click="data4=!data4" :class="{color:data4}">多点醋</span>
        <span @click="data5=!data5" :class="{color:data5}">多点葱</span>
      </div>
      <div>
        <span @click="data6=1" :class="{color:data6==1}">去冰</span>
        <span @click="data6=2" :class="{color:data6==2}">少冰</span>
      </div>
    </div>
    <div id="two">
      <div>其他备注</div>
      <textarea placeholder="请输入备注内容(可不填)" v-model="model"></textarea>
    </div>
    <div @click="chuan" id="three">确定</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: 0,
        data2: false,
        data3: false,
        data4: false,
        data5: false,
        data6: 0,
        model:''
      }
    },
    created() {
      //是否创建头部 尾部
      this.$store.commit('updateShowOfHidden', true);
      this.$store.commit('updateEndShowOfHidden', false);
      //路由跳转的位置
      this.$store.commit('updateRoute', '/qr');
    },
    methods: {
      chuan() {
        let a = '';
        switch (this.data) {
          case 1:
            a = a + "不要辣,";
            break;
          case 2:
            a = a + '少点辣,';
            break;
          case 3:
            a = a + '不要辣,';
            break;
        }
        if (this.data2) {
          a = a + "不要香菜,"
        }
        if (this.data3) {
          a = a + "不要洋葱,"
        }
        if (this.data4) {
          a = a + "多点醋,"
        }
        if (this.data5) {
          a = a + "多点葱,"
        }
        switch (this.data6) {
          case 1:
            a = a + '去冰,';
            break;
          case 2:
            a = a + '少冰,';
            break;
        }
       a = a+this.model;
        this.$router.push({path: '/qr', query: {a: a}})
      }
    }
  }
</script>

<style scoped>
  #box {
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    height: 95%;
    overflow: hidden;
    font-size: 0.6rem;
  }

  #one {
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0;
    padding: 0 1rem;
    background-color: white;
  }

  #one > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    padding: 0.7rem 0;
  }

  #one > div:nth-of-type(2) {
    display: flex;
    margin-bottom: 0.6rem;
  }

  #one > div:nth-of-type(2) > div:nth-of-type(1) {
    border: 0.02rem solid blue;
    margin-right: 1rem;
    border-radius: 10%;
    padding: 0.3rem 0;
  }

  #one > div:nth-of-type(2) > div:nth-of-type(1) > span {
    padding: 0.3rem;
  }

  #one > div:nth-of-type(2) > div:nth-of-type(2) {
    border: 0.02rem solid blue;
    border-radius: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem;
  }

  #one > div:nth-of-type(2) > div:nth-of-type(1) > span:nth-of-type(2) {
    border-right: 0.02rem solid blue;
    border-left: 0.02rem solid blue;
    padding: 0.3rem;
  }

  #one > div:nth-of-type(3) {
    display: flex;
    margin-bottom: 0.6rem;
  }

  #one > div:nth-of-type(3) > span {
    border: 0.02rem solid blue;
    border-radius: 10%;
    padding: 0.2rem 0.3rem;
  }

  #one > div:nth-of-type(3) > span:nth-of-type(2) {
    margin: 0 1rem;
  }

  #one > div:nth-of-type(4) {
    margin-bottom: 1.3rem;
  }

  #one > div:nth-of-type(4) > span {
    border: 0.02rem solid blue;
    padding: 0.2rem 0.3rem;
    border-radius: 10%;
  }

  #two {
    padding: 0 0.5rem;
    background-color: white;
  }

  #two > div:nth-of-type(1) {
    padding: 0.6rem 0;
  }

  #two > textarea {
    width: 100%;
    height: 5rem;
    background-color: #f5f5f5;
  }

  #three {
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

  .color {
    background-color: #3190E8;
  }
</style>
