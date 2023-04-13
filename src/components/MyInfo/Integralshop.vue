<template>
    <div id="integralshop">
      <p id="p1">请重新输入</p>
      <p id="p2">请返回后重新进入积分商城</p>
      <img src="../../assets/minePicture/retrylogin.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "Integralshop",
      created(){
        this.$store.commit("updateCharacter","积分商城");
        this.$store.commit("updateRoute","/mine");
        this.$store.commit("updateShowOfHidden",true);
        this.$store.commit("updateEndShowOfHidden",false);
      },

      data(){
          return{
            relogimg:"../../assets/minePicture/retrylogin.png"
          }
      }
    }
</script>

<style scoped>
  #integralshop{
    text-align: center;
  }
  #p1{
    margin-top:8rem;
    font-size: 1.3rem;
    color: #0d7fd5;
  }
  #p2{
    font-size: 0.7rem;
    color: #666666;
  }
  #integralshop img{
    width: 8.8rem;
    height: 8.8rem;
  }
</style>
