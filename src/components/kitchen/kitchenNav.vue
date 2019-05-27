<template>
    <div>
        <div class="kitchenNav">
            <router-link v-for="(item,i) in list" :key='i' :to='item.to' :class="index===i?'selected':'select'"><span @click="index=i">{{item.text}}</span></router-link>
            <!-- <router-link to="/kitchen" :class="index===1?'selected':'select'"><span @click="index=1">推荐</span></router-link>
            <router-link to="/kitchen/works" :class="index===2?'selected':'select'"><span @click="index=2">作品</span></router-link>
                  -->
      
        </div>
       
         <router-view/>
   
    </div>
</template>

<script>
    export default {
        
        data(){
            return{
                index :1,
                list:[
                    {
                        text:'关注',
                        to:'/kitchen/attention'
                    },
                    {
                        text:'推荐',
                        to:'/'
                    },
                    {
                        text:'作品',
                        to:'/kitchen/works'
                    }
                ]

            }
        },
        mounted(){
           
        },
        beforeRouteLeave(to,from,next){
            console.log(999999,to)
            next()
        }

    }
</script>

<style lang="scss" scoped>
.kitchenNav{
    box-sizing: border-box;
    padding: .08rem 0;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    height: .45rem;
    width: 1.335rem;
    
    font-size: 16px;
    color: red;
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
</style>