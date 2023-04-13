// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入vuex组件
import Vuex from 'vuex'
//引入网络封装文件
import myHttp1 from "./http/axios"
//引入接口文件
import myApi from "./http/ports"
//将自定义的网络请求对象赋值给Vue构造函数的原型对象，这样当前项目的任何一个地方只要能获取到vue实例，就可以发起自定义的网络请求
Vue.prototype.myHttp = myHttp1;
Vue.prototype.myApi = myApi;
//引入animate
import animated from "animate.css"
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.use(Vuex);
Vue.use(animated);
Vue.config.productionTip = false;
//创建头和尾的依赖的vuex数据
const store = new Vuex.Store({
  state: {
    //头依赖的数据
    header: {
      showOfHidden: true,//是否隐藏
      character: "购物车",//中间文字修改
      route: "/",//路由跳转位置
    },
    //尾依赖的数据
    end: {
      showOfHidden: true,
    },
    dong:false,
  },
  mutations: {
    updateShowOfHidden(state, num) {
      state.header.showOfHidden = num;
    },
    updateCharacter(state,num){
      state.header.character = num;
    },
    updateRoute(state,num){
      state.header.route = num;
    },
    updateEndShowOfHidden(state,num){
      state.end.showOfHidden = num;
    },
    updateDong(state,num){
      state.dong = num;
    },
  }
});
//引入网络请求
import myHttp from './http/axios'
Vue.prototype.myHttp = myHttp;
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  store
});
