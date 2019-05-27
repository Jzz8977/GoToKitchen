<template>
    <div class="collection" >
        <div class="header">
             <!-- <img src="@/assets/collections/head.jpg" alt=""> -->
             
                <input  type="text" placeholder="搜索我的收藏">
             
             
             <a href="#" class="GPY"><i class="iconfont">&#xe624;</i></a>
             <div class="nav">
                <!-- <router-link  v-for="(item,i) in list" :to="item.to" :class="{active:index===i}" :key="i">
                    {{item.text}}</router-link> -->
                <!-- <span>菜单</span>
                 <span>课程</span>
                  <span>浏览历史</span> -->
                <router-link v-for="(item,i) in list" :to='item.to' :key="i"><span :class="index===i?'selected':'select'" @click="index=i">{{item.text}}</span></router-link>
            </div>                  
        </div>
        <router-view></router-view>
        <!-- <router-link v-for="(item,i) in list" :to="item.to">
                <i class="iconfont" v-html="item.iconfont"></i>
                {{item.text}}
        </router-link> -->
        <!-- <router-link to="/"><a :class="{active:index===0}" @click="index=0"><i class="iconfont">&#xe601;</i>下厨房</a></router-link>
        <router-link to="/market"><a :class="{active:index===1}" @click="index=1"><i class="iconfont">&#xe65e;</i>市集</a></router-link>
        <router-link to="/lession"><a :class="{active:index===2}" @click="index=2"><i class="iconfont">&#xe6c2;</i>课堂</a></router-link>
        <router-link to="/collection"><a :class="{active:index===3}" @click="index=3"><i class="iconfont">&#xe51a;</i>收藏</a></router-link>
        <router-link to="/me"><a :class="{active:index===4}" @click="index=4"><i class="iconfont">&#xe606;</i>我</a></router-link>
         -->
    </div>
</template>

<script>
import "@/assets/font/iconfont.css"
    export default {
        data(){
            return {
                index:0,
                list:[
                    {
                        text:"菜单",
                        to:"/Collection",
                     
                    },
                    {
                        
                        text:"课程",
                        to:"/Collection/Course"
                    },
                    {
                        
                        text:"浏览历史",
                        to:"/Collection/history"
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .collection{
    // width: 100%;
    // height: 100%;
    // display: flex;
    // justify-content: space-between;
    // flex-flow: column;
 }
   .header{
      height: 0.9rem;
      width: 100%;
      font-size: 20px;
      margin-bottom: 0.1rem;
      background: #fff;
      position: absolute;
      top: 0;
      padding-top: 0.1rem; 
      z-index: 2;   
       input{

           width: 3rem;
           height: 0.4rem;
           background: #efefed;
           border: none;
           border-radius: 0.06rem;
           font-size: 18px;
           padding-left: 0.3rem; 
           line-height: 0.4rem;  
           margin-left: 0.1rem;
       }
       .GPY{
            i{
                font-size: 22px;
                margin-left: 0.05rem;
            }
       }
    //    .nav{
    //        height: 0.5rem;
    //        line-height: 0.5rem;
    //        margin-left: 0.1rem;

    //      .router-link-active{
    //         color: pink;
    //     }  
    //    }
        .nav{
            // box-sizing: border-box;
            // padding: .08rem 0;
            // display: flex;
            // justify-content: space-between;
            // margin: 0 auto;
            // height: .45rem;
            // width: 1.335rem;
            // background: red;
            
            // font-size: 19px;
            // color: red;
            height: 0.5rem;
            line-height: 0.5rem;
            font-size: 19px;
            width: 2rem;
            
                span{
                    margin-left: 0.13rem;
                    box-sizing: border-box;
                    justify-content: space-between;
                    padding: .08rem 0;
                }
            .select{
                color: #a4a4a4;
                font-weight: 500;
            }
            .selected{
                color: #3b3c36;
                font-weight: 700;
                border-bottom: 2px solid red;
                border-bottom-right-radius: .005rem;
                border-bottom-left-radius: .005rem;
            }
        }
    }
</style>