import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/waimai  chen/HomePage'
import FenLeiXiangQing from '../components/waimai  chen/FenLeiXiangQing'
import Sp from '../components/waimai  chen/Shangping'
import SpF from '../components/waimai  chen/Shangpingfenlei'
import Gw from '../components/waimai  chen/Gouwu'
import Xq from '../components/waimai  chen/Shangjiaxiangqing'
import An from '../components/waimai  chen/Anquang'
import Qr from '../components/waimai  chen/Querendingdan'
import Dd from '../components/waimai  chen/Dingdanbeizu'
import Fp from '../components/waimai  chen/Fpiao'
import Bz from '../components/waimai  chen/Dingdanbeizu'
import Dg from '../components/waimai  chen/Dangeproducts'
//老马
import Mine from '../components/MyInfo/MyInfo'
import Balance from '../components/MyInfo/Balance'
import Discount from '../components/MyInfo/Discounts'
import Integral from '../components/MyInfo/Integral'
import Myorder from '../components/MyInfo/Myorder'
import Integralshop from '../components/MyInfo/Integralshop'
import Servercenter from '../components/MyInfo/Servercenter'
import Elmvip from '../components/MyInfo/Elmvip'
import Downloade from '../components/MyInfo/Downloade'
import Account from '../components/MyInfo/Account/Account'
import Login from '../components/MyInfo/Account/Login'
import Servercontent from '../components/MyInfo/Servercenter/Servercontent'
import Address from '../components/MyInfo/Account/Address'
import Changepassword from '../components/MyInfo/Account/Changepassword'
import Logout from '../components/MyInfo/Account/Logout'
import Username from '../components/MyInfo/Account/Username'
import NewAddress from '../components/MyInfo/Account/NewAddress'
import SearchAddressMa from '../components/MyInfo/Account/SearchAddress'
import ExchangeVip from '../components/MyInfo/Account/ExchangeVip'
import PurchaseRecord from '../components/MyInfo/Account/PurchaseRecord'
import CardForVip from '../components/MyInfo/Account/CardForVip'
import Voucher from '../components/MyInfo/Account/Voucher'
import RedPacketMsg from '../components/MyInfo/Account/RedPacketMsg'
import ExchangeRedPacket from "../components/MyInfo/Account/ExchangeRedPacket"
import Recommend from "../components/MyInfo/Account/Recommend"
import RedpacketHistory from "../components/MyInfo/Account/RedpacketHistory"
import AboutBalance from "../components/MyInfo/Account/AboutBalance"
import AboutRedpacket from '../components/MyInfo/Account/AboutRedpacket'
import AboutVoucher from '../components/MyInfo/Account/AboutVoucher'
import AboutIntegral from '../components/MyInfo/Account/AboutIntegral'
import AboutVip from '../components/MyInfo/Account/AboutVip'
//练习
import Lianxi from '../components/MyInfo/Lianxi'
//老杨
import  OrderPage from '../components/OrderPage'
import  SearchPage from  '../components/SearchPage'
import  Position from '../components/position-city/Position'
import  SelectCity from  '../components/position-city/SelectCity'
import  SearchAddress from  '../components/position-city/SearchAddress'
import DeliveryAddress from '../components/position-city/delivery-address/DeliveryAddress'
import AddeDliveryAddress   from '../components/position-city/delivery-address/AddDeliveryAddress'
import  LoadingData from  '../components/LoadingData'
import  Appraise from  '../components/position-city/Appraise'
import  SearchDeliveryAddress from '../components/position-city/delivery-address/SearchDeliveryAddress'
Vue.use(Router);

export default new Router({
  routes: [

    {path:'/',redirect:'/my-position'},  //第一
    {path:'/my-position',component:Position}, //定位城市
    {path: "/mine", component: Mine},  //我的
    //mads
    {path: "/balance", component: Balance},
    {path: "/discount", component: Discount,children:[
        {path:"",redirect: "redpacketmsg"},
        {path:"redpacketmsg",component:RedPacketMsg},
        {path:"voucher",component:Voucher}
      ]},
    {path: "/integral", component: Integral},
    {path: "/myorder", component: Myorder},
    {path: "/integralshop", component: Integralshop},
    {path: "/servercenter", component: Servercenter},
    {path: "/elmvip", component: Elmvip},
    {path: "/download", component: Downloade},
    {path: "/account", component: Account},
    {path: "/login", component: Login},
    {path: "/servercontent", component: Servercontent},
    {path:"/address",component:Address},
    {path:"/changepassword",component:Changepassword},
    {path:"/logout",component:Logout},
    {path:"/username",component:Username},
    {path:"/newaddress",component:NewAddress},
    {path:"/searchaddress",component:SearchAddressMa},
    {path:"/exchangevip",component:ExchangeVip},
    {path:"/purchaserecord",component:PurchaseRecord},
    {path:"/cardforvip",component:CardForVip},
    {path:"/exchangeredpacket",component:ExchangeRedPacket},
    {path:"/recommend",component:Recommend},
    {path:"/redpackethistory",component:RedpacketHistory},
    {path:"/aboutbalance",component:AboutBalance},
    {path:"/aboutredpacket",component:AboutRedpacket},
    {path:"/aboutvoucher",component:AboutVoucher},
    {path:"/aboutintegral",component:AboutIntegral},
    {path:"/aboutvip",component:AboutVip},
    {path:"/lianxi",component:Lianxi},

    //chen
    // {path:'/',redirect:'/hp'},
    {path:'/hp',component:HomePage},
    {path:'/flxq',component:FenLeiXiangQing},
    {path:'/sp',component:Sp,redirect:'/sp/spf',children:[
        {path:'spf',component:SpF},
        {path:'appraise',component:Appraise},//评价页面
      ]
    },
    {path:'/qr',component:Qr},
    {path:'/bz',component:Bz},
    {path:'/fp',component:Fp},
    {path:'/xq',component:Xq},
    {path:'/an',component:An},
    {path:'/dg/:data',name:'dg',component:Dg},//单个商品页面
    //yang
    // {path:'/',redirect:'/loading-data '},
    {path:'/search_page',component:SearchPage},

    {path:'/city',component:SelectCity},
    {path:'/search-address',component:SearchAddress},
    {path:'/delievery-address',component:DeliveryAddress},
    {path:'/add-delivery-address',component:AddeDliveryAddress},
    {path:'/loading-data',component: LoadingData   },
    {path:'/search_delivery_address',component:SearchDeliveryAddress},


  ]
})
