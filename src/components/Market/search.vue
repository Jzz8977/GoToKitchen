<template>
    <div class="search">
        <MarketSearch></MarketSearch>
        <div class="pop-search">
            <h6>流行搜索</h6>
            <ul>
                <li>家常菜</li>
                <li>淡奶油</li>
                <li>早餐</li>
                <li>黄油</li>
                <li>面包</li>
                <li>蛋挞皮</li>
                <li>芝士</li>
                <li>锅</li>
                <li>粽子</li>
            </ul>
        </div>
    </div>
</template>

<script>
import MarketSearch from "@/components/Market/MarketSearch";
    export default {
        name:"search",
        components:{
            MarketSearch
        }
    }
</script>

<style lang="scss" scoped>
    .search{
        width: 100%;
        .pop-search{
            border-top:0.05rem solid #fafaf8;
            width: 100%;
            height: 100%;
            overflow: hidden;
            h6{
                width: 100%;
                text-indent: 0.1rem;
                font-size: 0.14rem;
                font-weight: normal;
                background: #fff;
            }
            ul{
                background: #fff;
                width: 100%;
                overflow: hidden;
                border-bottom: 2px solid #f8f9f4;
                li{
                    box-sizing: border-box;
                    float: left;
                    width: 33%;
                    height: 0.5rem;
                    border-top:2px solid #f8f9f4;
                    border-left:2px solid #f8f9f4;
                    list-style: none;
                    text-align: center;
                    line-height: 0.5rem;
                }
            }
        }
    }
</style>