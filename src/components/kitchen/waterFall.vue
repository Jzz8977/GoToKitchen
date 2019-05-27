<template>
    <div class="water-fall">
        <div class="content"  v-for="(item,index) in waterFallList " :key="index"  :style="{left:item.left+'rem',top:item.top+'rem',marginBottom:0.16+'rem'}" ref="col" >
            <img :style="{height:item.height+'rem'}" src="@/assets/KitchenImg/e5c67e25be998fa5a15e7a4322bfc2c_06.jpg" alt="菜谱" >
            <p>{{item.title}}</p>
            <div class="content-foot">
                <span class="foot-content">
                    <img class="user" src="@/assets/KitchenImg/uersPhone_03.jpg" alt=""> 
                   &nbsp; <span>{{item.userName}}</span> 
                </span>
                 <i class="iconfont">&#xe51a;{{item.collectionNm}}</i>
            </div>
            
        </div>
       
     
    </div>
</template>

<script>
    const gap = 0.175;
    let leftH = 0;
    let rightH = 0;
    export default {
        name:'waterFall',
        data(){
            return{
                waterFallList:[],
                waterFallW:1.63,
                screenWidth: document.body.clientWidth,
                gap:0.175
            }
        },
        created(){
            
            this.waterFallList=this.$store.state.Kitchen.waterFallList;
        //    console.log(this.waterFallList)
        },
        mounted(){
            leftH=0;
            rightH=0;
            const nodeList = this.$refs.col;
            this.waterFall(nodeList)
            this.$refs.col[0].querySelector('.content-foot').remove()
            
        },
        methods:{
            waterFall(nodeList){
                    
                for(let i=0;i<nodeList.length;i++){
                    let top;
                    let left;
                    let domHeight=nodeList[i].clientHeight;
                    domHeight/=100
                    if(leftH>rightH){
                        left=this.waterFallW+2*(this.gap);
                        top=rightH+this.gap;
                        rightH+=domHeight;
                    }else{
                        left=gap;
                        top=leftH+this.gap;
                        leftH+=domHeight
                    }
                    this.waterFallList[i].top=top;
                    this.waterFallList[i].left=left;

                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.water-fall{
    height: 100%;
    width: 100%;
    position: relative;
    .content{
        width: 1.6135rem;
        position: absolute;
        margin-bottom: 0.1rem
        p{
            font-weight: bolder;
            font-size: .1425rem;
        }
        img{
            width: 100%;
        }
        .content-foot{
            font-size: .1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: .09rem;
            margin-bottom: .0485rem;
            .foot-content{
                line-height: 0.167rem;
               
               display: flex;
               align-items: center;
            }
            .user{
                height: .167rem;
                width: .167rem;
            }
            .iconfont{
                 font-size: .1rem;
            }
        }
       
    }
}
</style>