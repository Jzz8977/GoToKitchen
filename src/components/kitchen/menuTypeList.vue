<template>
    <div>
        <div class="nav">
            <span @click="$router.push('/kitchen')">&lt</span>
            <span>菜谱分类</span>
            <span></span>
        </div>
        <div class="menu-type">
            <span>热门分类</span>
            <div class="type-list">
                <img src="@/assets/menuType/1.jpg"  @click="$router.push({path:'/typecontent',query:{type:'家常菜'}})" alt="">
                <img src="@/assets/menuType/2.jpg" alt="">
                <img src="@/assets/menuType/3.jpg" alt="">
                <img src="@/assets/menuType/4.jpg" alt="">
                <img src="@/assets/menuType/5.jpg" alt="">
                <img src="@/assets/menuType/6.jpg" alt="">
                <img src="@/assets/menuType/7.jpg" alt="">
                <img src="@/assets/menuType/8.jpg" alt="">
                <img src="@/assets/menuType/9.jpg" alt="">
                <img src="@/assets/menuType/10.jpg" alt="">
                <img src="@/assets/menuType/11.jpg" alt="">
            </div>
        </div>
        <div class="menu-type">
            <span>菜式</span>
            <div class="type-list">
                <img src="@/assets/menuType/11.jpg" alt="">
                <img src="@/assets/menuType/12.jpg" alt="">
                <img src="@/assets/menuType/13.jpg" alt="">
                <img src="@/assets/menuType/14.jpg" alt="">
                <img src="@/assets/menuType/15.jpg" alt="">
                <img src="@/assets/menuType/16.jpg" alt="">
                <img src="@/assets/menuType/17.jpg" alt="">
                <img src="@/assets/menuType/18.jpg" alt="">
                <img src="@/assets/menuType/19.jpg" alt="">
                <img src="@/assets/menuType/20.jpg" alt="">
            </div>
        </div>
        <div class="menu-type">
            <span>场景</span>
            <div class="type-list">
                <img src="@/assets/menuType/21.jpg" alt="">
                <img src="@/assets/menuType/22.jpg" alt="">
                <img src="@/assets/menuType/23.jpg" alt="">
                <img src="@/assets/menuType/24.jpg" alt="">
                <img src="@/assets/menuType/25.jpg" alt="">
                <img src="@/assets/menuType/26.jpg" alt="">
                
            </div>
        </div>
         <div class="menu-type">
            <span>食材辅料</span>
            <div class="type-list">
                <img src="@/assets/menuType/27.jpg" alt="">
                <img src="@/assets/menuType/28.jpg" alt="">
                <img src="@/assets/menuType/29.jpg" alt="">
                <img src="@/assets/menuType/30.jpg" alt="">
                <img src="@/assets/menuType/31.jpg" alt="">
                <img src="@/assets/menuType/32.jpg" alt="">
                <img src="@/assets/menuType/33.jpg" alt="">
                <img src="@/assets/menuType/34.jpg" alt="">
                <img src="@/assets/menuType/35.jpg" alt="">
            </div>
        </div>
        <div class="menu-type">
            <span>趣味分类</span>
            <div class="type-list">
                <img src="@/assets/menuType/41.jpg" alt="">
                <img src="@/assets/menuType/42.jpg" alt="">
                <img src="@/assets/menuType/43.jpg" alt="">
                <img src="@/assets/menuType/44.jpg" alt="">
                <img src="@/assets/menuType/45.jpg" alt="">
                <img src="@/assets/menuType/46.jpg" alt="">
                <img src="@/assets/menuType/47.jpg" alt="">
            </div>
        </div>
        <div class="menu-type">
            <span>文化地标</span>
            <div class="type-list">
                <img src="@/assets/menuType/48.jpg" alt="">
                <img src="@/assets/menuType/49.jpg" alt="">
                <img src="@/assets/menuType/50.jpg" alt="">
                <img src="@/assets/menuType/51.jpg" alt="">
                <img src="@/assets/menuType/52.jpg" alt="">
                <img src="@/assets/menuType/53.jpg" alt="">
              

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'path'
    }
</script>

<style lang="scss" scoped>
*{
   font-family: '黑体'
}
.nav{
    display: flex;
    justify-content: space-between;
    font-weight: bolder;
    box-sizing: border-box;
    width: 100%;
    padding: 0.1rem 0.185rem 0 0.185rem; 
   
    span:first-child{
        font-size: .205rem;
         font-family: '宋体'
    }
    span:nth-child(2){
         color: #b4b5ad;
         font-size: .155rem
    }
}
.menu-type{
    margin-top: .3rem;
    font-weight: bold;  
    width: 100%;
    box-sizing: border-box;
    padding-left: 0.175rem;
     overflow: hidden;
}
.type-list{
    img{
        width: .685rem;
        height:  .685rem;
        float: left;
        margin-right: .2rem;
        margin-top: .135rem;
    }
}
</style>