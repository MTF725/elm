
<template>
  <div id="search-page">
    <!--  搜索页面     路由是 ：  /search_page-->

    <div id="search-header">
 <input type="search" id="search-header-left" placeholder="请输入商家或美食名称" v-model="inputV" @click="clickInput" @keyup= "cleanImg"  @keydown.enter="getStoreMsg(inputV)">
      <img src="../assets/cross.png" height="10" width="10" v-if="isClean"   @click="cleanInputV"/>
      <input type="submit" value="提交" id="search-header-right" @click="getStoreMsg(inputV)" >
  </div>
  <div id="store-list">
    <h4 id="store"  v-if="isStore">商家</h4>
    <ul v-if="isStore">
      <li v-for="(v ,index) in getMsg" :key="index" id="list-li" @click="toStore(v.id)">
        <!--//跳转到商家页面-->
        <!--<router-link :to="{path:'/'}">-->
        <div id="list-li-left">
          <img :src="'//elm.cangdu.org/img/'+v.image_path"  class="list-li-left-img">
        </div>
       <div id="list-li-right">
         <span class="list-li-right-span1">{{v.name}}</span>
         <sapn class="list-li-right-span2">支付</sapn>
         <p class="list-li-right-p1">{{'月售'+ v.recent_order_num + '单'}}</p>
         <p class="list-li-right-p2">{{'20元起送/'+v.distance}}</p>
       </div>
        <!--</router-link>-->
      </li>
    </ul>
    <ul v-if="isStoreOther">
    <li><p class="erroMsg">{{getMsg}}</p></li>
    </ul>
  </div>
    <div class="search-history" v-if="isHistory">
      <h4 >搜索历史</h4>
      <ul>
        <li v-for="(itmes,index) in listHistory" :key="index" class="history-li"  v-if="index < 10"> <span style="width:80%;padding:0.3rem" @click="getStoreMsg(itmes.title)">{{itmes.title}}</span> <img src="../assets/cross1.png"  @click="removeData(index)" ></li>
      </ul>
      <h5 @click="removeAllData">清空搜索历史</h5>
    </div>
  </div>
</template>

<script>
import storage from '../storage/storage.js'

    export default {
        name: "SearchPage",
        data(){
          return {
            inputV:"",
            getMsg:[],
            //控制图片的显示隐藏
            isClean:false,
            //控制商家的显示隐藏
            isStore:false,
            //搜素结果错误的显示隐藏
            isStoreOther:false,
            //搜素历史的显隐
            isHistory:true,
            listHistory:[],
            listStore:[],
          }
        },
      mounted(){
        this.addHistory();
      },
        methods:{
          getStoreMsg(v){
            this.inputV = v;
            this.isClean = false;
            if (v != ''){
              //隐藏历史
              this.isHistory =false;
              //存储记录
              this.doAdd(v);
              //网络请求
            this.myHttp.get("/v4/restaurants?geohash=31.22967,121.4762&keyword="+ v,(data)=>{
              console.log("请求的数据", data);
              //判断返回的数据是否正确
              if(data.length == 0 ||data.status == 0 ){

                  this.isStore = false;
                  this.isStoreOther = true;
                  this.getMsg = '很抱歉！无搜索结果';


              }else {
                this.getMsg = data;
                this.isStore = true;

              }

            }, (err)=>{
              console.log("返回的错误", err);
            })}
          },
          // 控制判断输入框值如果不为空 就显示叉号
          clickInput(){
            if (this.inputV != ''){
              this.isClean = true;
            }
          },
          // 控制叉号的显示
          cleanImg(){
            if (this.inputV != ''){
              this.isClean = true;
            }

          },
          //清空输入框
          cleanInputV(){
            this.addHistory();
            this.inputV = '';
            this.isClean = false;
            var list= storage.get("listHistory");
            if(list){
              this.isHistory=true;
              this.isStoreOther = false;
            }

          },
          changeCleanEnter(){
            if ( this.inputV != '') {
              console.log("enter")
              this.cleanInput = "display:block"
            }
          },
          //添加输入框的值
          doAdd(e) {
            //判断是历史记录里是否存在
           let  list = storage.get("listHistory");
           //把遍历list 把list里的每一个对象的title字段的值放进listStore
            if(list){
              for (let i = 0 ;i<list.length;i++){
                this.listStore.push(list[i].title);
              }
            }

            let a = this.listStore.indexOf(e);
            console.log(e,a,this.listStore);
            if (a === -1) {
              this.listStore.push(e);
              console.log(this.listHistory);
              this.listHistory.push({
                title: this.inputV,
                checked: false
              });
            }

            storage.set('listHistory', this.listHistory);
            // let a = storage.get('listHistory')
            // console.log(a);
          },
////移出一条历史记录
          removeData(index){
            this.listStore.splice(index,1)
            this.listHistory.splice(index,1);
            storage.set('listHistory', this.listHistory);
            if (this.listHistory == ''){
              this.isHistory = false;
            }
          },
          //移出所有的历史记录
          removeAllData(){
            this.listStore.splice(0)
            this.listHistory.splice(0);
            storage.set('listHistory', this.listHistory);
            this.isHistory=false;
          },
          //显示历史记录的函数
          addHistory(){
            var list= storage.get("listHistory");
            console.log("显示记录",list,this.listHistory);
            if(list){
              /*注意判断*/
              console.log('判断list');
              this.listHistory = list;
            if (this.listHistory== ''){
              console.log('历史隐藏');
              this.isHistory = false;
            }
          }else {
              this.isHistory = false;
            }
          },

          toStore(id){
            console.log(id)
            localStorage.id_chen = id;
            this.$router.push({path:'/sp'})
          }

    }}
</script>

<style scoped>

#search-header-left{
  flex: 4;
  border: .025rem solid #e4e4e4  ;
  font-size: .65rem;
  color: #333;
  border-radius: .125rem;
  background-color: #f2f2f2;
  font-weight: 700;
  padding: 0 .25rem;
 outline: none;
}
#search-header-right{
  flex: 1;
  border: .025rem solid #3190e8;
  margin-left: .2rem;
  font-size: .65rem;
  color: #fff;
  border-radius: .125rem;
  background-color: #3190e8;
  font-weight: 700;
  padding: .25rem;
}
  #search-header{
    background-color: #fff;
    padding: .5rem;
    display: flex;
    position: relative;
  }
#search-header >img{
  position: absolute;
  top: .9rem;
  right: 4.8rem ;
}
  #store{
    padding: 0;
    margin: 0;
    font-size: .6rem;
    line-height: 2rem;
    text-indent: .5rem;
    font-weight: 700;
    color: #666;
    background-color: #f2f2f2;
  }
  #list-li{

    display: flex;
    padding: .5rem;
    border-bottom: .025rem solid #e4e4e4;
  }
#list-li img{
  width: 1.7rem;
  height: 1.7rem;
}
  #list-li-left{
    margin-right: .25rem;
  }
#list-li-right{
  font-size: .55rem;
  flex: 1;
}
  .erroMsg{
    margin: 0 auto;
    font: .65rem/1.75rem Microsoft YaHei;
    color: #333;
    background-color: #fff;
    text-align: center;
    margin-top: .125rem;
  }
.search-history >h4{
  margin: 0;
  font-size: .6rem;
  line-height: 2rem;
  text-indent: .5rem;
  font-weight: 700;
  color: #666;
}
.search-history >ul{
  margin: 0;
}
.history-li{
  font-size: 0.7rem;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid lightgray;
}
.history-li > span{
  margin-left: 0.3rem;
}
.history-li > img{
  margin: 0.3rem;
  width: 1rem;
  height: 1rem;
}
  .search-history>h5{
    margin: 0;
    background-color: #fff;
    color: #3190e8;
    font: .7rem/2rem Microsoft YaHei;
    font-weight: 700;
    text-align: center;
  }

</style>
