<template>
  <div id="searchaddress">
    <div id="search">
      <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="search">
      <span>确认</span>
    </div>
    <div id="explain">为了满足商家的送餐要求，建议您从列表中选取地址</div>
    <div id="question">
      <span>找不到地址？</span>
      <span>请尝试输入小区、写字楼或学校名</span>
      <span>详细地址（如门牌号）可稍后输入哦。</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchAddress",
    data() {
      return {
        search:"",
      }
    }
  }
</script>

<style scoped>
  #search {
    display: flex;
    align-items: center;
    padding: 0.4rem;
    height: 3.15rem;
    background-color: white;
  }

  #search input {
    border: 1px solid #ddd;
    border-radius: 3px;
    font-size: .8rem;
    padding: .3rem;
    outline: none;
    width: 75%;
    background-color: #f2f2f2;
  }

  #search span {
    font-size: 0.8rem;
    border-radius: 3px;
    margin-left: 0.5rem;
    padding: 0.2rem 0.8rem;
    color: white;
    display: inline-block;
    background-color: #3199e8;
    font-weight: 400;
  }

  #explain {
    padding: 0.5rem 0;
    text-align: center;
    font-size: 0.7rem;
    color: #ff883f;
    background-color: #fff6e4;
  }

  #question {
    margin-top: 8rem;
  }

  #question span {
    width: 100%;
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
    color: #969696;
    display: inline-block;
    text-align: center;
  }
</style>
