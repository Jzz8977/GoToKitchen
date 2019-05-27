<template>
    <div>
        
        <kitchen-banner></kitchen-banner>
        <menuType></menuType>
        <waterFall></waterFall>
    </div>
</template>

<script>
    import kitchenBanner from './kitchenBanner.vue'
    import menuType from './menuType'
    import waterFall from './waterFall'
    export default {
        components:{
            kitchenBanner,
            menuType,
            waterFall
        }
    }
</script>

<style lang="scss" scoped>

</style>