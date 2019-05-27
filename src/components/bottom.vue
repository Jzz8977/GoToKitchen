<template>
    <div class="bottom" >
        <router-link v-for="(item,i) in list" :to="item.to" :key='i'>
                <i class="iconfont" v-html="item.iconfont"></i>
                {{item.text}}
        </router-link>
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
import Themenu from "@/components/collections/Themenu"

    export default {
      mounted(){
// console.log(this.$store.state)
      },
        data(){
            return {
                index:0,
                list:[
                    {
                        iconfont:"&#xe601;",
                        text:"下厨房",
                        to:"/kitchen"
                    },
                    {
                        iconfont:"&#xe65e;",
                        text:"市集",
                        to:"/market"
                    },
                    {
                        iconfont:"&#xe6c2;",
                        text:"课堂",
                        to:"/lession"
                    },
                    {
                        iconfont:"&#xe51a;",
                        text:"收藏",
                        to:"/Collection"
                    },
                    {
                        iconfont:"&#xe606;",
                        text:"我",
                        to:"/me"
                    }
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .bottom{
        background: #fff;
        height: 0.6rem;
        display: flex;
        justify-content: space-around;
        text-align: center;
        // align-content: center;
        a{
            // display: block;
            align-self: center;
            // font-style: normal;
            i{
                font-size: 20px;
                display: block;
            }
            font-size: 14px;
            font-family: "微软雅黑"
        }
        .router-link-active{
            color: #f9674e;
        }
        // .active{
        //     color: #f9674e;
        // }
    }
</style>