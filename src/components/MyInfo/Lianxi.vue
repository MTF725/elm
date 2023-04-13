<template>
  <div id="lianxi">
    练习
  </div>
</template>

<script>
  export default {
    name: "Lianxi",
    data() {
      return {
        classify: "http://elm.cangdu.org/img/"
      }
    },
    created() {
      this.myHttp.get(this.myApi.myApi.productsclassify, (data) => {
        console.log(data)
      data.forEach((v)=>{
        console.log(v)
      })

           // console.log(data.image_url)
      }, (err) => {

      })
    },
  }
</script>

<style scoped>
  #lianxi {

  }
</style>
