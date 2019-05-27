<template>
  <div id="cart-bar">
    <div class="cart-bar-left">
      <router-link to tag="a">
        <i class="iconfont">&#xe65e;</i>市集
      </router-link>
      <router-link to tag="a">
        <i class="iconfont">&#xe635;</i>联系卖家
      </router-link>
    </div>
    <div class="cart-bar-right">
      <router-link to tag="a">加入购物车</router-link>
      <router-link to tag="a">立即购买</router-link>
    </div>
  </div>
</template>

<script>
import "@/assets/market/DetailFont/iconfont.css";
export default {
  name: "cart-bar"
};
</script>

<style lang="scss" scoped>
#cart-bar {
  width: 100%;
  height: 0.6rem;
  display: flex;
  justify-content: space-around;
  .cart-bar-left {
    width: 40%;
    display: flex;
    justify-content: space-between;
    font-size: 0.15rem;
    a {
      flex: 1;
      text-align: center;
      align-self: center;
      i {
        font-size: 0.25rem;
        display: block;
      }
    }
  }
  .cart-bar-right {
    width: 58%;
    display: flex;
    justify-content: space-between;
    
    background: #f8664f;
    a {
      flex: 1;
      text-align: center;
      line-height: 0.6rem;
      color: #fff;
      height: 100%;
      font-size: 0.15rem;
      border-right: 1px solid #fff;
    }
  }
}
</style>