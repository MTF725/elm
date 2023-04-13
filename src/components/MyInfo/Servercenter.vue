<template>
  <div id="servercenter">
    <router-link :to="{}">
      <div class="onlineserverp">
        <div class="img"><img :src="serverp" alt="">
        </div>
        <span>在线客服</span>
      </div>
    </router-link>
    <router-link :to="{}">
      <div class="onlineserverp">
        <div class="img"><img :src="servert" alt="">
        </div>
        <span>在线客服</span>
      </div>
    </router-link>
    <div class="empty"></div>
    <p class="hotquestion">热门问题</p>
    <div class="servers" v-for="(v,i) in caption" @click="tocontent(i)">
      <span v-html="v"></span>
      <span class="glyphicon glyphicon-menu-right"></span>
    </div>
  </div>
</template>

<script>
  import kefupeople
    from "../../assets/minePicture/kefupeople.png"
  import kefuphone
    from "../../assets/minePicture/kefuphone.png"

  export default {
    name: "Servercenter",
    data() {
      return {
        arr: [],
        caption: [],
        content: [],
        serverp: kefupeople,
        servert: kefuphone
      }
    },
    beforeCreate() {
      this.$store.commit("updateCharacter","服务中心");
      this.$store.commit("updateRoute","/mine");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",false);

      getRequest:{
        this.myHttp.get(this.myApi.myApi.servercenter, (data) => {
          for (let v in data) {
            this.arr.push(v)
          }
          this.arr.splice(this.arr.indexOf("index"), 1);
          for (let i = 0; i < this.arr.length; i += 2) {
            this.caption.push(data[this.arr[i + 1]]);
            this.content.push(data[this.arr[i]])
          }
        }, (err) => {
          console.log(err)
        })
      }
    },
    methods: {
      tocontent(i) {
        //使用router对象实现路由的切换
        this.$router.push({path: "/servercontent", query: {servercontents: this.content[i],servername:this.caption[i]}})
      }
    },
  }
</script>

<style scoped>
  #servercenter {
    overflow: auto;
    height: 100%;
  }

  .onlineserverp {
    float: left;
    box-sizing: border-box;
    text-align: center;
    width: 50%;
    height: 4.69rem;
    border-bottom: 1px solid #f5f5f5;
    border-left: 1px solid #f5f5f5;
  }

  .img {
    line-height: 3rem;
    height: 50%;
    width: 100%;
  }

  .onlineserverp img {
    width: 1.1rem;
    height: 1.1rem;
    display: inline-block;
  }

  .onlineserverp span {
    color: #666666;
    font-size: 0.8rem;
    text-align: center;
    display: inline-block;
    height: 50%;
    width: 100%;
    line-height: 1.3rem;
  }

  .hotquestion {
    font-size: .9rem;
    color: #333;
    line-height: 3rem;
    border-bottom: 1px solid #f5f5f5;
    padding-left: .7rem;
  }

  .servers {
    padding: 0 .7rem;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .servers span {
    font-size: 0.8rem;
    color: #666;
  }

  .empty {
    clear: both;
  }
</style>
