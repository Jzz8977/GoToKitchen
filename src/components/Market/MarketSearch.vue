<template>
  <div class="search">
    <i class="iconfont" v-if="isChange" @click="back">&#xe65b;</i>
    <div class="search-inp">
      <b class="iconfont">&#xe537;</b>
      <input type="text" ref="search" placeholder="快锅" value>
    </div>
    <i class="iconfont" v-if="!isChange" @click="$router.push('/cart')">&#xe6bb;</i>
    <span v-if="isChange" @click="search">搜索</span>
  </div>
</template>
<script>
import "@/assets/market/MarketFont/iconfont.css";
import bus from "@/bus/index.js";
export default {
  name: "market-search",
  data() {
    return {
      isChange : false
    };
  },
  // test
  methods:{
      search(){
        this.isChange=false;
          // this.$axios.get("/search",{
          //     key:this.$refs["search"].value
          // }).then(data=>{

          // })
      },
      back(){
        this.isChange = false;
        this.$router.push('/market');
      }
  },
  mounted() {
    // console.log(this.$refs["search"].value)
    // console.log(bus)
    console.log(this.isChange)
  },
  beforeRouteLeave(to, from, next) {
    this.isChange = false;
    next();
  },
  beforeMount() {
    console.log(this.$route,11111)
    if(this.$route.name === 'search'){
       this.isChange = true;
    }
   
  }
};
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  height: 0.6rem;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-sizing: border-box;
  padding: 0.1rem 0;
  padding-left: 0.1rem;
  .search-inp {
    // background: #f2f3ee;
    width: 90%;
    height: 0.4rem;
    position: relative;
    box-sizing: border-box;
    padding: 0.05rem;

    border-radius: 10px;
    b {
      display: inline-block;
      font-size: 30px;
      position: absolute;
      font-weight: normal;
      top: 0.1rem;
      // left: 0.05rem;
    }
    input {
      height: 0.4rem;
      width: 100%;
      border: 0;
      background: #f2f3ee;
      font-size: 20px;
      text-indent: 0.35rem;
      border-radius: 10px;
    }
  }
  i {
    display: inline-block;
    width: 0.6rem;
    font-size: 30px;
    text-align: center;
    line-height: 0.5rem;
  }
  span{
    display: inline-block;
    width: 0.75rem;
    line-height: 0.5rem;
    font-size: 0.2rem;
    // align-self: center;
    text-align: center;
    color: #f56a4d;
  }
}
</style>