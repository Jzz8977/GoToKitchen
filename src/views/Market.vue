<template>
  <div class="market">
    <div class="market-search">
      <!-- 搜索及购物车 后台获取都没写呢 -->
      <MarketSearch></MarketSearch>
      <div class="mark" @click="$router.push('/search')"></div>
    </div>
    <div class="market-type">
      <!-- 分类模块 -->
      <MarketType></MarketType>
    </div>
    <div class="topAdv">
      <img src="@/assets/MarketImg/topAdv.jpg" alt>
    </div>
    <div class="taste">
      <Taste></Taste>
    </div>
    <div class="new">
      <!-- 组件传值 如果是2 就加载上新的商品信息列表
      如果是3 就加载经典的商品信息列表-->
      <New></New>
    </div>
    <div class="classic">
      <Classic></Classic>
    </div>
    <div class="adv">
      <Adv></Adv>
    </div>
    <div class="guessYourLike">
      <GuessYourLike></GuessYourLike>
    </div>
  </div>
</template>
<script>
import MarketSearch from "@/components/Market/MarketSearch.vue";
import MarketType from "@/components/Market/MarketType.vue";
import Taste from "@/components/Market/Taste.vue";
import New from "@/components/Market/New.vue";
import Classic from "@/components/Market/Classic.vue";
import Adv from "@/components/Market/Adv.vue";
import GuessYourLike from "@/components/Market/guessYourLike.vue";
export default {
  name: "market",
  data(){
    return {
      i:1,
      bool:true
    }
  },
  components: {
    MarketSearch,
    MarketType,
    Taste,
    New,
    Classic,
    Adv,
    GuessYourLike
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
    //监听滚动事件
  },
  methods: {
    handleScroll(e) {
      let clientHeight =
      document.documentElement.clientHeight || document.body.clientHeight; //页面高度
      let scrollObj = document.querySelector(".market");
      let scrollTop = scrollObj.scrollTop; //div 从头到脚
      let scrollHeight = scrollObj.scrollHeight; // 滚动条的总高度
      // console.log(clientHeight, scrollTop, scrollHeight);
      // console.log(this.$route.name);
      if(scrollTop + clientHeight <= 0.9*scrollHeight&& scrollTop + clientHeight>= 0.8*scrollHeight){
        this.$store.commit("SET_LAZY_LOADING_RUN", true);
      }else if (scrollTop + clientHeight >= 0.9*scrollHeight && this.$store.state.Market.isLoading===true) {
        console.log("快到底了");
        // this.$store.commit("SET_LAZY_LOADING_RUN", true);
            this.$store.commit("SET_LAZY_LOADING_RUN", false);

        this.$store.dispatch("getGuessYourLikeList", {
          pageIndex: this.i
        });
      } else {
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    // console.log(from, 1111);
    if (from.name === "market") {
      window.removeEventListener("scroll", this.handleScroll, true);
    }
    next();
  },
  //获取市集模块的广告信息
  created() {
    //this.$store.dispatch('getAdvList',{advType:2});
    this.$store.dispatch("getGuessYourLikeList", {
        pageIndex: this.i
    });
  }
};
</script>
<style lang="scss" scoped>
.market {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  .market-search {
    height: 0.8rem;
    width: 100%;
    position: fixed;

    z-index: 1;
    .mark {
      position: absolute;
      top: 0;
      left: 0;
      width: 85%;
      height: 100%;
    }
  }
  .market-type {
    margin-top: 0.6rem;
    height: 2.3rem;
  }
  .topAdv {
    box-sizing: border-box;
    border-top: 0.01rem solid #f3f3f3;
    height: 1.415rem;
    width: 100%;
    padding: 0 0.1rem;
    img {
      width: 100%;
      height: auto;
    }
  }
  .taste {
    padding: 0 0.1rem;
    height: 5.3rem;
    // overflow: hidden;
  }
  .new {
    height: 3.7rem;
    padding: 0 0.1rem;
  }
  .classic {
    border-top: 1px solid #ccc;
    height: 3.7rem;
    padding: 0.1rem;
  }
  .adv {
    padding: 0.1rem;
    height: 11.5rem;
  }
  .guessYourLike {
    padding: 0.1rem;
  }
}
</style>
