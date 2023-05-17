<template>
  <div>
    <MyHeader background="red" textContent="购物车案列"></MyHeader>
    <div class="main">
      <MyGoods v-for="(obj, index) in shopCartList" :key="obj.goods_id" :goodLists="obj"></MyGoods>
    </div>
    <MyFooter :footerLists="shopCartList" @changeState="changeStateFun"></MyFooter>

  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyGoods from './components/MyGoods.vue';
import MyFooter from './components/MyFooter.vue';
export default {
  data() {
    return {
      shopCartList: []
    }
  },
  components: {
    MyHeader,
    MyGoods,
    MyFooter
  },
  created() {
    this.$axios({
      url: '/api/cart'
    }).then(res => {
      this.shopCartList = res.data.list;
    })
  },
  methods: {
    changeStateFun(stated) {
      this.shopCartList.forEach(obj => obj.goods_state = stated);
    }
  }

}
</script>

<style lang="less" scoped>
.main {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>