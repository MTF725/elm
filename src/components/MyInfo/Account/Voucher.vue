<template>
  <div id="voucher">
    <div id="part1">
      <img src="../../../assets/minePicture/ques.png" alt=""><span @click="toservercontent">商家代金券说明</span>
    </div>
    <div class="part2">
      <img src="../../../assets/minePicture/voucher.png" alt="">
      <p>无法使用代金券</p>
      <p>非客户端或客户端版本过低</p>
    <span @click="todownload">下载或升级客户端</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Voucher",
    data(){
     return{
       quesimg:"../../../assets/minePicture/ques.png",
       voucherimg:"../../../assets/minePicture/voucher.png",
       thispage:"isVoucher"
     }
    },
    methods:{
      todownload(){
        this.$router.push({path:"/download"})
      },
      toservercontent(){
        this.myHttp.get(this.myApi.myApi.servercenter,(data)=>{
          this.$router.push({path:"/aboutvoucher",query:{servercontents:data.couponContent}})
        },(err)=>{
          alert(err)
        })
      },
      sendMsgToDiscounts(){
        this.$emit("vouchermsg",this.thispage)
      }
    },
    created(){
      this.sendMsgToDiscounts();
    }
  }
 </script>

<style scoped>
  #voucher {
    height: 100%;
    padding: 0.4rem;
    background-color: #f5f5f5
  }
  #part1{
    padding-right: 0.4rem;
    text-align: right;
  }
  #part1 img{
    width: 0.7rem;
    height: 0.7rem;
  }
  #part1 span{
    color: #3e90e8;
    font-size: 0.6rem;
  }
  .part2{
    text-align: center;
  }
  .part2 img{
    margin-top: 4rem;
    width: 7rem;
    height: 4rem;
  }
  .part2 p:nth-of-type(1){
    font-size: 0.82rem;
    color: #666666;
  }
  .part2 p:nth-of-type(2){
    font-size: 0.63rem;
    color: #999999;
  }
  .part2 span{
    border-radius: 5px;
    width: 40%;
    font-size: 0.75rem;
    color: white;
    background-color: #56de76;
    padding:0.35rem
  }
</style>
