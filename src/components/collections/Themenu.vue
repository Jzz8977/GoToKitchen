<template>
    <div class="lession"  @click="go">
        <div class="map">
            <img src="@/assets/img/tu1.jpg" alt="" class="ctt">
        </div>
        <div class="wen">
            <div class="wens">
                <p>我的收藏</p>
                <span><em>0 </em>道菜谱</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:"themenu",
        methods:{
            go(){
                this.$router.push('/myFavorite')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .lession{
        width: 100%;
        // background: plum;
        
            .map{
                display: flex;
                width: 100%;
                height: 100%;
                justify-content: space-around;
                margin-top: 1rem;
                    .ctt{
                        display: flex;
                        width: 3.5rem;
                        height: 1.91rem;
                        border-radius:  0.06rem;
                    }
                    img{
                        width: 100%;
                        height: 100%;
                    }
            }
            .wen{
                justify-content: space-around;
                display: flex;
                width: 100%;
                height: 0.755rem;
                // background: firebrick;
                    .wens{
                        display:flex;
                        width: 3.5rem;
                        height: 0.755rem;
                        // background: darkorange;
                        justify-content: center;
                        flex-direction:column;
                        // align-items: center;
                            p{
                                font-size: 22px;
                                line-height: 0.4rem;
                            }
                            span{
                                font-size: 16px;
                                color: #9a9a95;
                            }
                    }
            }
    }
</style>