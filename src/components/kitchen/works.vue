<template>
    <div>
作品
    </div>
</template>

<script>
    export default {
        beforeRouteLeave(to,from,next){
            console.log(666666,to)
            if(to.path==='/kitchen'){
                 next('/kitchen/works')
            }else{
                next(true)
            }
          
        }
    }
</script>

<style lang="scss" scoped>

</style>