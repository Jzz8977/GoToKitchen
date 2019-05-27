<template>
  <div id="app">
    <div id="section">
      <router-view></router-view>
    </div>
    <div id="bottom" >
         <Bottom v-show="!(path==='/search'||path==='/special'||path==='/cart' || path==='/Classification' || path==='/myFavorite'|| path==='/page'|| path==='/detail'||path==='/menuTypeList'||path==='/typeContent')"></Bottom>
         <CartBar v-show="(path==='/page')"></CartBar>
        <BuyBar v-show="(path==='/cart')"></BuyBar>
    </div>
  </div>
</template>

<script>
import MarketSearch from "@/components/Market/MarketSearch.vue";
import Bottom from "@/components/bottom.vue"
import CartBar from "@/components/cartBar.vue"
import BuyBar from "@/components/BuyBar.vue"
import store from '@/store/index'
export default {
  components:{
    Bottom,
    CartBar,
    BuyBar,
    MarketSearch
  },
  data(){
    return {
      path:''
      // headerShow:true
    }
  },
  mounted(){
      this.path = this.$route.path;
      console.log(this.path,"zeshi ")
  },
  watch:{
        $route(to,from){
            this.path = to.path
        }
    //   $route(to, from) {
    //   if (this.$route.path === "/Classification" || "/special") {
    //     this.headerShow = false;
    //   } else {
    //     this.headerShow = true;
    //   }
    //   if (this.$route.path === "/" || this.$route.path === "/App") {
    //     this.headerShow = true;
    //   }
    }
  }

</script>

<style lang="scss">
#app {
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
    height: 0.6rem;
    width: 100%;
  }
}

</style>
<style>
  *{
    margin:0;
    padding:0;
  }
  html{
    font-size: 26.67vw;
    height: 100%;
  }
  body{
    /* width: 100%; */
    height: 100%;
    
  }
  body{
    font-size: 16px;
  }
  a{
    color:#000;
    text-decoration: none;
  }
</style>



