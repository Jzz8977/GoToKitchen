<template>
    <div>
        <div class='content'>
            <img class="food-img" src="@/assets/KitchenImg/chicken.jpg" alt="">
            <div class="food-info">
                <p class="title">【全过程图片】鲜嫩无比口水鸡</p>
                <p>8.4分  1079人做过</p>
                <p>
                    <img class="user" src="@/assets/KitchenImg/uersPhone_03.jpg" alt="">
                    Hey我的你
                </p>
            </div>
        </div>
         <div class='content'>
            <img class="food-img" src="@/assets/KitchenImg/chicken.jpg" alt="">
            <div class="food-info">
                <p class="title">【全过程图片】鲜嫩无比口水鸡</p>
                <p>8.4分  1079人做过</p>
                <p>
                    <img class="user" src="@/assets/KitchenImg/uersPhone_03.jpg" alt="">
                    Hey我的你
                </p>
            </div>
        </div>
         <div class='content'>
            <img class="food-img" src="@/assets/KitchenImg/chicken.jpg" alt="">
            <div class="food-info">
                <p class="title">【全过程图片】鲜嫩无比口水鸡</p>
                <p>8.4分  1079人做过</p>
                <p>
                    <img class="user" src="@/assets/KitchenImg/uersPhone_03.jpg" alt="">
                    Hey我的你
                </p>
            </div>
        </div>
         <div class='content'>
            <img class="food-img" src="@/assets/KitchenImg/chicken.jpg" alt="">
            <div class="food-info">
                <p class="title">【全过程图片】鲜嫩无比口水鸡</p>
                <p>8.4分  1079人做过</p>
                <p>
                    <img class="user" src="@/assets/KitchenImg/uersPhone_03.jpg" alt="">
                    Hey我的你
                </p>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name:'autoSort'
    }
</script>

<style lang="scss" scoped>
.content{
    width: 100%;
    box-sizing: border-box;
    height: 1.382rem;
    padding: 0.1rem 0.175rem;
    display: flex;
    .food-img{
        height: 1.182rem;
        width:  1.485rem;
    }
    .food-info{
        margin-left: 0.2rem;
        .title{
            font-size: 0.15rem;
            font-weight: bold;
            margin-bottom: 0.1rem;
        }
        .user{
            margin-top:0.2rem ;
           height:.175rem ; 
        }
        p:last-child{
            color:#989898;
        }
    }
}
</style>