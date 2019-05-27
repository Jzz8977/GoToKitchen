<template>
  <div class="lession">
    <div class="section">
      <div class="course" v-for="(item,i) in lessionList" :key="i" @click="$router.push('/special')">
        <img :src="item.lessionPic" alt="图片">
        <div class="describe">
          <p>{{item.lessionTitle}}</p>
          <p>{{item.lessionTime}}</p>
          <p>{{item.user}}</p>
          <p>{{item.lessionNum}}</p>
        </div>
        <span>{{item.lessionPrice}}</span>

        <!-- <img :src="goodsImg+item.thumbnail" alt="图片">
                <div class="describe"  >
        <p>{{item.goods_title}}</p>-->
        <!-- <p>{{item.lessionTime}}</p> -->
        <!-- <p>{{item.user}}</p> -->
        <!-- <p>{{item.integral}}</p>   
                </div>
        <span>{{item.price}}</span>-->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "course",
  data() {
    return {
      goodsInko: [],
    //   goodsImg: "http://39.96.76.3/HuiWanZhong/public/uploads/",
      lessionList: [
        {
          id: 1,
          lessionPic: require("@/assets/img/5.jpg"),
          lessionTitle: "健康快手美味健康冻酸奶",
          lessionTime: "时长2小时18分钟",
          user: "北京大幅",
          lessionNum: "285人参与",
          lessionPrice: "￥35"
        },
        {
          id: 2,
          lessionPic: require("@/assets/img/4.jpg"),
          lessionTitle: "爱上 香草巴菲冰淇淋蛋糕",
          lessionTime: "时长2小时18分钟",
          user: "北京大幅",
          lessionNum: "285人参与",
          lessionPrice: "￥35"
        },
        {
          id: 3,
          lessionPic: require("@/assets/img/3.jpg"),
          lessionTitle: "黑巧克力淋面 巧克力半淋面",
          lessionTime: "时长2小时18分钟",
          user: "北京大幅",
          lessionNum: "285人参与",
          lessionPrice: "￥35"
        },
        {
          id: 4,
          lessionPic: require("@/assets/img/2.jpg"),
          lessionTitle: "芒果西米露 一款网红品",
          lessionTime: "时长2小时18分钟",
          user: "北京大幅",
          lessionNum: "285人参与",
          lessionPrice: "￥35"
        },
        {
          id: 5,
          lessionPic: require("@/assets/img/3.jpg"),
          lessionTitle: "大师傅的师傅发得分大的违法万千瓦",
          lessionTime: "时长2小时18分钟",
          user: "北京大幅",
          lessionNum: "285人参与",
          lessionPrice: "￥35"
        },
        {
          id: 6,
          lessionPic: require("@/assets/img/4.jpg"),
          lessionTitle: "大师傅的师傅发得分大的违法万千瓦",
          lessionTime: "时长2小时18分钟",
          user: "北京大幅",
          lessionNum: "285人参与",
          lessionPrice: "￥35"
        },
        {
          id: 7,
          lessionPic: require("@/assets/img/5.jpg"),
          lessionTitle: "大师傅的师傅发得分大的违法万千瓦",
          lessionTime: "时长2小时18分钟",
          user: "北京大幅",
          lessionNum: "285人参与",
          lessionPrice: "￥35"
        }
      ]
    };
  }
};
// created() {
//     axios.get('http://39.96.76.3:8082/r_new', {
//                 params: {

//                 },
//             }).then(response =>{
//                 console.log(response.data)
//                 this.goodsInko = response.data
//             }).catch(function (error) {
//                 alert(error);
//             });
// },
// }
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
.lession {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  .section {
    width: 100%;
    //    flex: 1;
    font-size: 20px;
    overflow: auto;
    margin-top: 1rem;
    .course {
      width: 100%;
      display: flex;
      margin-bottom: 0.2rem;
      img {
        margin-left: 0.1rem;
        width: 1.4rem;
        height: 1.2rem;
        border-radius: 0.1rem;
      }
      .describe {
        margin-left: 0.1rem;
        p {
          width: 1.8rem;
        }
        p:nth-child(1) {
          font-size: 20px;
          line-height: 0.2rem;
          color: #000;
        }
        p:nth-child(2) {
          font-size: 14px;
          color: #999;
          line-height: 0.3rem;
        }
        p:nth-child(3) {
          font-size: 14px;
          color: #333;
        }
        p:nth-child(4) {
          font-size: 12px;
          color: #333;
          line-height: 0.3rem;
        }
      }
      span {
        font-size: 12px;
        color: red;
        margin-top: 0.95rem;
        margin-left: -0.2rem;
      }
    }
  }
}
</style>