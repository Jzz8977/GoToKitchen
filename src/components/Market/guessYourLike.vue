<template>
  <div>
    <h3>猜你喜欢</h3>
    <div class="section">
      <!-- <div class="section-ev" v-for="(item,i) in $store.state.Market.getGuessYourLikeList" :key="i" @click="$router.push({path:'/page',query:{id:item._id}})"> -->
      <div
        class="section-ev"
        v-for="(item,i) in $store.state.Market.guessYourLikeList"
        :key="i"
        @click="$router.push({path:'/page',query:{id:item._id}})"
>
        <img :src="$store.state.config.url+item.goodsLogo" alt="图片"/>
        <div class="section-down">
          <i>{{item.goodsName}}</i>
          <b>{{item.goodsIntroduction}}</b>
          <p>
            <span>{{item.goodsNewPrice/1|currency}}</span>
            <!-- <s>{{item.goodsOldPrice|currency}}</s> -->
            <em>已售 {{item.goodsSold}}</em>
          </p>
        </div>
      </div>











      
    </div>
  </div>
</template>

<script>
export default {
  name: "guess-your-like",
};
</script>
<style lang="scss" scoped>
div {
  width: 100%;
  h3 {
    width: 100%;
    font-size: 0.2rem;
  }
  .section {
    margin-top: 0.2rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .section-ev {
      width: 44%;
      float: left;
      margin: 10px;
      img {
        width: 100%;
      }
      .section-down {
        i {
          display: block;
          font-style: normal;
           text-overflow:  ellipsis;
            white-space: nowrap;
            width: 100%;
            overflow: hidden;
        }

        b {
          display: block;
          color: #a1a1a1;
          font-weight: normal;
           text-overflow:  ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 100%;
        }
        p {
          span {
            color: red;
          }
          em {
            font-style: normal;
            float: right;
            color: #a1a1a1;
          }
        }
      }
    }
  }
}
</style>