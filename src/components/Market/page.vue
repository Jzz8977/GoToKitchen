<template>
  <div class="section">
    <header>
      <div class="header-left">
        <i class="iconfont" @click="back">&#xe65b;</i>
        <i class="iconfont">&#xe688;</i>
        <i class="iconfont">&#xe608;</i>
        <i class="iconfont">&#xe637;</i>
      </div>
      <div class="header-right">
        <i class="iconfont" @click="$router.push('/cart')">&#xe508;</i>
      </div>
    </header>
    <main>
      <div class="swiper-container" :options="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="@/assets/MarketImg/details-page-01.jpg" alt>
          </div>
          <div class="swiper-slide">
            <img src="@/assets/MarketImg/details-page-01.jpg" alt>
          </div>
          <div class="swiper-slide">
            <img src="@/assets/MarketImg/details-page-01.jpg" alt>
          </div>
          <div class="swiper-slide">
            <img src="@/assets/MarketImg/details-page-01.jpg" alt>
          </div>
          <div class="swiper-slide">
            <img src="@/assets/MarketImg/details-page-01.jpg" alt>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <!-- 根据this.goods渲染 -->
      <div class="informations">
        <div class="score">
          <i>评分{{$store.state.Market.goods.goodsScore}}</i>
          <i>
            月销
            <span>{{$store.state.Market.goods.goodsSupportNum}}件</span>
          </i>
          <i>
            总销量
            <span>{{$store.state.Market.goods.goodsSold}}件</span>
          </i>
        </div>
        <div class="introduction">
          <p>{{$store.state.Market.goods.goodsIntroduction}}</p>
          <p>
            <b>自营</b>{{$store.state.Market.goods.goodsName}}
          </p>
          <p>
            <span>￥{{$store.state.Market.goods.goodsNewPrice}}</span>
            <b>包邮</b>
          </p>
          <p>
            <b>每日限量优惠</b>
          </p>
          <div class="bar specifications">
            请选择规格
            <i class="iconfont">&#xe6fa;</i>
          </div>
          <div class="bar">
            <span>·七天无理由退换货</span>
            <span>·24小时发货</span>
            <span>·七天保价</span>
            <i class="iconfont">&#xe6fa;</i>
          </div>
          <div class="bar">
            <span>促销</span>
            每日限量优惠
            <i class="iconfont">&#xe6fa;</i>
          </div>
          <div class="shop">
            <img src="@/assets/MarketImg/details-page-shop-logo.jpg" alt>
            <div class="shop-middle">
              <h6>{{$store.state.Market.goods.shopName}}</h6>
              <p>商品数量 {{$store.state.Market.goods.shopShowNum}}</p>
              <p>{{$store.state.Market.goods.shopActivities}}</p>
            </div>
            <div class="shop-right">
              <p>去逛逛</p>
            </div>
          </div>
          <div class="shop-notice">
            <h5>
              店铺公告
              <i class="iconfont">&#xe501;</i>
            </h5>
            <div class="shop-notice-main">
              <p>{{$store.state.Market.goods.shopNotices}}</p>
            </div>
          </div>
        </div>
        <div class></div>
      </div>
      <div class="swiper-container all-like">
        <h4>大家都在买</h4>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="all-like-div">
              <img src="@/assets/MarketImg/all-like-01.jpg" alt>
              <p>[全新升级]下厨房 x Coca...</p>
              <b>￥199</b>
            </div>
            <div class="all-like-div">
              <img src="@/assets/MarketImg/all-like-01.jpg" alt>
              <p>[全新升级]下厨房 x Coca...</p>
              <b>￥199</b>
            </div>
            <div class="all-like-div">
              <img src="@/assets/MarketImg/all-like-01.jpg" alt>
              <p>[全新升级]下厨房 x Coca...</p>
              <b>￥199</b>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="all-like-div">
              <img src="@/assets/MarketImg/all-like-01.jpg" alt>
              <p>[全新升级]下厨房 x Coca...</p>
              <b>￥199</b>
            </div>
            <div class="all-like-div">
              <img src="@/assets/MarketImg/all-like-01.jpg" alt>
              <p>[全新升级]下厨房 x Coca...</p>
              <b>￥199</b>
            </div>
            <div class="all-like-div">
              <img src="@/assets/MarketImg/all-like-01.jpg" alt>
              <p>[全新升级]下厨房 x Coca...</p>
              <b>￥199</b>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="all-like-div">
              <img src="@/assets/MarketImg/all-like-01.jpg" alt>
              <p>[全新升级]下厨房 x Coca...</p>
              <b>￥199</b>
            </div>
            <div class="all-like-div">
              <img src="@/assets/MarketImg/all-like-01.jpg" alt>
              <p>[全新升级]下厨房 x Coca...</p>
              <b>￥199</b>
            </div>
            <div class="all-like-div">
              <img src="@/assets/MarketImg/all-like-01.jpg" alt>
              <p>[全新升级]下厨房 x Coca...</p>
              <b>￥199</b>
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="btn" ref="btn">
        <p>继续拖动，查看图文详情</p>
      </div>
      <div class="details">
        <img src="@/assets/MarketImg/details-bot-01.jpg" alt="">
        <img src="@/assets/MarketImg/details-bot-01.jpg" alt="">
        <img src="@/assets/MarketImg/details-bot-01.jpg" alt="">
      </div>
    </main>
  </div>
</template>

<script>
import "@/assets/market/DetailFont/iconfont.css";
import "@/assets/market/DetailFont/iconfont.js";
// require styles
import "swiper/dist/css/swiper.min.css";
import Swiper from "swiper";

export default {
  name: "page",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar"
        }
      },
      goodsId:"",
      goods:{}
    };
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
    handleScroll(e) {
      // let clientHeight =
      //   document.documentElement.clientHeight || document.body.clientHeight; //窗口高度
      // let scrollTop =  document.documentElement.scrollTop || document.body.scrollTop; //窗口高度
      // let scrollObj = document.querySelector(".btn");
      // // let scrollTop = scrollObj.scrollTop; //div 从头到脚
      // let scrollHeight = scrollObj.scrollHeight; // 滚动条的总高度
      // console.log(clientHeight,"clientHeight");
      // console.log(scrollTop, "scrplltop");
      // console.log(scrollHeight,' scrollHeight');
      // // console.log(this.$route.name);
      // if (scrollTop + clientHeight >= 0.9 * scrollHeight) {
      //   console.log("快到底了");
      // }
      	// 获取元素对屏幕上边的距离let clientHeight =
        let clientHeight= document.documentElement.clientHeight || document.body.clientHeight; //窗口高度
        
        let top = parseInt(this.$refs.btn.getBoundingClientRect().top) 
        console.log(top)
        if (top < 580 ) {
          // 节流
          console.log('向上飞')
          
        }else{
          this.$refs.btn.top = 50;
          console.log(this.$refs.btn);
          document.documentElement.scrollTop = "50px";
        }
    }
    
  },
  // components: {
  //   swiper,
  //   swiperSlide
  // },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: false,
      loop: false,
      pagination: {
        el: ".swiper-pagination"
      }
    });
    console.log(this.goods,"mounted")

    window.addEventListener("scroll", this.handleScroll, true);
    //监听滚动事件
  },
  beforeRouteLeave(to, from, next) {
    console.log(from, 1111);
    if (from.name === "page") {
      window.removeEventListener("scroll", this.handleScroll, true);
    }
    next();
  },
  beforeRouteEnter (to, from, next) {
    console.log(to);
    next();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  },
  created(){
    console.log(this.$route,12345);
    this.goodsId = this.$route.query.id;
    // //根据id从所有商品中找出我要的商品信息
    this.$axios.get("/getGoodsList",{
      params:{
        goodsId:this.goodsId
      }
    }).then(data=>{
      this.goods = data.goodsList;
      this.$store.commit("SET_GOODS",data.goodsList);
    })
    // this.gooods = this.$store.state.allGoodsList.find(v=>v._id===this.goodsId);


  }
};
</script>

<style lang="scss" scoped>
.section {
  overflow: auto;
  header {
    box-sizing: border-box;
    padding: 0 0.05rem;
    position: fixed;
    left: 0;
    top: 0;
    height: 0.6rem;
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: space-between;
    line-height: 0.8rem;
    z-index: 1000;
    .header-left {
      align-self: center;
      width: 50%;
      display: flex;
      justify-content: space-around;
      i {
        font-size: 0.25rem;
      }
    }
    .header-right {
      align-self: center;
      width: 15%;
      i {
        font-size: 30px;
      }
    }
  }
  main {
    padding-top: 0.6rem;
    background: #fafbf6;

    .swiper-container {
      width: 100%;
      height: 3.8rem;
      // height: 4rem;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .informations {
      width: 100%;
      background: #fff;
      padding-bottom: 0.1rem;
      .score {
        height: 0.375rem;
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        padding: 0 0.05rem;
        border-bottom: 1px solid #ccc;
        i {
          align-self: center;
          font-style: normal;
          span {
            color: #de676b;
          }
        }
      }
      .introduction {
        width: 100%;
        height: 100%;
        padding: 0 0.1rem;
        box-sizing: border-box;
        p:nth-child(1) {
          width: 100%;
          height: 0.2rem;
          font-size: 12px;
          margin: 0.1rem 0;
        }
        p:nth-child(2) {
          width: 100%;
          // height: 0.8rem;
          font-size: 20px;
          margin: 0.15rem 0;
          box-sizing: border-box;
          b {
            background: #fd6550;
            color: #fff;
            font-size: 12px;
            display: inline-block;
            padding: 5px;
            border-radius: 5px;
            margin-right: 0.1rem;
          }
        }
        p:nth-child(3) {
          box-sizing: border-box;
          width: 100%;
          padding: 0.1rem;
          span {
            color: #fd6550;
          }
          b {
            float: right;
            color: #ccc;
            font-weight: normal;
          }
        }
        p:nth-child(4) {
          box-sizing: border-box;
          width: 100%;
          padding: 0.1rem;
          b {
            background: #fd6550;
            color: #fff;
            display: inline-block;
            font-weight: normal;
            padding: 5px;
            border-radius: 5px;
          }
        }
        .bar {
          width: 100%;
          box-sizing: border-box;
          padding: 0.1rem 0;
          border-bottom: 1px solid #ccc;
          i {
            float: right;
          }
          span {
            color: #ff6f6e;
            display: inline-block;
            margin: 0 0.05rem;
          }
        }
        .specifications {
          text-indent: 0.2rem;
          background: #f2f2f2;
          border: 0;
        }
        .shop {
          width: 100%;
          height: 1.2rem;
          overflow: hidden;
          img {
            width: 0.875rem;
            float: left;
          }
          .shop-middle {
            overflow: hidden;
            width: 2rem;
            height: 1.2rem;
            float: left;
            h6 {
              line-height: 0.6rem;
              height: 0.45rem;
              font-size: 0.2rem;
              font-weight: normal;
            }
            p {
              width: 1rem;
              height: 1rem;
              font-size: 0.16rem;
              color: #9a9b96;
              float: left;
            }
          }
          .shop-right {
            float: left;
            box-sizing: border-box;
            padding: 0.2rem 0;
            p {
              width: 0.55rem;
              height: 0.45rem;
              border: 1px solid #ef6b76;
              text-align: center;
              line-height: 0.45rem;
              border-radius: 5px;
              font-size: 16px;
              color: #ef6b76;
            }
          }
        }
        .shop-notice {
          clear: both;
          height: 100%;
          h5 {
            font-size: 0.2rem;
            font-weight: normal;
            .iconfont {
              color: #ffbc00;
            }
          }
          .shop-notice-main {
            margin-top: 0.2rem;
            min-height: 1rem;
            height:100%;
            background: #fff67d;
            box-sizing: border-box;
            padding: 0.1rem;
            p {
              font-size: 0.2rem;
            }
          }
        }
      }
    }
    .all-like {
      margin-top: 0.2rem;
      background: #fff;
      width: 100%;
      height: 2.7rem;
      padding: 0.1rem;
      padding-bottom: 0.2rem;
      box-sizing: border-box;
      // overflow: hidden;
      h4 {
        width: 100%;
        text-align: center;
        font-size: 0.22rem;
        font-weight: normal;
        height: 0.5rem;
        line-height: 0.5rem;
      }
      .swiper-wrapper {
        .all-like-div {
          float: left;
          width: 27%;
          margin: 0 0.1rem;
          img {
            width: 1rem;
          }
          p {
            height: 0.45rem;
            font-size: 0.15rem;
          }
          b {
            font-weight: normal;
          }
        }
      }
    }
    .btn {
      p {
        text-align: center;
      }
    }
    .details{
      img{
        width: 100%;
      }
    }
  }
}
</style>