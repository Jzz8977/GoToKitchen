<template>
  <div class="main">
    <h3>
      市集上新
      <span class="h3Span">查看全部</span>
    </h3>
    <p>好评新货，限时折扣</p>
    <div class="screen">
      <div class="sectionWrap">
        <div class="section" v-for="(item,i) in $store.state.Market.newList" :key="i" @click="$router.push({path:'/page',query:{id:item._id}})">
          <!-- <img src="@/assets/MarketImg/new-01.jpg" alt="图片"> -->
          <img :src="$store.state.config.url+item.goodsLogo" alt="图片">
          <div class="section-down">
            <i>{{item.goodsName}}</i>
            <b>{{item.goodsIntroduction}}</b>
            <p>
              <span>{{item.goodsNewPrice/1|currency}}</span>
              <s>{{item.goodsOldPrice/1|currency}}</s>
              <em>{{item.goodsScore}}分</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "new",
  data() {
    return {
      list: [
        {
          id: 1,
          goodsPic: "/img/new-01.e49fac15.jpg",
          goodsTitle: "云南红皮小土豆5斤",
          active: "买就送辣椒一包！收···",
          goodsNewPrice: 18,
          goodsOldPrice: 19.9,
          score: 4.9
        },
        {
          id: 1,
          goodsPic: "/img/new-01.e49fac15.jpg",
          goodsTitle: "云南红皮小土豆5斤",
          active: "买就送辣椒一包！收···",
          goodsNewPrice: 18,
          goodsOldPrice: 19.9,
          score: 4.9
        },
        {
          id: 1,
          goodsPic: "/img/new-01.e49fac15.jpg",
          goodsTitle: "云南红皮小土豆5斤",
          active: "买就送辣椒一包！收···",
          goodsNewPrice: 18,
          goodsOldPrice: 19.9,
          score: 4.9
        },
        {
          id: 1,
          goodsPic: "/img/new-01.e49fac15.jpg",
          goodsTitle: "云南红皮小土豆5斤",
          active: "买就送辣椒一包！收···",
          goodsNewPrice: 18,
          goodsOldPrice: 19.9,
          score: 4.9
        },
        {
          id: 1,
          goodsPic: "/img/new-01.e49fac15.jpg",
          goodsTitle: "云南红皮小土豆5斤",
          active: "买就送辣椒一包！收···",
          goodsNewPrice: 18,
          goodsOldPrice: 19.9,
          score: 4.9
        }
      ]
    };
  },
  props:['type'],
  created() {
    //获取猜你喜欢列表中的数据
    // 通过调用vuex中的actions的异步方法
    // if(this.type===2){
      this.$store.dispatch('getNewList',{module:"2"});
    // }
    // if(this.type === 3){
      // this.$store.dispatch('getClassicList',{module:3});
    // }
    
  }
}
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
      width:10.76rem;
      .section {
        box-sizing: border-box;
        margin: 0.1rem;
        position: relative;
        width: 1.95rem;
        float: left;
        img {
          width:1.95rem;
          height: 1.95rem;
        }
        .section-down {
          // width: 1.95rem;
          i {
            // letter-spacing: 5px;
            display: block;
            color: #000;
            font-size: 16px;
            font-style: normal;
            width: 100%;
            // text-align: center;
          }
          b {
            // letter-spacing: 3px;
            display: block;
            font-weight: normal;
            color: #666;
            width: 100%;
            text-overflow:  ellipsis;
            white-space: nowrap;
            overflow: hidden;

          }
          p {
            width: 100%;
            em{
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
}
</style>