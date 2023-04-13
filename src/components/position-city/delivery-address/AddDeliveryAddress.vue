<template>
  <!-- 添加地址   路由 / add-delivery-address -->
  <div id="add-address">
    <!--<div id="add-address-head">-->
      <!--<img src="../../../assets/prev.png" id="add-address-head-img" @click="backUp"/>-->
      <!--<span>添加地址</span>-->
    <!--</div>-->
    <div id="address-describe">
      <div class="describe-list">
        <div class="describe-list-contact">
          <span>联系人</span>
        </div>
        <div class="describe-list-name">
          <input type="text" placeholder="你的名字" v-model="inputName">
          <div>
            <span class="describe-list-name-span" @click="selectOne"><img :src="oneImgUrl"
                                                                          class="describe-list-name-img"/>先生</span>
            <span class="describe-list-name-span" @click="selectTwo"><img :src="twoImgUrl"
                                                                          class="describe-list-name-img"/>女士</span>
          </div>
        </div>
      </div>
      <div class="describe-list">
        <div class="describe-list-tel">
          <span>联系电话</span>
        </div>
        <div class="describe-list-name">
          <div class="your-tel">
            <input type="text" placeholder="你的手机号" v-model="inputTel">
            <img src="../../../assets/add.png" height="20" width="20" @click="addTel"/>
          </div>
          <input type="text" placeholder="备选电话" v-if="isAddTel">
        </div>
      </div>
      <div class="describe-list">
        <div class="describe-list-contact">
          <span>送餐地址</span>
        </div>
        <div class="describe-list-name">
          <!--path:'/search-address'-->
          <router-link :to="{path:'search_delivery_address'}">
            <input type="text" placeholder="小区/写字楼/学校等" v-model="inputAddress" class="selectAddress">
          </router-link>
          <input type="text" placeholder="详细地址（如门牌号等）" v-model="inputAddressOther">
        </div>
      </div>
      <div class="describe-list">
        <div class="describe-list-contact">
          <span>标签</span>
        </div>
        <div class="describe-list-name">
          <input type="text" placeholder="无/家/学校/公司">
        </div>
      </div>
    </div>
    <div class="define" @click="addAddress">确定</div>
    <div id="warning" v-if="isWaring">
      <div id="warning-box">
        <img src="../../../assets/minePicture/gantanhao.png"/>
        <p>请输入{{ inputWarn}}</p>
        <div @click="warningBox">确定</div>
      </div>
    </div>
  </div>

</template>

<script>
  import oneP from "../../../assets/img/duihao0.png"
  import  twoP from "../../../assets/img/duihao1.png"

  export default {
    name: "AddDeliveryAddress",
    data() {
      return {
        oneImgUrl: oneP,
        twoImgUrl: oneP,
        isAddTel: false,
        isWaring: false,
        inputWarn: '',
        inputName: "",
        sex: '',
        inputTel: '',
        inputAddress: '',
        inputAddressOther: '',

      }
    },
    mounted(){
      //地址传来的
      if((this.$route.query.selectAddress)){

        this.inputAddress = this.$route.query.selectAddress;
        console.log(this.$route.query.selectAddress+"----------------");
        console.log(this.inputAddress)
      }
    },
    created() {
      this.$store.commit("updateCharacter","添加地址");
      this.$store.commit("updateShowOfHidden",true);
      this.$store.commit("updateEndShowOfHidden",false);

      if(localStorage.getItem('addressMsg')!=null){
        console.log(11);
        this.inputName=JSON.parse(localStorage.getItem('addressMsg')).name;
        this.sex=JSON.parse(localStorage.getItem('addressMsg')).sex;
        this.inputTel=JSON.parse(localStorage.getItem('addressMsg')).phone;
        this.inputAddress=JSON.parse(localStorage.getItem('addressMsg')).address;
        this.inputAddressOther=JSON.parse(localStorage.getItem('addressMsg')).beiaddress;
        this.isAddTel=JSON.parse(localStorage.getItem('addressMsg')).beiphone
      }else {
        console.log(22)
      }
      console.log(this.$router);
    },
    methods: {
      selectOne() {
        this.oneImgUrl = twoP;
        this.twoImgUrl = oneP;
        this.sex = '男';
      },
      selectTwo() {
        this.oneImgUrl = oneP;
        this.twoImgUrl = twoP;
        this.sex = '女';
      },
      addTel() {
        this.isAddTel = true;
      },
      addAddress() {
        if (this.inputName == '') {
          // 判断联系人是否添加
          this.isWaring = true;
          this.inputWarn = '名字'
        } else if (this.inputTel == '') {
          //判断手机号是否添加
          this.isWaring = true;
          this.inputWarn = '手机号'
        } else if (this.inputAddress == '' || this.inputAddressOther == '') {
          // 判断送餐地址是否添加
          this.isWaring = true;
          this.inputWarn = '送餐地址'
        } else {
          console.log(localStorage.getItem('addressMsg'))
          this.$router.push({path: '/delievery-address'})
        }
      },
      warningBox() {
        this.isWaring = false;
      },
      backUp() {
        this.$router.push({path: '/delievery-address'})
      }
    },
    beforeUpdate() {
      //信息都已经添加  提交信息
      let obj = {
        name: this.inputName,
        sex: this.sex,
        phone: this.inputTel,
        address: this.inputAddress,
        beiaddress: this.inputAddressOther,
        beiphone: this.isAddTel
      };
      localStorage.addressMsg = JSON.stringify(obj);
    }
  }


</script>

<style scoped>
  #add-address-head {
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
  }

  #add-address-head-img {
    margin-left: .3rem;
    margin-top: .3rem;
    width: 1rem;
    height: 1rem;
  }

  #add-address-head > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    color: #fff;
    text-align: center;
  }

  #address-describe {
    background-color: #fff;
    padding: 0 .7rem;
  }

  .describe-list {
    display: flex;
    border-bottom: .025rem solid #f5f5f5;
  }

  .describe-list-contact, .describe-list-tel {
    font-size: .7rem;
    color: #333;
    flex: 2;
    line-height: 2.5rem;
  }

  .describe-list-name {
    flex: 5;
  }

  .describe-list-name > input,
  .your-tel > input,
  .selectAddress {
    width: 100%;
    height: 2.5rem;
    font-size: .7rem;
    color: #999;
    outline: none;
    border: 0;
  }

  .your-tel > img {
    margin-top: 0.7rem;
  }

  .describe-list-name > div {
    display: flex;
    line-height: 2.5rem;
    border-top: .025rem solid #f5f5f5;
  }

  .describe-list-name-img {
    width: 0.8rem;
    margin-right: 0.3rem;
  }

  .describe-list-name-span {
    font-size: .7rem;
    color: #333;
    align-items: center;
    margin-right: .8rem;
  }

  .define {
    background-color: #4cd964;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: .6rem;
  }

  #warning {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
  }

  #warning-box {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -6rem;
    margin-left: -6rem;
    width: 12rem;
    animation: tipMove .4s;
    background-color: #fff;
    padding-top: .6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px;
    border-radius: .25rem;
  }

  #warning-box > img {
    width: 3rem;
  }

  #warning-box > p {
    font-size: .7rem;
    color: #333;
    line-height: .9rem;
    text-align: center;
    margin-top: .8rem;
    padding: 0 .4rem;
  }

  #warning-box > div {
    font-size: .8rem;
    color: #fff;
    font-weight: 700;
    margin-top: .8rem;
    background-color: #4cd964;
    width: 100%;
    text-align: center;
    line-height: 1.8rem;
    border: 1px;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
  }
</style>
