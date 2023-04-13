<template>
  <div id="address">
    <div id="newaddress" @click="toNewAddress">
      <span class="namep">收货地址</span><span class="glyphicon glyphicon-menu-right name"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Address",
    methods: {
      toNewAddress() {
        this.$router.push({path: '/newaddress'})
      }
    },
    created(){
      this.$store.commit("updateCharacter","编辑地址");
      this.$store.commit("updateRoute","/account");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",false);
    }
  }
</script>

<style scoped>
  #newaddress {
    margin-top: 0.7rem;
    font-size: 0.8rem;
    font-weight: 500;
    margin-bottom: 2px;
    padding-left: 0.8rem;
    padding-right: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333;
    height: 2.4rem;
    background-color: white;
  }

  .name {
    margin-left: 0.2rem;
    color: rgb(216, 216, 216);
  }

  .namep {
    width: 80%;
  }
</style>
