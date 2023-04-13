<template>
  <div id="aboutbalance">
    <ul>
      <li v-for="(v) in balanceContentArr2">
        <h3>{{v[0]}}</h3>
        <p class="content">{{v[1]}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "AboutBalance",
    data() {
      return {
        balanceContent: "",
        balanceContentArr1: [],
        balanceContentArr2: [],
      }
    },
    created() {
      this.$store.commit("updateCharacter","余额问题");
      this.$store.commit("updateRoute","/balance");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",false);

      this.balanceContent = this.$route.query.balanceContent
      this.balanceContent = this.balanceContent.replace(/[\u4e00-\u9fa5]\s/g, "？")
      console.log( this.balanceContent)
      this.balanceContentArr1= this.balanceContent.split("###");
      for (let i = 1; i < this.balanceContentArr1.length; i++){
        this.balanceContentArr2.push(this.balanceContentArr1[i].split("？"));
      }
      console.log(this.balanceContentArr2)
    }
  }
</script>

<style scoped>
  #aboutbalance{
    height: 100%;
    background-color: white;
    padding: 0.8rem;
  }
   h3{
     font-size: 0.82rem;
     color: #333333;
   }
  p{
    font-size: 0.7rem;
    color: #666666;
  }
</style>
