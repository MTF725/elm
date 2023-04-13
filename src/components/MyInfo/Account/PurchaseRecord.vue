<template>
  <div id="purchaserecord">
    <img src="../../../assets/minePicture/buynothing.png" alt="">
    <p>没有购买记录</p>
  </div>
</template>

<script>
  export default {
    name: "PurchaseRecord",
    created(){
      this.$store.commit("updateCharacter","购买记录");
      this.$store.commit("updateRoute","/elmvip");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",false);
    },
    data() {
      return {
        // purchaseimg: "../../../../assets/minePicture/buynothing.png"
      }
    }
  }
</script>

<style scoped>
  #purchaserecord{
    text-align: center;
  }
  #purchaserecord  img  {
    margin-top: 5rem;
   width: 9.4rem;
    height: 6rem;
    display: inline-block;
  }
  #purchaserecord p{
    margin-top: 1rem;
    font-size: 0.7rem;
    color: #999999;
  }
</style>
