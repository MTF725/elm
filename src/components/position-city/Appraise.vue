<template>
    <!--  评价页面    路由 、/appraise-->
  <div id="appraise">
    <div id="appraise-head">
      <div id="appraise-haed-left">
        <p> {{overall_score}}</p>
        <p>综合评价</p>
        <p>高于周边商家{{compare_rating}}%</p>
      </div>
      <div id="appraise-haed-right">
        <p><span>服务态度</span> <van-rate  allow-half  v-model="service_star" :size="5"  /> <span>{{service_score}}</span></p>
        <p><span>菜品评价</span><van-rate  allow-half  v-model="food_star" :size="5"  /><span>{{food_score}}</span></p>
        <p><span>送达时间</span> <span>{{deliver_time}}</span><span>分钟</span></p>
      </div>
    </div>
    <!--// 分类评价-->
    <ul class="appraise_classification">
      <li v-for="(itmes,index) in appraise_classification_msg" @click="changeColor(index)" :key="index" :class="{'change_background':isAdd == index }">{{itmes.name}}({{itmes.count}})</li>
    </ul>
    <!--   评价信息  -->
    <ul class="appraise_message">
      <li v-for="(itmes,index) in appraise_message" :key="index">
        <img :src="itmes.avatar == ''? default_img : 'https://fuss10.elemecdn.com/'+ itmes.avatar + '.jpeg'"/>
        <div class="appraise_message_details">
          <div><span>{{itmes.username}}</span><span>{{itmes.rated_at}}</span></div>
          <div> <van-rate  allow-half  v-model="itmes.rating_star" :size="5"  :gutter="0" /> <span>{{itmes.time_spent_desc != ''? itmes.time_spent_desc : ''}}</span></div>
          <!--<div v-if="itmes.item_ratings.image_hash !=''"><img :src="'https://fuss10.elemecdn.com/'+ item.image_hash + '.jpeg'"  v-for="(item , inde) in itmes.item_ratings" width="35"/></div>-->
          <ul class="appraise_img">
            <li v-for="(item , inde) in itmes.item_ratings" v-if="item.image_hash !=''"><img  :src="'https://fuss10.elemecdn.com/'+ item.image_hash + '.jpeg'" width="50"></li>
          </ul>
          <ul class="appraise_food">
            <li v-for="(item , inde) in itmes.item_ratings" v-if="item.food_name !=''" class="appraise_food_li">{{item.food_name}}</li>
          </ul>
        </div>


      </li>
    </ul>
  </div>
</template>

<script>

    export default {
        name: "Appraise",
      data(){
          return{
            //
            show:'',
            //评价星级
            service_star:0,
            food_star:0,
            //综合评价
            overall_score:'',
            // 高于周围商家
            compare_rating:'',
            //服务评价分数
            service_score:'',
            //菜品评分
            food_score:'',
            //送达时间
            deliver_time:"",
            // 评价分类
            appraise_classification_msg:'',
            //添加背景色
            isAdd:'',
            //评价信息
            appraise_message:'',
            //    默认图片的地址 "//elm.cangdu.org/img/default.jpg"
            default_img: "//elm.cangdu.org/img/default.jpg",
            //用户的图片
            my_img:'',
          }

      },
      created(){
          //商家评价的请求
          this.myHttp.get("/ugc/v2/restaurants/1/ratings/scores",(data)=>{
            // console.log(data);
            this.overall_score = Math.round(data.overall_score*10)/10;
            this.compare_rating = Math.round(data.compare_rating*1000)/10;
            this.service_score = Math.round(data.service_score*10)/10;
            this.service_star =this.service_score;
            this.food_score = Math.round(data.food_score*10)/10;
            this.food_star =this.food_score;
            this.deliver_time = data.deliver_time;
          });
          //评价分类请求
        this.myHttp.get('/ugc/v2/restaurants/1/ratings/tags',data=>{
          // console.log(data);
          this.appraise_classification_msg = data;
        });
        ///获取评价信息请求
        this.myHttp.get('/ugc/v2/restaurants/1/ratings?offset=0&limit=9',data=>{
          console.log(data);
          this.appraise_message=data;


        })
      },
      mounted() {
        this.$nextTick(function () {
          console.log("懒加载出发了");
          window.addEventListener('scroll', this.onScroll)
        })
      },
      methods:{
          //获取评价信息请求
        getAppraiseMsg(){
          this.$store.commit("updateDong",true);
          this.myHttp.get('/ugc/v2/restaurants/1/ratings?offset=0&limit=9',data=>{
            console.log(data);
            this.appraise_message=this.appraise_message.concat(data);
            this.$store.commit("updateDong",false);
          })
        },
        changeColor(v){
          console.log(v);
          this.isAdd = v;
        },
        //动态添加数据
        // 获取滚动条当前的位置
        getScrollTop () {
          var scrollTop = 0
          if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
          } else if (document.body) {
            scrollTop = document.body.scrollTop;
          }
          return scrollTop
        },
        // 获取当前可视范围的高度
        getClientHeight () {
          var clientHeight = 0
          if (document.body.clientHeight && document.documentElement.clientHeight) {
            clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
          } else {
            clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
          }
          return clientHeight
        },

        // 获取文档完整的高度
        getScrollHeight () {
          console.log("当前文本高度已经获取");
          return   Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        },
        // 滚动事件触发下拉加载
        onScroll () {
          // console.log("滚轮正在滚动",this.getScrollTop(),this.getScrollHeight(),this.getClientHeight() );
          var a = this.getScrollHeight() - this.getClientHeight() - this.getScrollTop();
          console.log(a);
          if ( a <= 1) {
            // if (this.status === 1) {
            //   this.status = 0
            //   // 页码，分页用，默认第一页
            //   this.deliverParams.page += 1
              // 调用请求函数
              // alert('触发！！！')
            // }

          this.getAppraiseMsg();



          }
        },

    }}
</script>

<style scoped>
  #appraise{
    overflow: auto;
  }



  #appraise-head{
    display: flex;
    background-color: #fff;
    padding: .8rem .5rem;
    margin-bottom: .5rem;
  }
  #appraise-haed-left{
    flex: 3;
    text-align: center;

  }
  #appraise-haed-left >p:nth-of-type(1){
    font-size: 1.2rem;
    color: #f60;
  }
  #appraise-haed-left >p:nth-of-type(2){
    font-size: .65rem;
    color: #666;
    margin-bottom: .1rem;
  }
  #appraise-haed-left >p:nth-of-type(3){
    font-size: .4rem;
    color: #999;
  }
  #appraise-haed-right{
    flex: 4;
  }
  #appraise-haed-right >p{
    font-size: .65rem;
    line-height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  #appraise-haed-right >p >span:nth-of-type(1){
    color: #666;
    margin-right: .5rem;
  }
  #appraise-haed-right >p >span:nth-of-type(2){
    font-size: .7rem;
    color: #f60;
  }
  .appraise_classification{
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    padding: .5rem;
  }
  .appraise_classification >li{
    font-size: .6rem;
    color: #6d7885;
    padding: .3rem;
    background-color: #ebf5ff;
    border-radius: .2rem;
    border: 1px;
    margin: 0 .4rem .2rem 0;
  }
  .change_background{
    color: white !important;
    background-color: #3190e8 !important;
  }
  .appraise_message{
    background-color: #fff;
    padding: 0 .5rem;
  }
  .appraise_message >li{
    display: flex;
  }
  .appraise_message >li >img{
    width: 1.5rem;
    height: 1.5rem;
    border: .025rem;
    border-radius: 50%;
    margin-right: .8rem;
  }
  .appraise_message_details{
    width: 100%;
  }
.appraise_message_details >div:nth-of-type(1){
  width:100%;
  display: flex;
  justify-content: space-between;
  font-size: .4rem;
  color: #999;
}
  .appraise_message_details >div:nth-of-type(2) > span{
    font-size: .55rem;
    color: #666;
    margin-left: .15rem;
  }
  .appraise_img,.appraise_food{
    display: flex;
  }
  .appraise_food_li{
    white-space:nowrap;
    text-overflow:ellipsis;
    font-size: .55rem;
    color: #999;
    width: 2.2rem;
    padding: .2rem;
    border: .025rem solid #ebebeb;
    border-radius: .15rem;
    margin-right: .3rem;
    margin-bottom: 4px;
    overflow: hidden;
  }

</style>
