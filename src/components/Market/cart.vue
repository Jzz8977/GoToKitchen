<template>
  <div class="cart">
    <div class="cart-nav">
      <i class="iconfont" @click='$router.back(-1);'>&#xe65b;</i>
      <span>购物车</span>
      <a href="javascript:;">编辑</a>
    </div>
    <div class="cart-list">
      <div class="cart-list-map"></div>
    </div>
    <div class="cart-main">
      <div class="cart-main-shop">
        <h3>
          <b></b>钟薛高旗舰店
          <i class="iconfont">&#xe6fa;</i>
        </h3>
        <div class="cart-main-goods">
          <b></b>
          <div class="cart-main-goods-li">
            <img src="@/assets/MarketImg/taste-01.jpg" alt>
            <div class="cart-main-goods-li-right">
              <h6>钟薛高小清新系系列手煮茉莉*6抹茶*4抹茶冰激凌雪糕冰激···</h6>
              <em>小清新系列</em>
              <p>
                <span>￥153</span>
                <s>￥170</s>
                <input type="text" value="1" class="num">
              </p>
            </div>
          </div>
        </div>
        <p class="cart-main-bot">已经享受包邮</p>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/market/DetailFont/iconfont.css";

export default {
  name: "cart"
};
</script>

<style lang="scss" scoped>
.cart {
  .cart-nav {
    height: 0.65rem;
    box-sizing: border-box;
    padding: 0 0.1rem;
    display: flex;
    justify-content: space-between;
    i,a,span {
      font-size: 0.2rem;
      align-self: center;
    }
    a {
      color: #f96450;
    }
  }
  .cart-main {
    height: 100%;
    width: 100%;
    overflow: auto;
    .cart-main-shop {
      width: 100%;
      height: 2.5rem;
      // background: #000;
      h3 {
        height: 0.3rem;
        border-bottom: 1px solid #ccc;
        font-weight: normal;
        b {
          display: inline-block;
          width: 0.15rem;
          height: 0.15rem;
          border-radius: 50%;
          border: 1px solid #ccc;
          margin: 0 0.1rem;
        }
      }
      .cart-main-goods {
        height: 1.3rem;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        b {
          align-self: center;
          display: inline-block;
          width: 0.15rem;
          height: 0.15rem;
          border-radius: 50%;
          border: 1px solid #ccc;
          margin: 0 0.1rem;
        }
        .cart-main-goods-li {
          flex: 1;
          align-self: center;
          overflow: hidden;
          img {
            display: block;
            width: 1rem;
            height: 1rem;
            float: left;
          }
          .cart-main-goods-li-right {
            margin-left: 0.1rem;
            float: left;
            width: 2.15rem;
            h6 {
              font-weight: normal;
              width: 100%;
              width: 2.15rem;
              font-size: 0.15rem;
            }
            em {
              color: #ccc;
              font-style: normal;
            }
            p {
              width: 100%;
              height: 0.3rem span {

              }
              s {
                color: #ccc;
              }
              .num {
                float: right;
                width: 0.45rem;
                height: 0.3rem;
                border: 1px solid #ccc;
                text-align: center;
              }
            }
          }
        }
      }
      .cart-main-bot {
        border-bottom: 0.1rem solid #fafaf8;
        text-indent: 0.35rem;
      }
    }
  }
}
</style>