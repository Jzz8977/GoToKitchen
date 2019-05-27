<template>
    <div class="box">
        <header><span class="icon iconfont" @click="go">&#xe60f;</span><p>课堂</p></header>
        <section>
            <div class='Class_type'>
            <ul>
                <li v-for="item in Typelist"><span>{{item.type}}</span></li>
            </ul>
            </div>
            <div class="Class_to">
                <div class="Class_left" v-for='item in list'>
                    <img :src="item.url" alt="">
                    <p>{{item.name}}</p>
                    <h3>{{item.tittle}}</h3>
                    <div class="down"> 
                        <p>{{item.joinNum}}</p>
                    <span>{{item.chang}}</span>
                    </div>
                   
                </div>
            </div>
        </section>
        <footer></footer>
    </div>
</template>

<script>

export default {
    name:'Classification',
    data(){
        return {
            Typelist:[
                {
                    type:'全部'
                },
                {
                    type:'好做甜点'
                },
                {
                    type:'蛋糕卷'
                },
                {
                    type:'曲奇'
                },
                {
                    type:'其他饼干'
                },
                {
                    type:'糖与酱'
                },
                
            ],
            list:[
                {
                    url:require('@/assets/img/hh.png'),
                    name:'大宫家烘焙公社',
                    tittle:'3D立体白雪公主造型巧克力翻糖装饰',
                    joinNum:'2573人参与',
                    chang:'收藏'
                },
                {
                     url:require('@/assets/img/hh.png'),
                    name:'大宫家烘焙公社',
                    tittle:'3D立体白雪公主造型巧克力翻糖装饰',
                    joinNum:'2573人参与',
                    chang:'收藏'
                },
                {
                     url:require('@/assets/img/hh.png'),
                    name:'大宫家烘焙公社',
                    tittle:'3D立体白雪公主造型巧克力翻糖装饰',
                    joinNum:'2573人参与',
                    chang:'收藏'
                },
                {
                     url:require('@/assets/img/hh.png'),
                    name:'大宫家烘焙公社',
                    tittle:'3D立体白雪公主造型巧克力翻糖装饰',
                    joinNum:'2573人参与',
                    chang:'收藏'
                },
                {
                     url:require('@/assets/img/hh.png'),
                    name:'大宫家烘焙公社',
                    tittle:'3D立体白雪公主造型巧克力翻糖装饰',
                    joinNum:'2573人参与',
                    chang:'收藏'
                },
                {
                     url:require('@/assets/img/hh.png'),
                    name:'大宫家烘焙公社',
                    tittle:'3D立体白雪公主造型巧克力翻糖装饰',
                    joinNum:'2573人参与',
                    chang:'收藏'
                },
                {
                    url:require('@/assets/img/hh.png'),
                    name:'大宫家烘焙公社',
                    tittle:'3D立体白雪公主造型巧克力翻糖装饰',
                    joinNum:'2573人参与',
                    chang:'收藏'
                },
                {
                    url:require('@/assets/img/hh.png'),
                    name:'大宫家烘焙公社',
                    tittle:'3D立体白雪公主造型巧克力翻糖装饰',
                    joinNum:'2573人参与',
                    chang:'收藏'
                },
                {
                     url:require('@/assets/img/hh.png'),
                    name:'大宫家烘焙公社',
                    tittle:'3D立体白雪公主造型巧克力翻糖装饰',
                    joinNum:'2573人参与',
                    chang:'收藏'
                },
                {
                     url:require('@/assets/img/hh.png'),
                    name:'大宫家烘焙公社',
                    tittle:'3D立体白雪公主造型巧克力翻糖装饰',
                    joinNum:'2573人参与',
                    chang:'收藏'
                }
            ]
        }
    },
    methods:{
        go(){
            this.$router.push('/lession')
        }
    }
}
</script>

<style lang="scss" scoped>
.box{
     display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
header{
    height: 0.4rem;
    width: 100%;
    text-align: center;
    span{
        position: relative;
        top:18px;
        left:-167px;
    }
    p{
        
        font-size:0.16rem;
        color:#33342f
    }
}
section{
    width: 100%;
    overflow: auto;
    flex: 1;
    height: 100%;
    .Class_type{
        height:0.4rem;
        width:3.75rem;
        overflow-x: auto;
        position: fixed;
        left:0;
       background: white;
        ul{
        display:flex;
        line-height:0.4rem;
         overflow-x:auto;
         width: 5rem;
        li{
            font-size: 0.13rem;
            width:2rem;
            text-align:center;
            list-style:none;
            display:inline-block;
            
        }
        li span:hover{ 
            border-bottom: 2px solid #ff694c;
            color: #ff694c;
           padding-bottom:0.05rem;
        }
        }
    }
    .Class_to{
        height: 3.24rem;
        margin-top:0.08rem;
        display: flex;
        flex-direction:row;
        flex-wrap: wrap;
        .Class_left{
            width: 1.625rem;
            height: 3.24rem;
            margin-left: 0.16rem;
            margin-top:0.1rem;
            img{
                  width: 1.63rem;
                  height: 2.385rem;
             }
        //      p{
        //        font-size:0.175rem;
        //    }
           h3{
               font-size: 0.16rem;
           }
           div{
               flex-direction: row;
               justify-content: space-between;
               display: flex;
               span{
               display: block;
               font-size: 0.14rem;
               color:red;
                background: #f6fffd;
               }
               p{
                    color: #959595;
                    font-size: 0.14rem;
                }
           }
           
        }
        .Class_right{
            width: 1.625rem;
            height: 3.24rem;
            margin-right: 0.175rem;
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
               flex-direction: row;
               justify-content: space-between;
                display: flex;
               span{
               color:red;
               font-size: 0.14rem;
              background: #f6fffd;
              display: block;
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
</style>
 