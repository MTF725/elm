
<template>
    <div id="select-city"  >
      <!--选择具体地址页面   路由是  /city   -->
  <div id="city-head" >
    <router-link :to="{path:'/my-position'}" ><img src="../../assets/prev.png" alt="" id="city-prev"> </router-link>
    <span id="my-city">{{cityMsg}}</span>
    <router-link :to="{path:'/my-position'}"  id="change-city">切换城市</router-link>
  </div>
      <div id="form-city">
        <input type="search" placeholder="输入学校、商务楼、地址" id="form-input" v-model="inputV" @keyup="changeInput" @keyup.enter="getCityMsg(inputV,cityId)"    >
        <img src="../../assets/cross.png" height="10" width="10"  v-if="add"  @click="cleanInputV"/>
        <input  @click="getCityMsg(inputV,cityId)" type="submit" id="form-btn" value="提交">
      </div>
      <div  v-if="isAdd">
        <p id="search-history">搜索历史</p>
        <ul class="search-list" v-if="!(list == '')">
          <li v-for="(itmes , index ) in list" :key="index" v-if="index < 5" @click="tohp(itmes.title.address)">
            <!--路由/waimai   跳转到外卖页面-->
            <router-link :to="{}">
            <h4 class="search-list-h4">{{itmes.title.name}}</h4>
            <p class="search-list-p">{{itmes.title.address}}</p>
            </router-link>
          </li>
        </ul>
        <p  v-if="list=='' ? false :true" @click="removeDataAll" class="clean-all">清除所有</p>
      </div>
        <p v-if="addErro" class="erro-result">很抱歉！无搜索结果</p>
      <ul class="search-list" v-if="!isAdd">
        <li @click="tohp(value.address)" v-for="(value ,index) in  searchResult" :key="index">
          <!--路由/waimai  跳转到外卖页面-->
          <router-link :to="{}">
            <h4 class="search-list-h4">{{value.name}}</h4>
            <p class="search-list-p">{{value.address}}</p>
          </router-link>
        </li>

      </ul>


    </div>
</template>

<script>
   import storage from '../../storage/storage.js' //引入本地存储js文件
   //console.log(storage);
   export default {
        name: "Select-city",
      data(){
        return{
          cityMsg:"",
          inputV:"",
          cityId:"",
          searchResult:"",
          isAdd:true,
          add:false,
          addErro:false,
          list:[],
          newList:[]
        }
      },
        created() {
          this.cityMsg = this.$route.query.city;
          this.cityId = this.$route.query.cityId;

        },
     mounted(){
     // this.removeDataAll();
          /*生命周期函数       vue页面刷新就会触发的方法*/
       var list=storage.get('list');
       console.log(list);
       for (let i = 0 ;i < list.length;i++){
         // console.log(list[i].title.name);
         this.newList.push(list[i].title.name)
       }

       if(list){
         /*注意判断*/
       this.list = list;
       }
       // console.log(list);
     },
      methods:{
        getCityMsg(v,cityId){
          if (this.inputV != "" ){
            this.myHttp.get('/v1/pois?city_id='+cityId +'&keyword='+ v + '&type=search',(data)=>{
               //console.log(data)
              this.searchResult = data;
              if (data){
                this.isAdd = false;
                this.addErro = false;
                if (data == ''){
                  this.addErro = true;
                }

              }

            })
          }
        },
        cleanInputV(){
          this.inputV = '';
          this.add = false;
          console.log(12312);

        },
        changeInput(){
          console.log("键盘按下事件")

          if (this.inputV != ''){
            this.add = true;
          }
        },
        changeCleanEnter(e){
          if ( this.inputV != '') {
              console.log("enter")
            this.add = true;
          }

        },
        // changeCleanLeave(){
        //   if ( this.inputV != '') {
        //     console.log('leave')
        //     this.add = false;
        //     // this.inputV = '';
        //   }
        //  }
        // 当确定输入内容的时候把本条记录存储到本地

        doAdd(e,name,address){
         //console.log(e,name,address);
            if (this.inputV != '' ){
              this.isAdd = false;
           var a = this.newList.indexOf(name);
              console.log(a,this.newList )
              if (a === -1){
                this.newList.splice(0,0,name);
                this.list.splice(0,0,{
                  title:{name:name,address:address},
                  checked:false
                });
              }
            //console.log(this.list);

          }
            storage.set('list',this.list);
        },
        //删除某一条记录
        // removeData(key){
        //   this.list.splice(key,1);
        //   storage.set('list',this.list);
        // },
        //清空所有记录
        removeDataAll(key){
          this.list.splice(0);
          storage.set('list',this.list);
        },
        //存储本地函数
        tohp(v){
          //path:'/hp',query:{name:itmes.title.address}
          localStorage.addname = v;
          this.$router.push({path:'/hp'})
        }

     }

    }
</script>

<style scoped>
  #city-head{
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
  }
  #city-prev{
    margin-left: 5px;
    margin-top: 5px;
    width: 25px;
    height: 25px;
  }
  #change-city{
    right: .4rem;
    font-size: .6rem;
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  #my-city{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    color: #fff;
    text-align: center;
    font-size: .8rem;
    text-align: center;
    font-weight: 700;
  }
  #form-city{
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding: .4rem .4rem  0 .4rem ;
    position: relative;
  }
  #form-city >img{
    position: absolute;
    right: .8rem;
    top: 1rem;

  }
  #form-input{
    border: 1px solid #e4e4e4;
    padding: 0 .3rem;
    font-size: .65rem;
    color: #333;
    width: 100%;
    outline: none;
    border-radius:2px;
  }
  #form-btn{
    width: 100%;
    border-radius:2px;
    margin: 5px auto;
    border: 1px  solid  #3190e8;
    text-align: center;
    background-color: #3190e8;
    color: white;
    font-size: .65rem;
    outline: none;
  }
  #search-history{
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding-left: .5rem;
    font: .475rem/.8rem Microsoft YaHei;
    background-color: #f4f4f4;
    margin-bottom: 0;
  }
  .search-list{
    background-color: white;
    border-top: 1px solid #e4e4e4;
    list-style: none;
    margin-bottom: 0;
  }
  .search-list >li{
    padding: 0;
    margin: 0;
    border-top: 1px solid #e4e4e4;
  }
   .search-list-h4{
    margin:  .55rem  ;
    width: 90%;
    font-size: .65rem;
    color: #333;
  }
  .search-list-p{
    width: 90%;
    margin:.55rem;
    font-size: .45rem;
    color: #999;
    margin-bottom: 0;
  }
  .clean-all{
    font-size: .7rem;
    color: #666;
    text-align: center;
    line-height: 2rem;
    background-color: #fff;
    border-top:1px solid #e4e4e4 ;
    border-bottom: 1px solid #e4e4e4 ;
  }
  .erro-result{    margin: 0 auto;
    font: .65rem/1.75rem Microsoft YaHei;
    color: #333;
    background-color: #fff;
    text-indent: .5rem;
  }

</style>
