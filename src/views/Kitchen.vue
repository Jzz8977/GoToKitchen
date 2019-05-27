<template>
  <div class="kitchen">
      <div class="search">
        <kitchenSearch></kitchenSearch>
      </div>
      <div class="adv">
        <kitchenNav ref="nav"></kitchenNav>
      </div>
      
  </div>
</template>

<script>
// @ is an alias to /src
import kitchenSearch from '@/components/kitchen/kitchenSearch.vue';
import kitchenNav from '@/components/kitchen/kitchenNav.vue'
import menuType from'@/components/kitchen/menuType.vue'
import waterFall from'@/components/kitchen/waterFall.vue'

export default {
  name: 'kitchen',
  data(){
      return{
          index:1
      }
  },
  components: {
    kitchenSearch,
    kitchenNav,
    menuType,
    waterFall
  },

//   mounted(){
//       console.log(this.$refs.nav.index)
//     this.$refs.nav.index=1
//   }
}
</script>
<style>
*{
   font-family: '微软雅黑';

}
</style>

