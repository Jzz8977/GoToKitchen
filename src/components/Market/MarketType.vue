<template>
    <div class="type">
        <router-link v-for="(item,i) in $store.state.Market.goodsTypeList" :to="path=item.goodsTypeHref" :key="i">
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="item.goodsTypeLogo"></use>
            </svg>
            {{item.goodsTypeName}}
        </router-link>
    </div>
</template>

<script>
import "@/assets/market/MarketFont/iconfont.css"
import "@/assets/market/MarketFont/iconfont.js"
    export default {
        name:"marketType",
        data(){
            return {
                list:[]
            }
        },
        beforeMount(){
            console.log(this.list,"马上渲染")
           
        },
        created() {
            this.$store.dispatch("getGoodsTypeList");
            //  this.list = this.$store.state.Market.goodsTypeList.reverse();
        },
    }
</script>

<style lang="scss" scoped>
    .type{
        width: 100%;
        height:2.15rem;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        background: #fff;
        a{
            text-align: center;
            align-self: center;
            width: 25%;
            .icon {
                width: 0.4rem;
                height: 0.4rem;
                // vertical-align: -0.15em;
                // fill: currentColor;
                // overflow: hidden;
                margin-left: .3rem;
                margin-bottom: .1rem;
                font-size:.35rem;
                display: block;
            }
        }
    }
</style>