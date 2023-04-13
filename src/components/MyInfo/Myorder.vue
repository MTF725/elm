<template>

</template>

<script>
    export default {
        name: "Myorder",
      created(){
        this.$store.commit("updateCharacter","订单列表");
        this.$store.commit("updateRoute","mine");
        this.$store.commit("updateShowOfHidden",true);
        this.$store.commit("updateEndShowOfHidden",true);
      }
    }
</script>

<style scoped>

</style>
