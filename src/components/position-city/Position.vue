<template>
    <div id="position-all">
      <!--  一开始的定位页面   路由： / my-position  -->
        <div id="head-top">
          <span>ele.me</span>
          <router-link :to="{path:'/mine'}">
            <img src="../../assets/geren.png" alt="">
          </router-link>
          </div>
      <div id="position-list">
        <div>
          <div id="position-now">
            <span>当前定位城市:</span>
            <span>定位不准时，请在城市列表中选择</span>
          </div>

          <router-link   :to="{path:'/city',query:{city:presentCityMsg}}" id="position-select">
            <span>{{presentCityMsg}}</span>
            <img src="../../assets/next.png" alt="">
          </router-link>
        </div>
        <div>
          <h4 id="hot-city">热门城市</h4>
          <div id="hot-city-one">
            <router-link :to="{path:'/city',query: {city:v.name ,cityId:v.id} }" v-for="(v,index) in hotCityMsg" :key="index">{{v.name}}</router-link>
          </div>
          <div style="clear: both"></div>
          <div v-for="(val , index) in allCityMsg"  :key="index">
            <h4 id="all-city">{{index}}</h4>
            <div id="all-city-one">
              <router-link :to="{path:'/city',query:{city:v.name,cityId:v.id}}" v-for="(v,index) in val" :key="index">{{v.name}}</router-link>

            </div>
            <div style="clear: both"></div>
          </div>
        </div>
        <div style="clear: both"></div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Position",
        data(){
          return {
            hotCityMsg:[],
            allCityMsg:{},
            presentCityMsg:''
          }
        },
       created(){
         this.$store.commit("updateDong",true);
          //热门城市的网络请求
         //是否创建头部 尾部
         this.$store.commit('updateShowOfHidden', true);
         this.$store.commit('updateEndShowOfHidden', false);
          //热门城市的网络请求
            this.myHttp.get("/v1/cities?type=hot",(data)=>{
              //console.log(data);
              this.hotCityMsg = data;
            });
            //当前城市的网络请求
         this.myHttp.get("/v1/cities?type=guess",(data)=>{
           // console.log(data.name);
           this.presentCityMsg = data.name;
         });
         //所有城市的网络请求
         this.myHttp.get("/v1/cities?type=group",(data)=>{
           console.log(data);
           this.objKeySort(data);
           this.$store.commit("updateDong",false);
         });
       },
      methods:{
        objKeySort (arys) {
          var newkey = Object.keys(arys).sort();
             var newObj = {};
          console.log(newkey);
          for(let i = 0; i <newkey.length; i++) {
        //newObj = arys.newkey[i];
            newObj[newkey[i]] = arys[newkey[i]];
        //向新创建的对象中按照排好的顺序依次增加键值对
      }
          this.allCityMsg = newObj;
        }
       }
    }


</script>

<style scoped>

  #head-top{
    background-color: #3190e8;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
  }
  #head-top >span{
    left: .4rem;
    font-weight: 400;
    font-size: .7rem;
    color: #fff;
    width: 2.3rem;
    height: .7rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  #head-top>a >img{
    position: absolute;
    right: 5%;
    top: 25%;
    width: 1rem;
    height: 1rem;
  }
  #position-now{
    display: flex;
    justify-content: space-between;
    line-height: 1.45rem;
    padding: 0 .45rem;
  }

  #position-now :nth-child(1){
    font-size: .55rem;
    color: #666;
  }
  #position-now :nth-child(2){

    font-weight: 900;
    font-size: .475rem;
    color: #9f9f9f;
  }

  #position-select{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.8rem;
    padding: 0 .45rem;
    border-top: 1px solid #e4e4e4;
    border-bottom: 2px solid #e4e4e4;
    font: .75rem/1.8rem Microsoft YaHei;
    margin-bottom: .4rem;
  }
  #position-select >img{
    position: absolute;
    right: 3%;
    top: 20%;
    width: 1rem;
    height: 1rem;
  }
  #hot-city{
    color: #666;
    font-weight: 400;
    text-indent: .45rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font: .55rem/1.45rem Helvetica Neue;
    margin-bottom: 0 ;
  }
  #all-city{
    padding-left: 7% ;
    color: #666;
    font-weight: 400;
    font: .55rem/1.45rem Helvetica Neue;
    border-top: 2px solid #e4e4e4 ;
    border-bottom: 1px solid #e4e4e4;
    font: .55rem/1.45rem Helvetica Neue;
    margin-bottom: 0 ;

  }
  #position-list{
    background-color: white;

  }
  #hot-city-one  >a,#all-city-one >a {
    overflow:hidden;
    float: left;
    text-align: center;
    color: #3190e8;
    border-bottom: .025rem solid #e4e4e4;
    border-right: .025rem solid #e4e4e4;
    width: 25%;
    height: 1.75rem;
    font: .6rem/1.75rem Microsoft YaHei;
    text-decoration: none;
  }
  #all-city-one >a{
    color: black;
  }

</style>
