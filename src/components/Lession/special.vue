
<template>
  <div>
    <div class="Myapp">
      <span class="icon iconfont big_big" @click="back">&#xe60f;</span>
      <span class="icon iconfont W_x">&#xe615;</span>
      <span class="icon iconfont P_y">&#xe639;</span>
      <span class="icon iconfont G_d" @click="actionSheet">&#xe6d7;</span>
      <!-- <mt-actionsheet :actions="data" v-model="sheetVisible">
        <img src="@/assets/img/td.png">
      </mt-actionsheet>-->
    </div>
    <section>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <img src="@/assets/img/ss.jpg">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/ss.jpg">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/ss.jpg">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/ss.jpg">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/ss.jpg">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/ss.jpg">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/ss.jpg">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/ss.jpg">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/ss.jpg">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/ss.jpg">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="swiper-h1">
        <h1>三款夏日美味沙拉</h1>
      </div>
      <div class="look">
        <div class="look_left">
          <img src="@/assets/img/1.jpg">
        </div>
        <p>豫果美食学院</p>
        <div class="look_right">关注</div>
      </div>
      <div class="watch">
        <span class="icon iconfont sz">&#xe61d;</span>
        <p class="cookie_time">时长一小时十分钟</p>
      </div>
      <div class="people_num">
        <span class="icon iconfont ren">&#xe622;</span>
        <p class="join_num">289人参与</p>
      </div>
      <div class="lession_video">
        <span class="icon iconfont lession_score">&#xe632;&#xe632;&#xe632;&#xe632;&#xe632;</span>
        <p class="score_num">课程评分不足</p>
      </div>
      <div class="video">
        <div class="try_look">
          <p class="big">课程视频</p>
          <p class="small">试看</p>
        </div>
      </div>
      <div class="lession_appraise">
        <p class="_appraise">课程评价</p>
        <p class="appraise_num">一个评价</p>
      </div>
      <div class="appraiseSum">
        <div class="one">操作专业（1）</div>
        <div class="two">答疑认真（1）</div>
      </div>
      <div class="user" v-for="item in list1">
        <div class="user_Pic">
          <img src="@/assets/img/4.jpg">
        </div>
        <p class="userName">萌哒哒的兔子</p>
        <p class="addtime">{{item.addTime | date}}</p>
      </div>
      <div class="star_num">
        <span class="icon iconfont _num">&#xe612;&#xe612;&#xe612;&#xe612;&#xe612;</span>
        <span class="_sum">10.0分</span>
      </div>
      <div class="zuoye">
        <p class="task">大家的作业</p>
        <p class="task_num">一个作品</p>
      </div>
      <div class="work">
        <div class="big_box">
          <div class="work_left" v-for="item in dask">
            <img class="work_img" :src="item.url">
            <div class="user_l">{{item.user_Pic}}</div>
            <p class="userName_l">{{item.userName}}</p>
          </div>
        </div>
      </div>
      <div class="study">
        <img class="study_img" src="@/assets/img/study.jpg">
        <img class="study1_img" src="@/assets/img/study1.jpg">
      </div>
      <div class="gao"></div>
    </section>
    <footer>
      <span class="icon iconfont A_x">&#xe50a;</span>
      <span class="S_c">收藏</span>
      <div
        class="less"
      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;￥购买课程</div>
    </footer>
  </div>
</template>

<script>
import "@/assets/css/index.css";
import "@/assets/Lession_icon/iconfont.css";
import Swiper from "swiper";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Vue from "vue";
import { Actionsheet } from "mint-ui";
Vue.component(Actionsheet.name, Actionsheet);
export default {
  name: "special",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar"
        }
      },
      list1: [
        {
          addTime: Date.now()
        }
      ],
      dask: [
        {
          url: require("@/assets/img/dask.jpg"),
          user_Pic: require("@/assets/img/1.jpg"),
          userName: "小仙女",
          introduce: "帮老妈补过了一个母亲节"
        },
        {
          url: require("@/assets/img/dask.jpg"),
          user_Pic: require("@/assets/img/dask.jpg"),
          userName: "小仙女",
          introduce: "帮老妈补过了一个母亲节"
        },
        {
          url: require("@/assets/img/dask.jpg"),
          user_Pic: require("@/assets/img/dask.jpg"),
          userName: "小仙女",
          introduce: "帮老妈补过了一个母亲节"
        },
        {
          url: require("@/assets/img/dask.jpg"),
          user_Pic: require("@/assets/img/dask.jpg"),
          userName: "小仙女",
          introduce: "帮老妈补过了一个母亲节"
        }
      ]
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    toHode() {
      this.$router.go(-1);
    },
    actionSheet: function() {
      // 打开action sheet
      this.sheetVisible = true;
    },
    getCamera: function() {
      console.log("打开照相机");
    },
    getLibrary: function() {
      console.log("打开相册");
    },

    sheetVisible() {}
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  // justify-content: space-between;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  // height: 100%;

  .Myapp {
    height: 0.49rem;
    position: fixed;
    width: 100%;
    z-index: 5;
    .big_big {
      position: absolute;
      top: 0;
      left: 0;
      margin-left: 0.1rem;
      margin-top: 0.16rem;
      font-size: 0.25rem;
    }
    .W_x {
      position: absolute;
      top: 0;
      left: 0;
      margin-top: 0.16rem;
      margin-left: 0.7rem;
      font-size: 0.25rem;
    }
    .P_y {
      position: absolute;
      top: 0;
      left: 0;
      margin-top: 0.16rem;
      margin-left: 1.23rem;
      font-size: 0.25rem;
    }
    .G_d {
      position: absolute;
      top: 0;
      left: 0;
      margin-top: 0.16rem;
      margin-left: 1.75rem;
      font-size: 0.25rem;
    }
  }
  section {
    width: 100%;
    height: 100%;
    flex: 1;
    // overflow: auto;
    .swiper {
      z-index: 3;
    }
    .swiper-h1 {
      height: 0.47rem;

      h1 {
        margin-top: 0.2rem;
        font-size: 0.22rem;
        margin-left: 0.21rem;
      }
    }
    .look {
      height: 0.54rem;

      flex-direction: row;
      .look_left {
        height: 0.28rem;
        width: 0.29rem;
        background: green;
        margin-top: 0.25rem;
        margin-left: 0.21rem;
        border-radius: 10px;
        img {
          height: 0.28rem;
          width: 0.29rem;
          border-radius: 10px;
        }
      }
      p {
        line-height: 0.28rem;
        margin-top: 0.25rem;
        //margin-right:1.3rem;
        margin-left: 0.1rem;
      }
      .look_right {
        height: 0.31rem;
        width: 0.65rem;
        margin-left: 1.4rem;
        margin-top: 0.21rem;
        //  margin-right: 0.3rem;
        text-align: center;
        line-height: 0.31rem;
        font-size: 0.14rem;
        border: 1px solid red;
        color: red;
      }
    }
    .watch {
      height: 0.36rem;

      .sz {
        font-size: 0.13rem;
        position: relative;
        top: 0.21rem;
        left: 0.21rem;
      }
      .cookie_time {
        position: relative;
        top: 0;
        left: 0.5rem;
        font-size: 0.13rem;
      }
    }
    .people_num {
      height: 0.36rem;
      .ren {
        font-size: 0.13rem;
        position: relative;
        top: 0.21rem;
        left: 0.21rem;
      }
      .join_num {
        position: relative;
        top: 0;
        left: 0.5rem;
        font-size: 0.13rem;
      }
    }
    .lession_video {
      height: 0.36rem;
    }
    .lession_score {
      font-size: 0.13rem;
      position: relative;
      top: 0.21rem;
      left: 0.21rem;
      color: #cbcbcb;
    }
    .score_num {
      position: relative;
      top: 0;
      left: 1rem;
      font-size: 0.13rem;
      color: #cbcbcb;
      font-size: 0.13rem;
    }
    .video {
      height: 0.63rem;

      .try_look {
        height: 0.44rem;
        border: 1px solid red;
        width: 3.5rem;
        line-height: 0.44rem;
        margin-left: 0.1rem;
        margin-top: 0.08rem;
        flex-direction: row;
        .big {
          color: red;
          font-size: 0.18rem;
          margin-left: 0.1rem;
        }
        .small {
          color: red;
          font-size: 0.15rem;
          margin-left: 2.25rem;
        }
      }
    }
    .lession_appraise {
      height: 0.43rem;

      flex-direction: row;
      ._appraise {
        margin-top: 0.22rem;
        margin-left: 0.1rem;
        font-size: 0.17rem;
        font-weight: bold;
      }
      .appraise_num {
        margin-top: 0.22rem;
        margin-left: 2rem;
        color: red;
        font-size: 0.17rem;
      }
    }
    .appraiseSum {
      height: 0.5rem;
      flex-direction: row;
      margin-top: 0.1rem;
      .one {
        //  padding-bottom: 0.02rem;
        padding-top: 0.05rem;
        width: 1.2rem;
        height: 0.25rem;
        background: #f6f6f6;
        border-radius: 0.08rem;
        text-align: center;
      }
      .two {
        padding-top: 0.05rem;
        width: 1.2rem;
        height: 0.25rem;
        background: #f6f6f6;
        text-align: center;
        border-radius: 0.08rem;
        position: relative;
        right: 1.2rem;
        top: 0;
      }
    }
    .user {
      height: 0.42rem;
      //  background: brown;
      position: relative;
      .user_Pic {
        height: 0.3rem;
        width: 0.31rem;
        background: blue;
        border-radius: 50%;
        margin-left: 0.2rem;
      }
      .userName {
        position: absolute;
        top: 0.05rem;
        left: 0.63rem;
      }
      .addtime {
        position: absolute;
        top: 0.05rem;
        left: 2.7rem;
        color: #cbcbcb;
      }
    }
    .star_num {
      height: 0.77rem;
      //  background: red;
      position: relative;
      ._num {
        margin-left: 0.2rem;
        color: yellow;
      }
      ._sum {
        position: absolute;
        top: 0;
        left: 1.2rem;
      }
    }
    .zuoye {
      height: 0.4rem;
      //  background: #cbcbcb;
      flex-direction: row;
      .task {
        margin-left: 0.21rem;
        font-size: 0.17rem;
        font-weight: bold;
      }
      .task_num {
        margin-right: 0.21rem;
        font-size: 0.17rem;
        color: red;
      }
    }
    .work {
      height: 3.31rem;
      //  background: palegreen;

      overflow-x: auto;
      .big_box {
        height: 3.31rem;
        overflow-x: auto;
        flex-direction: row;
        width: 10rem;
        flex-wrap: nowrap;
        display: flex;

        .work_left {
          height: 3rem;
          //  background: burlywood;
          width: 1.62rem;
          margin-left: 0.1rem;
          border: 1px solid #cbcbcb;
          border-radius: 0.1rem;
          position: relative;

          .work_img {
            height: 1.62rem;
            width: 1.62rem;
          }
          .user_l {
            height: 0.25rem;
            width: 0.25rem;
            border-radius: 50%;
            //  background: fuchsia;
            position: absolute;
            top: 1.75rem;
            left: 0.14rem;
          }
          .userName_l {
            position: absolute;
            top: 1.75rem;
            left: 0.5rem;
          }
        }
        .work_right {
          height: 3rem;
          //  background: fuchsia;
          width: 1.62rem;
          margin-right: 0.13rem;
          border: 1px solid #cbcbcb;
          border-radius: 0.1rem;
          position: relative;
          .work_imgr {
            height: 1.62rem;
            width: 1.62rem;
          }
          .user_r {
            height: 0.25rem;
            width: 0.25rem;
            border-radius: 50%;
            //  background: fuchsia;
            position: absolute;
            top: 1.75rem;
            left: 0.14rem;
          }
          .userName_r {
            position: absolute;
            top: 1.75rem;
            left: 0.5rem;
          }
        }
      }
    }
    .study {
      .study_img {
        width: 3.34rem;
        height: 5.4rem;
        margin-left: 0.205rem;
      }
      .study1_img {
        margin-left: 0.205rem;
        width: 3.34rem;
        height: 1.82rem;
      }
    }
    //  .gao{
    //    height: 2rem;
    //    background: pink;
    //  }
  }
  footer {
    height: 0.5rem;
    background: white;
    width: 100%;
    line-height: 0.5rem;
    position: absolute;
    bottom: 0;
    left: 0;
    .A_x {
      width: 0.2rem;
      height: 0.18rem;
      margin-left: 0.22rem;
      color: red;
    }
    .A_x:hover {
      background: red;
    }
    .S_c {
      font-size: 0.12rem;
      margin-left: 0.11rem;
      color: red;
    }
    .less {
      height: 0.4rem;
      background: red;
      width: 2.57rem;
      float: right;
      margin-top: 0.05rem;
      margin-left: -0.2rem;
      border-radius: 0.04rem;
      line-height: 0.4rem;
    }
  }
}
</style>
