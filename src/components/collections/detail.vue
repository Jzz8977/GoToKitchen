<template>
    <div id="detail">
        <div id="header"> 
            <button @click="$router.push('/Course')">返回</button>
            课程详情页
        </div>
         <div id="section"> 
           <p>课程详情内容区</p>
        </div>
         <div id="bottom"> 
            <button>免费试听</button>
            <button>购买￥39元</button>
        </div>
        
    </div>
</template>

<script>
export default {
     name:"detail"
}
</script>

<style lang="scss">
#detail {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  // align-items: center;
    align-content: center;

  
  #section{
    // height: 100%;
    flex: 1;
    overflow: auto;
    width: 100%;
    
  }
  #bottom{
    height: 0.8rem;
    width: 100%;
    button{
        background: pink;
        border: none;
    }
  }
}

</style>
