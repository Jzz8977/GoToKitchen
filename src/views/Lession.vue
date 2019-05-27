<template>
    <div class="lession">
    <header>
        <input type="text" placeholder="想学点什么？">
        <span class="icon iconfont">&#xe537;</span>
    </header>
    <section>
      
    <div class="nav">
        <ul>
            <li>
                <img src="../assets/img/hp.png" @click="fn"> 
                <p>烘焙入门</p>
            </li>
            <li>
                <img src="../assets/img/td.png">
                <p>甜点</p>
            </li>
            <li>
                <img src="../assets/img/ms.png">
                <p>面食</p>
            </li>
            <li>
                <img src="../assets/img/jcc.png">
                <p>家常菜</p>
            </li>
            <li>
                <img src="../assets/img/zsdx.png">
                <p>中式点心</p>
            </li>
            <li>
                <img src="../assets/img/mb.png">
                <p>面包</p>
            </li>
            <li>
                <img src="../assets/img/dg.png">
                <p>蛋糕</p>
            </li>
            <li>
                <img src="../assets/img/mfzk.png">
                <p>免费赠课</p>
            </li>
            <li>
                <img src="../assets/img/rxb.png">
                <p>热销榜</p>
            </li>
            <li>
                <img src="../assets/img/jkjz.png">
                <p>健康减脂</p>
            </li>
        </ul>
    </div>
     
    <div class="special-offer">
        <p>本日特价抢</p>
        <span class="one_sp">14:50:20</span>
        <span class="two_sp">后结束</span>
    </div>
    <div class="Mounting" :class="Mounting === true?'isFixed':''" id="Mounting" @scroll="handleScroll">
         <p>本日特价抢</p>
         <p>猜你喜欢</p>
       </div>
    <div class="goods">
      <div class="goods_left" v-for='item in list' @click="fine">
          <img src="../assets/img/xs.png"> 
          <p>{{item.name}}</p>
          <h3>{{item.tittle}}</h3>
          <div>
              <span>{{item.price}}</span>
              <s>{{item.price_down}}</s>
              <span class="_sp">{{item.chang}}</span>
          </div>
      </div>
     
    </div>
    <div class="like">
         <h3>猜你喜欢</h3>
    </div>
    <div class="like_to">
       <div class="like_left" v-for="item in list1">
          <img src="../assets/img/hh.png" alt="">
          <p>{{item.name}}</p>
          <h3>{{item.tittle}}</h3>
          <div>
              <p>{{item.joinNum}}</p>
              <span>{{item.chang}}</span>
          </div>
       </div>
       
    </div>
    </section>
    </div>
</template>

<script>
    export default {
        name:"lession",

        methods:{
           fine(){
               this.$router.push('/special')
           },
           fn(){
                this.$router.push('/Classification')
           },
           handleScroll () {
            // let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            console.log(scrollTop)

            console.log(1)
            // let offsetTop = document.querySelector('#Mounting').offsetTop
            // scrollTop > offsetTop ? this.Mounting = true : this.Mounting = false
           }
        },
        data(){
            return {
                Mounting:true,
                    list:[
                        {
                            url:'assets/img/xs.png',
                            name:'糖浆',
                            tittle:'人气美食浓香黑芝麻软偶  低糖代餐包',
                            price:'9.9',
                            price_down:'19.9',
                            chang:'收藏'
                        },
                        {
                            url:'@/assets/img/xs.png',
                            name:'糖浆',
                            tittle:'人气美食浓香黑芝麻软偶  低糖代餐包',
                            price:'9.9',
                            price_down:'19.9',
                            chang:'收藏'
                        },
                    ],
                    list1:[
                        {
                            url:'assets/img/hh.png',
                            name:'Freezn静',
                            tittle:'春日的三种花式创意青团',
                            joinNum:'2573人参与',
                            chang:'收藏'
                        },
                        {
                            url:'assets/img/hh.png',
                            name:'Freezn静',
                            tittle:'春日的三种花式创意青团',
                            joinNum:'2573人参与',
                            chang:'收藏'
                        }
                    ]
            }
        },
        mounted () {
            
            // this.$axios.post('/url',data=>{
            //     console.log(data)
            // })
        },
        destroyed(){
            window.removeEventListener('scroll', this.handleScroll);
        },
    }
</script>

<style lang="scss" scoped>
.lession{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
    header{
        height: 0.36rem;
        width: 100%;
        text-align: center;
        margin-top:0.1rem;
        input{
            height: 0.36rem;
            width: 3.59rem;
            background: #f1f1f1;
            border-radius: 0.12rem;
            border:none;
            outline: medium;
            text-align: center;
            color: #8d8d8d;
            font-size: 0.155rem;
            padding-left :0rem; 
            // box-shadow: 0 0 0.05rem #8d8d8d;
        }
        span{
            position: relative;
            top:-0.3rem;
            left:-0.55rem;
            color:  #8d8d8d;
        }
    }
    section{
        overflow: auto;
        flex: 1;
        width: 100%;
    .nav{
        height: 1.48rem;
        width: 100%;
       
        ul{
           display: flex;
           width: 100%;
           justify-content: space-between;
           height: 100;
           flex-wrap: wrap;
           text-align: center;
            li{
               width: 0.66rem;
              margin-top: 0.15rem;
            //    height: 0.56rem;
               img{
                   width: 0.27rem;
                   height: 0.27rem;
               }
               p{
                  font-size: 0.15rem;
                   margin-top: 0.075rem;
               }
            }
        }
    }
    
    .special-offer{
        height: 0.6rem;
        
        display: flex;
        // line-height:  0.6rem;
      
        p{
            font-size: 0.21rem;
            font-weight: bold;
            margin-left: 0.16rem;
            line-height:  0.6rem;
        }
        .one_sp{
        
            font-size: 0.14rem;
            height: 0.16rem;
            width: 0.59rem;
            display: block;
           
            margin-left: 1.45rem;
            color: red;
            line-height:  0.6rem;
            
        }
        .two_sp{
            display: block;
            font-size: 0.14rem;
            line-height:  0.6rem;
            height: 0.16rem;
            width: 0.45rem;
            color: red;
        }
    }
    .Mounting{
        .isFixed{
        position:fixed;
        background-color:#Fff;
        top:0;
        z-index:999;
        }

         display: flex;
         height: 0.31rem;
         background: pink;
          display: none;
         p{
             font-size: 0.16rem;
             margin-left: 0.2rem;
            
         }
     }
   .goods{
       height: 3.25rem;
       
       margin-top:0.105rem;
       display: flex;
       .goods_left{
           margin-left: 0.2rem;
           width: 1.625rem;
           img{
           width: 1.625rem;
           height: 2.37rem;
           }
           p{
               font-size:0.175rem;
           }
           h3{
               font-size: 0.16rem;
           }
           div{
               span{
                   color:red;
                   font-size: 0.14rem;
                 
               }
               ._sp{
                    margin-left:0.6rem;
               }
               s{
                    font-size: 0.14rem;
               }
           }
           
       }
       .goods_right{
           margin-left: 0.1rem;
           width: 1.625rem;
           img{
           width: 1.625rem;
           height: 2.37rem;
           }
            p{
               font-size:0.175rem;
           }
           h3{
               font-size: 0.16rem;
           }
           div{
               span{
                   color:red;
                   font-size: 0.14rem;
                   
               }
               s{
                    font-size: 0.14rem;
               }
               ._sps{
                    margin-left:0.6rem;
               }
           }
           
       }
   }
   .like{
       height: 0.6rem;
       h3{
           font-size: 0.2rem;
           margin-left:0.16rem;
           margin-top:0.05rem;
       }
   }
   .like_to{
       height: 3.27rem;
       
       display: flex;
       .like_left{
            height: 3.27rem;
             width: 1.63rem;
             margin-left: 0.2rem;
             img{
                  width: 1.63rem;
                  height: 2.385rem;
             }
             p{
               font-size:0.175rem;
           }
           h3{
               font-size: 0.16rem;
           }
           div{
               display: flex;
               justify-content: space-between;
               span{
               color:red;
               font-size: 0.14rem;
               
               }
               p{
                    color: #959595;
                    font-size: 0.14rem;
                }
           }
           
           
       }
       .like_right{
           height: 3.27rem;
           width: 1.63rem;
           margin-left: 0.1rem;
           img{
                  width: 1.63rem;
                  height: 2.385rem;
             }
             p{
               font-size:0.175rem;
           }
           h3{
               font-size: 0.16rem;
           }
            div{
               display: flex;
               justify-content: space-between;
               span{
               color:red;
               font-size: 0.14rem;
             
                }
                p{
                    color: #959595;
                    font-size: 0.14rem;
                }
           }
           
       }
   }
   }
}
*{
    list-style: none;
}
</style>