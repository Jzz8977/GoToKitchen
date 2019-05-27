<template>
    <div class="menu-type">
        <span>为你推荐</span>
        <span @click="$router.push('/menuTypeList')">菜谱分类</span>
    </div>
</template>

<script>
    export default {
        name:'menuType',
        methods:{
            
        }
    }
</script>

<style lang="scss" scoped>
.menu-type{
    height: .715rem;
    width: 100%;
    box-sizing: border-box;
    padding:0 .175rem ;
    display: flex;
    justify-content: space-between;
    padding-top: .4rem;
    span:first-child{
        color: #363731;
        font-size: .195rem;
        font-weight: bolder;
    }
    span:last-child{
        font-size: .1425rem;
        color: #a2a2a2;
        transform: translateY(4px)
    }
}
</style>