<template>
  <div class="type">
    <div class="type-search">
      <MarketSearch></MarketSearch>
    </div>
    <div class="type-btn">
      <div class="mark">
        <div>
          <a href="javascript:;">乳制品</a>
          <a href="javascript:;">乳制品</a>
          <a href="javascript:;">乳制品</a>
          <a href="javascript:;">乳制品</a>
          <a href="javascript:;">乳制品</a>
        </div>
      </div>
    </div>
    <div class="type-main">
      <div class="type-main-div">
        <img src="@/assets/MarketImg/type-01.jpg" alt>
        <div class="type-main-div-bot">
          <i>妙可懒惰|双色马苏里拉 芝士碎起 司批萨拉斯烘</i>
          <b>[新品]妙可蓝多双色马···</b>
          <p>
            <span>{{89|currency}}</span>
            <em>已售 193</em>
          </p>
        </div>
      </div>
      <div class="type-main-div">
        <img src="@/assets/MarketImg/type-01.jpg" alt>
        <div class="type-main-div-bot">
          <i>妙可懒惰|双色马苏里拉 芝士碎起 司批萨拉斯烘</i>
          <b>[新品]妙可蓝多双色马···</b>
          <p>
            <span>{{89|currency}}</span>
            <em>已售 193</em>
          </p>
        </div>
      </div>
      <div class="type-main-div">
        <img src="@/assets/MarketImg/type-01.jpg" alt>
        <div class="type-main-div-bot">
          <i>妙可懒惰|双色马苏里拉 芝士碎起 司批萨拉斯烘</i>
          <b>[新品]妙可蓝多双色马···</b>
          <p>
            <span>{{89|currency}}</span>
            <em>已售 193</em>
          </p>
        </div>
      </div>
      <div class="type-main-div">
        <img src="@/assets/MarketImg/type-01.jpg" alt>
        <div class="type-main-div-bot">
          <i>妙可懒惰|双色马苏里拉 芝士碎起 司批萨拉斯烘</i>
          <b>[新品]妙可蓝多双色马···</b>
          <p>
            <span>{{89|currency}}</span>
            <em>已售 193</em>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarketSearch from "@/components/Market/MarketSearch.vue";
export default {
  name: "type",
  components: {
    MarketSearch
  }
};
</script>

<style lang="scss" scoped>
.type {
  width: 100%;
  height: 100%;

  .type-search {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
  }
  .type-btn {
    padding-top: 0.6rem;
    height: 1rem;
    width: 100%;
    background: #eeebe4;
    overflow: hidden;

    .mark {
      height: 106%;
      overflow: auto;
      div {
        height: 100%;
        display: flex;
        justify-content: space-around;
        width: 5rem;
        align-items: center;
        a {
          display: block;
          background: #fff;
          height: 0.8rem;
          width: 0.8rem;
          text-align: center;
          line-height: 0.8rem;
          border-radius: 0.1rem;
        }
      }
    }
  }
  .type-main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow: hidden;
    padding: 0.1rem;
    box-sizing: border-box;
    .type-main-div {
      flex: 1;
      margin: 0.1rem;
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
      .type-main-div-bot {
        width: 100%;
        i {
          letter-spacing: 1px;
          display: block;
          color: #000;
          font-size: 0.15rem;
          font-style: normal;
          width: 100%;
        }
        b {
          font-weight: normal;
          color: #666;
          width: 100%;
          text-align: center;
          font-size: 0.12px;
        }
        p {
          width: 100%;
          em {
            float: right;
            font-style: normal;
          }

          span {
            color: #d5654f;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>