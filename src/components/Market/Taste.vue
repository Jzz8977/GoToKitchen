<template>
  <div class="main">
    <h3>
      爱尝鲜
      <span class="h3Span">查看全部</span>
    </h3>
    <p>全网好货，超值低价</p>
    <div class="screen">
      <div class="sectionWrap">
        <div class="section" v-for="(item,i) in $store.state.Market.tasteList" :key="i" @click="$router.push({path:'/page',query:{id:item._id}})">
          <!-- 到时候路由再传id -->
          <img :src="$store.state.config.url+item.goodsLogo" alt="图片">
          <div class="section-right">
            <i>{{item.goodsName}}</i>
            <span>尝鲜价{{item.goodsNewPrice}}原价为{{item.goodsOldPrice}}</span>
            <p>
              来自：下厨房{{item.addTime | date}}
              <b>已售{{item.goodsSold}}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "taste",
  data() {
    return {
      list: [
        {
          id: 1,
          goodsPic: '@/assets/MarketImg/taste-01.jpg',
          goodsTitle: "高钙精选纯羊奶200ml*6盒",
          active: "尝鲜价49元包邮，原价68元",
          sold: 12,
          addTime: Date.now()
        },
        {
          id: 2,
          goodsPic: "/img/taste-01.9762ec47.jpg",
          goodsTitle: "高钙精选纯羊奶200ml*6盒",
          active: "尝鲜价49元包邮，原价68元",
          sold: 12,
          addTime: Date.now()
        },
        {
          id: 3,
          goodsPic: "/img/taste-01.9762ec47.jpg",
          goodsTitle: "高钙精选纯羊奶200ml*6盒",
          active: "尝鲜价49元包邮，原价68元",
          sold: 12,
          addTime: Date.now()
        },
        {
          id: 4,
          goodsPic: "/img/taste-01.9762ec47.jpg",
          goodsTitle: "高钙精选纯羊奶200ml*6盒",
          active: "尝鲜价49元包邮，原价68元",
          sold: 12,
          addTime: Date.now()
        },
        {
          id: 5,
          goodsPic: "/img/taste-01.9762ec47.jpg",
          goodsTitle: "高钙精选纯羊奶200ml*6盒",
          active: "尝鲜价49元包邮，原价68元",
          sold: 12,
          addTime: Date.now()
        },
        {
          id: 6,
          goodsPic: "/img/taste-01.9762ec47.jpg",
          goodsTitle: "高钙精选纯羊奶200ml*6盒",
          active: "尝鲜价49元包邮，原价68元",
          sold: 12,
          addTime: Date.now()
        },
        {
          id: 7,
          goodsPic: "/img/taste-01.9762ec47.jpg",
          goodsTitle: "高钙精选纯羊奶200ml*6盒",
          active: "尝鲜价49元包邮，原价68元",
          sold: 12,
          addTime: Date.now()
        },
        {
          id: 8,
          goodsPic: "/img/taste-01.9762ec47.jpg",
          goodsTitle: "高钙精选纯羊奶200ml*6盒",
          active: "尝鲜价49元包邮，原价68元",
          sold: 12,
          addTime: Date.now()
        },
        {
          id: 9,
          goodsPic: "/img/taste-01.9762ec47.jpg",
          goodsTitle: "高钙精选纯羊奶200ml*6盒",
          active: "尝鲜价49元包邮，原价68元",
          sold: 12,
          addTime: Date.now()
        }
      ]
    };
  },
  created() {
    //获取猜你喜欢列表中的数据
    // 通过调用vuex中的actions的异步方法
    this.$store.dispatch('getTasteList',{module:1,limitNum:9});
  },
};
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  width: 100%;

  h3 {
    width: 100%;
    font-size: 0.2rem;
    .h3Span {
      float: right;
      font-size: 0.1rem;
      color: #d5654f;
    }
  }
  p {
    line-height: 0.15rem;
    color: #ccc;
  }
  .screen {
    margin-top: 0.1rem;
    overflow: auto;
    .sectionWrap {
      overflow-x: auto;
      overflow-y: hidden;
      width: 11.10rem;
      .section {
        box-sizing: border-box;
        margin: 0.1rem;
        position: relative;
        width: 3.5rem;
        height: 1.2rem;
        float: left;
        img {
          width: 1.3rem;
          height: 1.3rem;
          float: left;
          margin-right: 0.1rem;
        }
        .section-right {
          float: left;
          i {
            display: block;
            color: #000;
            font-size: 16px;
            font-style: normal;
            width: 2rem;
             white-space:pre-wrap;
          }
          span {
            color: #d5654f;
            font-size: 14px;
          }
          p {
            width: 2rem;
            font-size: 12px;
            position: absolute;
            bottom: 0;
          }
        }
      }
    }
  }
}
</style>