<template>
  <div id="box">
    <div id="one">
      <div>食品监督安全公示</div>
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
    <div id="two">
      <div>工商登记信息</div>
      <div>企业名称</div>
      <div>工商执照注册号</div>
      <div>注册资本</div>
      <div>注册地址</div>
      <div>属地监管所</div>
      <div>法定代表人</div>
      <div>经营范围</div>
    </div>
    <div id="three">
      <div>餐饮许可证</div>
      <div>营业范围</div>
      <div>许可证有效期</div>
      <div>许可证号</div>
      <div>发证时间</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Anquang",
    created(){
      this.$store.commit("updateCharacter","食品安全监督");
      this.$store.commit("updateRoute","/xq");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",false);
    },
  }
</script>

<style scoped>
  #box {
    display: flex;
    background-color: #f5f5f5;
    flex-direction: column;
  }

  #box > div {
    flex: 1;
    background-color: white;
    padding: 0.3rem;
  }

  #box > div:nth-child(2) {
    margin: 0.4rem 0;
  }

  #one > div:nth-child(2) {
    flex: 2;
    display: flex;
    padding: 0.4rem;
  }

  #one > div:nth-child(1) {

  }

  #one > div:nth-child(2) > div:nth-child(1) {
    flex: 1;
  }

  #one > div:nth-child(2) > div:nth-child(1) > img {
    width: 100%;
    margin-right: 0.5rem;
  }

  #one > div:nth-child(2) > div:nth-child(2) {
    flex: 4;
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    justify-content: center;
    color: rgba(0, 0, 0, 0.69);
  }

  #one > div:nth-child(2) > div:nth-child(2) > span {
    padding-bottom: 0.3rem;
  }

  #two {
    display: flex;
    flex-direction: column;
  }

  #two > div {
    padding: 0.3rem;
    font-size: 0.8rem;
    margin-left: 0.3rem;
  }

  #two > div:nth-child(1) {
    flex: 1.3;
    border-bottom: 0.02rem solid #f5f5f5;
    font-size: 1rem;
    margin-left: 0;
  }
  #three{
    display: flex;
    flex-direction: column;
  }
  #three>div{
    padding: 0.3rem;
    font-size: 0.8rem;
    margin-left: 0.3rem;
  }
  #three > div:nth-child(1) {
    flex: 1.3;
    border-bottom: 0.02rem solid #f5f5f5;
    font-size: 1rem;
    margin-left:0;
  }
</style>
