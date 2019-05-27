<template>
  <div class="add">
    <div class="hide">
      <span class="icon iconfont" @click="$router.go(-1);">&#xe60f;</span>
      <div class="Navigation">
        <em class="icon iconfont">&#xe628;</em>
        <span class="icon iconfont">&#xe6da;</span>
        <div>
          <p>...</p>
        </div>
        <!-- <mt-actionsheet  &#xe60b;

                :actions="data"
                v-model="sheetVisible">
                <img src="@/assets/img/td.png">
        </mt-actionsheet>-->
        <b class="icon iconfont">&#xe626;</b>
      </div>
    </div>
    <div class="Ending">
      <div class="car">
        <div class="car-a">
          <h2>我的收藏</h2>
        </div>
      </div>
      <div class="user">
        <div class="user-a">
          <p>
            <span>1</span>手机用户miki-88
          </p>
        </div>
      </div>
      <div class="course" v-for="(item,i) in historyList" :key="i">
        <img :src="item.lessionPic" alt="图片" @click="$router.push('/special')">
        <div class="describe" @click="$router.push('/special')">
          <p>{{item.goodsTitle}}</p>
          <p>{{item.doNum}}</p>
          <p>
            <span>{{item.userPhoto}}</span>
            {{item.userName}}
          </p>
        </div>
        <em class="icon iconfont">&#xe60b;</em>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/LessionFont/iconfont.css";

import Vue from "vue";

import { Actionsheet } from "mint-ui";

Vue.component(Actionsheet.name, Actionsheet);
export default {
  name: "myfavorite",
  data() {
    return {
      //  data: [{
      //     name: '微信好友',
      //     method : this.getCamera	// 调用methods中的函数
      // }, {
      //     name: '朋友圈',
      //     method : this.getLibrary	// 调用methods中的函数
      // }],
      // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
      // sheetVisible: false,
      historyList: [
        {
          id: 1,
          lessionPic: require("@/assets/img/5.jpg"),
          goodsTitle: "健康快手美味健康冻酸奶",
          doNum: "17人做过",
          userPhoto: 3,
          userName: "miki-88"
        },
        {
          id: 2,
          lessionPic: require("@/assets/img/4.jpg"),
          goodsTitle: "爱上 香草巴菲冰淇淋蛋糕",
          doNum: "7人做过",
          userPhoto: 3,
          userName: "miki-2388"
        },
        {
          id: 3,
          lessionPic: require("@/assets/img/3.jpg"),
          goodsTitle: "黑巧克力淋面 巧克力半淋面",
          doNum: "27人做过",
          userPhoto: 3,
          userName: "miki-868"
        },
        {
          id: 4,
          lessionPic: require("@/assets/img/2.jpg"),
          goodsTitle: "芒果西米露 一款网红品",
          doNum: "127人做过",
          userPhoto: 3,
          userName: "miki-86128"
        },
        {
          id: 5,
          lessionPic: require("@/assets/img/3.jpg"),
          goodsTitle: "黑巧克力淋面 巧克力半淋面",
          doNum: "27人做过",
          userPhoto: 3,
          userName: "miki-868"
        },
        {
          id: 6,
          lessionPic: require("@/assets/img/5.jpg"),
          goodsTitle: "健康快手美味健康冻酸奶",
          doNum: "17人做过",
          userPhoto: 3,
          userName: "miki-88"
        }
      ]
    };
  },

  methods: {
    // toHode(){
    //     this.$router.go(-1);
    // },
    // actionSheet: function(){
    //     // 打开action sheet
    //     this.sheetVisible = true;
    // },
    // getCamera: function(){
    //     console.log("打开照相机")
    // },
    // getLibrary: function(){
    //     console.log("打开相册")
    // },
    // sheetVisible(){
    // }
  }
};
</script>
<style lang="scss" scoped>
.add {
  .hide {
    width: 100%;
    height: 0.5rem;
    display: flex;
    position: absolute;
    background: #fff;
    span {
      font-size: 30px;
      height: 0.4rem;
      width: 0.1rem;
      line-height: 0.5rem;
    }
    .Navigation {
      width: 3.3rem;
      height: 0.6rem;
      margin: 0 auto;
      display: flex;
      em {
        font-size: 30px;
        line-height: 0.5rem;
        margin-left: 0.4rem;
      }
      span {
        font-size: 30px;
        line-height: 0.5rem;
        margin-left: 0.32rem;
      }
      p {
        display: flex;
        font-size: 40px;
        line-height: 0.5rem;
        margin-left: 0.42rem;
        margin-top: -0.13rem;
      }
      b {
        display: flex;
        font-size: 22px;
        line-height: 0.5rem;
        margin-left: 1.3rem;
      }
    }
  }
  .Ending {
    padding-top: 0.5rem;
    .car {
      width: 100%;
      height: 0.515rem;
      display: flex;
      .car-a {
        width: 3.5rem;
        height: 0.515rem;
        margin: 0 auto;
        h2 {
          font-size: 30px;
          margin-top: 0.13rem;
        }
      }
    }
    .user {
      display: flex;
      width: 100%;
      height: 0.905rem;
      .user-a {
        width: 3.5rem;
        height: 0.905rem;
        margin: 0 auto;
        p {
          font-size: 17px;
          color: #999;
          margin-top: 0.13rem;
          span {
            display: inline-block;
            width: 0.35rem;
            height: 0.35rem;
            border-radius: 50%;
            text-align: center;
            line-height: 0.37rem;
            margin-right: 0.1rem;
            margin-top: 0.15rem;
            background: pink;
          }
        }
      }
    }
    .course {
      width: 100%;
      display: flex;
      margin-bottom: 0.2rem;
      img {
        margin-left: 0.1rem;
        width: 1.6rem;
        height: 1.2rem;
        border-radius: 0.1rem;
      }
      .describe {
        margin-left: 0.1rem;
        p:nth-child(1) {
          font-size: 20px;
          color: #000;
          margin-top: 0.06rem;
        }
        p:nth-child(2) {
          font-size: 14px;
          color: #333;
          margin-top: 0.07rem;
        }
        p:nth-child(3) {
          font-size: 14px;
          color: #999;
          margin-top: 0.1rem;
        }
        p:nth-child(3) span {
          display: inline-block;
          width: 0.2rem;
          height: 0.2rem;
          border-radius: 50%;
          text-align: center;
          margin-right: 0.05rem;
          background: pink;
        }
      }
      em {
        font-size: 30px;
        margin-top: 0.45rem;
        margin-left: 0.15rem;
      }
    }
  }
}
</style>