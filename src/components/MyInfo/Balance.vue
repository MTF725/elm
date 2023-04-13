<template>
  <div id="balance">
    <div id="head">
      <div id="section">
        <div id="line1">
          <span id="baye">当前余额</span>
          <img src="../../assets/minePicture/ques.png" alt=""><span id="bades" @click="toservercontent">余额说明</span>
          <div id="empty"></div>
        </div>
        <div id="line2"><span id="moneynow">{{balance}}</span>元</div>
        <span id="withdraw" :style="withdrawbtn">提现</span>
      </div>
    </div>
    <p id="des">交易明细</p>
    <div id="bynothing">
      <img src="../../assets/minePicture/buynothing.png" alt="">
      <p>暂无交易明细</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Balance",
    data() {
      return {
        buyimg: '../../assets/minePicture/buynothing.png',
        quesimg: '../../assets/minePicture/ques.png',
        balance: "",
        withdrawbtn:"",

      }
    },
    methods:{
      toservercontent(){
        this.myHttp.get(this.myApi.myApi.servercenter,(data)=>{
          this.$router.push({path:"/aboutbalance",query:{balanceContent:data.balanceContent,}})
        },(err)=>{
            alert(err)
        })
      }
    },
    beforeCreate() {
      this.$store.commit("updateCharacter","我的余额");
      this.$store.commit("updateRoute","/mine");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",false);
      getRequest:{
        this.myHttp.get(this.myApi.myApi.getaccmsg, (data) => {
          if (data.balance == 0) {
            this.balance = "0.00";

          }
          if (data.balance != 0) {
            this.balance=data.balance;
            this.withdrawbtn={background:"#3190e8"}
          }
        }, (err) => {
          alert(err)
        })
      }
    }

  }
</script>

<style scoped>
  #head {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8.6rem;
    background-color: #3190e8;

  }

  #section {
    padding: 0.5rem;
    width: 95%;
    height: 7.85rem;
    background-color: white;
  }

  #line1 {
    line-height: 1rem;
    height: 1rem;
  }

  #line1 span {
    font-size: 0.6rem;
  }

  #bades {
    color: blue;
  }

  #line1 img {
    margin-left: 10.5rem;
    width: 0.7rem;
    height: 0.7rem;
  }

  #des {
    padding-left: 0.7rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 0.7rem;
    color: #999999;
  }

  #empty {
    clear: both;
  }

  #bynothing {
    margin-top: 2rem;
    text-align: center;
  }

  #bynothing img {
    margin-bottom: 1rem;
    width: 9rem;
    height: 5rem;
  }
 #bynothing p{
   font-size: 0.7rem;
 }
  #moneynow {
    font-size: 2.1rem;
    font-weight: 400;
  }
  #withdraw{
    border-radius: 7px;
    padding: 0.5rem 0;
    text-align: center;
    display: inline-block;
    width: 100%;
    color: white;
    background-color: #cccccc;
  }
</style>
