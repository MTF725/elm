<template>
    <!-- 搜索地址页面   路由是  /search-address   -->
  <div id="search-address">
    <!--<div class="search-address-head">-->
      <!--<img src="../../assets/prev.png" />-->
      <!--<span>搜索地址</span>-->
    <!--</div>-->
    <div class="search-form">
      <input type="search" placeholder="请输入小区/写字楼/学校等" v-model="inputV">
      <input type="submit" value="确认" @click="getAddress(inputV)">
    </div>
    <div class="search-suggest">
      为了满足商家的送餐要求，建议您从列表中选择地址
    </div>
    <div class="search-point"  v-if="isSearchPiont">
      <p>找不到地址？</p>
      <p>请尝试输入小区、写字楼、或学校名</p>
      <p>详细地址（如门牌号）可稍后输入哦。</p>
    </div>
    <div class="search-result">
      <ul>
        <router-link :to="{path:'/newaddress',query:{selectAddress:this.inputV}}" class="router-link-active">
        <li v-for="(itmes,index ) in getAdressData" :key="index" @click="inputV = itmes.name " class="search-result-ul-li">
          <p>{{itmes.name}}</p>
          <p>{{itmes.address}}</p>
        </li>
        </router-link>
      </ul>
    </div>

  </div>
</template>

<script>
    export default {
        name: "SearchAddress",
      data(){
        return {
          inputV:'',
          getAdressData:[],
          isSearchPiont:true,
          isSearchResult:false
        }
      },
      created(){
        this.$store.commit('updateEndShowOfHidden', false);
        this.$store.commit("updateCharacter","搜索地址");
        this.$store.commit("updateRoute","/newaddress");
        this.$store.commit("updateShowOfHidden",true);
      },
      methods:{
        getAddress(v){
          this.myHttp.get('/v1/pois?type=nearby&keyword='+ v,(data)=>{
            console.log(data,data.name,data.length);
            if((data.length != 0 ) ){
              console.log("请求到有用的数据");
              if(data.name === "ERROR_QUERY_TYPE" ){
                // 输入框为空
                console.log('输入框为空');

              }else {
                //输入框不为空
                // console.log("输入框不为空");
                this.isSearchPiont = false;
                this.getAdressData = data;
              }

            }

          })
        }
      }
    }
</script>

<style scoped>
  .search-address-head{
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;

  }
  .search-address-head >img{
    margin-left:.3rem ;
    margin-top: .2rem;
    width: .9rem;
    height: 1rem;
  }
  .search-address-head >span{
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    position: absolute;
    left:6.3rem;
    top: .5rem;
  }
  .search-form{
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: .5rem;
  }
  .search-form >input:nth-child(1){
    display: block;
    width: 11.8rem;
    padding: .4rem;
    background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: .6rem;
    outline: none;
  }
  .search-form >input:nth-child(2){
    display: block;
    width: 3rem;
    background: #3199e8;
    font-size: .7rem;
    color: #fff;
    border: 1px solid #3199e8;
    border-radius: 5px;
    outline: none;

  }
  .search-suggest{
    background: #fff6e4;
    font-size: .62rem;
    color: #ff883f;
    text-align: center;
    padding: .2rem 0;
  }
  .search-point{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
  }
  .search-point >p{
    width: 100%;
    text-align: center;
    font-size: .7rem;
    color: #969696;
    margin-bottom: .4rem;
  }
  .search-result >ul {
    background-color:#f2f2f2 ;
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }

  .router-link-active {
    text-decoration: none;
  }
  .search-result-ul-li{
   /*text-decoration: none;*/
    border-bottom: 1px solid #ccc;
    padding: .4rem;
    font-size: .65rem;
    color: #969696;
  }

</style>
