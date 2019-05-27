<template>
    <div class="history">
        <div class="section">
            <div class="course" v-for="(item,i) in historyList2" :key="i">
                <i style="position: relative;">
                    <input type="checkbox"style="position: absolute; position: absolute; left: 50%; top: 50%;
    transform: translate(-50%, -50%);opacity: 1; background:red;"v-model="item.che"@click="chek(i)">
                </i>
                <img :src="item.goodsPic" alt="">
                <div class="describe"style="position: relative;width: 100%;">
                    <p>{{item.goodsTitle}}</p>
                    <p>{{item.doNum}}</p>
                    <p><span>{{item.userPhoto}}</span>{{item.userName}}</p>
                    <p style="position: absolute;right: .1rem;"@click="del(i)">删除</p>
                </div>
            </div>

        </div>
        <div class="all" style="margin-left: .02rem;display: flex;justify-content: space-between;">
            <p><input type="checkbox"v-model="checkbox"@click="sunche">全部选择</p>
            <!--<p style="margin-right: .2rem;"@click="del">删除</p>-->
        </div>
    </div>
</template>

<script>
import and from './and'
    export default {
        name:"history",
          data() {
            return {
                checkbox:false,
     historyList: [
                {
                id: 1,
                goodsPic:require("@/assets/img/2.jpg"),
                goodsTitle: "芒果西米露",
                doNum: "17人做过",
                userPhoto:3,
                userName:"miki-88"
                },
                {
                id: 2,
                goodsPic: require("@/assets/img/4.jpg"),
                goodsTitle: "香草巴菲冰淇淋蛋糕",
                doNum: "7人做过",
                userPhoto:5,
                userName: "miki-88"
                },
                {
                id: 3,
                goodsPic: require("@/assets/img/1.jpg"),
                goodsTitle: "香菇猪肉酿春笋",
                doNum: "27人做过",
                userPhoto:7,
                userName:"miki-88"
                },
                {
                id: 4,
                goodsPic: require("@/assets/img/3.jpg"),
                goodsTitle: "香菇猪肉酿春笋",
                doNum: "27人做过",
                userPhoto:7,
                userName:"miki-88"
                },
                {
                id: 5,
                goodsPic: require("@/assets/img/5.jpg"),
                goodsTitle: "香菇猪肉酿春笋",
                doNum: "27人做过",
                userPhoto:7,
                userName:"miki-88"
                }
            ],
                historyList2:[],
                num:0,
            };
    },
        created() {
            for (var i = 0;i<this.historyList.length;i++){
                this.historyList[i].che = false;
            }
            this.historyList2 = this.historyList;
        },
        methods:{
            chek(){
                if (event.currentTarget.checked){
                    this.num++;
                    if (this.num == this.historyList2.length){
                        this.checkbox = true;
                    }
                } else {
                    this.num--;
                    this.checkbox = false;
                }
            },
            sunche(){
                if (event.currentTarget.checked){
                    this.num = this.historyList2.length;
                    for (var i = 0;i<this.historyList2.length;i++){
                        this.historyList2[i].che = true;
                    }
                }else {
                    for (var i = 0;i<this.historyList2.length;i++){
                        this.historyList2[i].che = false;
                    }
                    this.num = 0;
                }
            },
            del(i){
                console.log(i)
                this.historyList2.splice(i,1)
            }
        },
        computed:{
        },
        watch:{
          num(New,Old){
              if (New == this.historyList2.length){
                  this.checkbox = true
              } else {
                  this.checkbox = false;
              }
          }
        }
    }
</script>

<style lang="scss" scoped>
img{width: 100%}
 .history{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-flow: column;
    .section{
      width: 100%;
    //    flex: 1;
       font-size: 20px;
       overflow:auto;
       margin-top: 1rem;
       .course{
           width: 100%;
           display: flex;
           margin-bottom: 0.2rem;
           img{margin-left: 0.1rem; width:1.4rem;height: 1.2rem;border-radius: 0.1rem}
            i{
                display: inline-block;
                width: 0.2rem;
                height: 0.2rem;
                // border: 1px solid #d5d5d5;
                // background:purple;
                border-radius: 50%;
                text-align: center;
                margin-top: 0.5rem;
                margin-left: 0.1rem;
                // display: none;
                // &:hover{
                //     background:url('../../assets/img/timg.jpg')
                // }
                // &:hover{
                //     border: 1px solid red;
                // }
            }
           .describe{
               margin-left: 0.1rem;
               p:nth-child(1){font-size: 20px;color: #000;margin-top: 0.18rem;}
               p:nth-child(2){font-size: 14px;color: #333;margin-top: 0.05rem;}
               p:nth-child(3){font-size: 14px;color: #999;margin-top: 0.1rem;}
               p:nth-child(3) span{
                   display: inline-block;
                   width: 0.2rem;
                   height: 0.2rem;
                   background: pink;
                   border-radius: 50%;
                   text-align: center;
                   margin-right: 0.05rem;
                   
                   }
               p:nth-child(4){
                   color: #999;
                   margin-top: -0.2rem;
                   
               }
               }
           }
    }
    .all{
        width: 100%;
        height: 0.4rem;
        background: #fff;
        position: absolute;
        bottom: 0.58rem;
        z-index: 2;
        p{margin-left: 0.1rem; line-height: 0.4rem;color: red;}
        }
 }



</style>
