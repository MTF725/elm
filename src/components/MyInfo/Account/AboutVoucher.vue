<template>
  <div id="aboutbalance">
    <ul>
      <li v-for="(v,i) in balanceContentArr2">
        <h3>{{v[0]}}</h3>
        <ul v-for="(x,y) in balanceContentArr3[i]">
          <li ><p>{{x}}</p></li>
        </ul>

      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "AboutVoucher",
    data() {
      return {
        balanceContent: "",
        balanceContentArr1: [],
        balanceContentArr2: [],
        balanceContentArr3: [],
      }
    },
    created() {
      this.$store.commit("updateCharacter","代金券说明");
      this.$store.commit("updateRoute","/discount/voucher");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",false);

      this.balanceContent = this.$route.query.servercontents
      this.balanceContent = this.balanceContent.replace(/[\u4e00-\u9fa5]{1}\s\*|\？\s/g, "？*")
      this.balanceContent = this.balanceContent.replace(/\*\*/g, "*")
      this.balanceContentArr1 = this.balanceContent.split("###");
      for (let i = 1; i < this.balanceContentArr1.length; i++) {
        this.balanceContentArr2.push(this.balanceContentArr1[i].split("？"));
      }
      for (let i = 0; i < this.balanceContentArr2.length; i++) {
        this.balanceContentArr3.push(this.balanceContentArr2[i][1].split("*"));
      }
      for (let i = 0; i < this.balanceContentArr3.length; i++) {
        this.balanceContentArr3[i].splice(0,1)
      }
    }
  }
</script>

<style scoped>
  #aboutbalance {
    background-color: white;
    height: 100%;
    overflow: auto;
    padding: 0.8rem;
  }

  h3 {
    font-size: 0.82rem;
    color: #333333;
  }

  p {
    font-size: 0.7rem;
    color: #666666;
  }
</style>
