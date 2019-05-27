<template>
    <div class="search">
            <b class="iconfont">&#xe60a;</b>
            <div class="input-box">
                <i class="iconfont">&#xe537;</i>
                <input type="text" placeholder="搜索菜谱、食材">
                <i class="iconfont">&#xe619;</i>
            </div>
            
            <i class="iconfont">&#xe624;</i>
    </div>
</template>

<script>
import '@/assets/font/iconfont.css'
    export default {
        name:'kitchenSearch'
    }
</script>

<style lang="scss" scoped>
.search{
    box-sizing: border-box;
    padding: 0 .175rem;
    height: .485rem;
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .iconfont{
        font-size: 23px 
    }
    .input-box{
        display: flex;
        box-sizing: border-box;
        padding: .08rem .095rem;
        width: 2.5rem;
        height: .34rem;
        border: 0;
        border-radius: .05rem .05rem .05rem .05rem ;
        background: #f1f2ed;
        .iconfont{
            font-size: 19px ;
            color: #959691;
        }
        input{
            border:0;
            width:2.3rem;
            background: #f1f2ed;
        }
    }
}
</style>