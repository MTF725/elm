<template>
  <div id="servercontent">
    <p>{{servercontent}}</p>
  </div>
</template>

<script>
  export default {
    name: "Servercontent",
    data(){
      return{
        servercontent:"",
        servername:"",
      }
    },
    created() {
      this.servercontent= this.$route.query.servercontents;
      this.servername=this.$route.query.servername;

      this.$store.commit("updateCharacter", this.servername);
      this.$store.commit("updateRoute", "/servercenter");
      this.$store.commit("updateShowOfHidden", true);
      this.$store.commit("updateEndShowOfHidden", false);
    },

  }
</script>

<style scoped>
  #servercontent {
    background-color: white;
    padding: 1rem;
    font-size: 1.2rem;
    height: 100%;
    overflow: auto;
  }

  #servercontent p {
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
  }
</style>
