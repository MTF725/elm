<template>
  <div id="discounts">
    <div id="head">
      <p id="redpacket" @click="toredpacket"><span :class="{blue:redpacket}" class="red">红包</span></p>
      <p id="voucher" @click="tovoucher"><span :class="{blue:voucher}" class="vou">商家代金券</span></p>
    </div>
    <router-view @redpacketmsg="getMsg" @vouchermsg="getMsg"></router-view>
    <div id="foot">
      <p id="exchangeredpacket" @click="toExchangeRedPacket">兑换红包</p>
      <p id="toRecommend" @click="toRecommend">推荐有奖</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Discounts",
    created(){
      this.$store.commit("updateCharacter","我的优惠");
      this.$store.commit("updateRoute","/mine");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",false);
    }
    ,
    data() {
      return {
        redpacket: true,
        voucher: false,
        msgfromson: "",

      }
    },
    mounted() {
      if (this.msgfromson == "isRedPacketMsg") {
        this.redpacket = false;
        this.voucher = false;
        this.redpacket = true;

      }
      if (this.msgfromson == "isVoucher") {
        this.voucher = false;
        this.redpacket = false;
        this.voucher = true;
      }

    },
    methods: {
      toredpacket() {
        this.$router.push({path: "redpacketmsg"});
        this.redpacket = false;
        this.voucher = false;
        this.redpacket = true;
      },
      tovoucher() {
        this.$router.push({path: "voucher"})
        this.redpacket = false;
        this.voucher = false;
        this.voucher = true;
      },
      toExchangeRedPacket() {
        this.$router.push({path: "/exchangeredpacket"})
      },
      toRecommend() {
        this.$router.push({path: "/recommend"})
      },
      getMsg(v) {
        this.msgfromson = v;
      }
    }
  }
</script>

<style scoped>
  #discounts {
    height: 100%;
    background-color: white;
  }

  #head {
    display: flex;
    padding-bottom: 0.4rem;
  }

  #head p {
    margin: 0;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    font-size: .7rem;
    color: #333333;
    width: 50%;
  }

  .red {
    padding-bottom: 0.4rem;

  }

  .vou {
    padding-bottom: 0.4rem;
  }

  #foot {
    border: 1px solid red;
    margin: 0 !important;
    display: flex;
    width: 100%;
    background-color: white;
    position: fixed;
    bottom: 0rem;
    left: 0;
  }

  #foot p {
    margin: 0;
    border-right: 2px solid rgba(0, 0, 0, 0.05);
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    font-size: .7rem;
    color: #555;
    width: 50%;
  }

  .blue {
    color: #3190e8;
    border-bottom: 1px solid #3190e8;
  }
</style>
