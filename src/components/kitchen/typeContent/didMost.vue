<template>
    <div>
        <div class="main">
            <div class='box'>
                <img src="@/assets/KitchenImg/1cb91204dac55b2213ab4323d6608f2_03.jpg" alt="">
                <img src="@/assets/KitchenImg/1cb91204dac55b2213ab4323d6608f2_03.jpg" alt="">
                <img src="@/assets/KitchenImg/1cb91204dac55b2213ab4323d6608f2_03.jpg" alt="">
                <img
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'didMost'
    }
</script>

<style lang="scss" scoped>
.main{
    width: 100%;
    overflow: hidden;   
    .box{
        display: flex;
        overflow: auto;
        img{
        height: 1rem;
        }
    }
    
}
</style>