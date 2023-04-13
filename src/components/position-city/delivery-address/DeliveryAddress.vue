<template>
  <!-- 选择 新增 收货地址  路由 /delievery-address -->
  <div id="delievery-address" style="background-color: white;height: 100%;">
    <!--<div id="select-address">-->
    <!--<img src="../../../assets/prev.png" @click="backUp"/>-->
    <!--<span>选择地址</span>-->
    <!--</div>-->
    <div id="zhong" @click="toqr" v-if="a">
      <div>
        <div>
          <span>{{data.name}}</span>
          <span>{{data.sex}}</span>
          <span>{{data.phone}}</span>
        </div>
        <div>
          <span style="color: red">家</span>
          <span>{{data.address | chan}}</span>
        </div>
      </div>
      <div>
        <img src="../../../assets/endPrice/dh.png"/>
      </div>
    </div>
    <div id="delievery-address-newly" @click="toAddDelivery">
      <img src="../../../assets/add.png"/>
      <span>新增收货地址</span>
    </div>
  </div>

</template>

<script>
  export default {
    name: "DeliveryAddress",
    data() {
      return {
        img_url: '../../../assets/endPrice/dh.png',
        a: true,
        data: {name: '', sex: '', phone: '', address: ''},
      }
    },
    methods: {
      backUp() {
        this.$router.push({path: '/qr'})
      },
      toAddDelivery() {
        localStorage.removeItem("addressMsg");
        this.$router.push({path: '/add-delivery-address'})
      },
      toqr() {
        this.$router.push({path: '/qr', query: {data: this.data}})
      }
    },
    created() {
      this.$store.commit("updateCharacter", "选择地址");
      this.$store.commit("updateShowOfHidden", true);
      this.$store.commit("updateEndShowOfHidden", false);

      if (localStorage.getItem('addressMsg')) {
        this.data = JSON.parse(localStorage.getItem('addressMsg'));
      }else {
        this.a = false
      }

    },
    filters: {
      chan(p) {
        if (p.length > 13) {
          return p = p.substr(0, 13) + '....';
        }
        return p;
      }
    }
  }
</script>

<style scoped>
  #select-address {
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
  }

  #select-address > img {
    width: 1rem;
    height: 1rem;
  }

  #select-address > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    color: #fff;
    text-align: center;
  }

  #delievery-address-newly {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2.5rem;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 204;
  }

  #delievery-address-newly > img {
    width: 1.2rem;
  }

  #delievery-address-newly > span {
    font-size: .7rem;
    color: #3190e8;
    margin-left: .3rem;
  }

  #zhong {
    margin-top: 0.7rem;
    display: flex;
    font-size: 0.6rem;
    font-weight: bold;
    padding: 0.5rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #c3c3c3;
  }

  #zhong > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
  }

  #zhong > div:nth-of-type(1) > div:nth-of-type(1) {
    margin-bottom: 0.5rem;
  }

  #zhong > div > span {
    margin-right: 0.2rem;
  }

  #zhong > div:nth-of-type(2) > img {
    width: 1rem;
  }

</style>
