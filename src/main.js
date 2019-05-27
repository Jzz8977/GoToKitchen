import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' 
import axios from "axios"
import filters from "./filters"
import commonCom from './components'
// import Swiper from 'swiper'
import MintUI from 'mint-ui'


import 'mint-ui/lib/style.css'

// Swiper.use({
//   name: 'pluginName',
//   params: {
//     pluginSwitch: false,
//   },
//   on: {
//     init() {
//       if (!this.params.pluginSwitch) return
//       // console.log('init')
//     },
//     // swiper callback...
//   }
// })

Vue.use(MintUI)
Vue.use(filters);
Vue.use(commonCom);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

axios.interceptors.request.use(config=>{
  config.url = "/ele/" + config.url + "?t=" + Date.now();
  // config.headers = {
  //   "authorization": localStorage.token
  // }
  return config;
})


axios.interceptors.response.use(res=>{
  return res.data;
})
// router.beforeEach(function(to,from,next){
//   console.log(to);
//   console.log(from,'from');

//   // if(to.name==="market"){
//   //   window.addEventListener("scroll", this.handleScroll, true); //监听滚动事件
//   // }
//   if(from.name==="market"){
//   //   window.removeEventListener("scroll", this.handleScroll);
//   }
//   next();
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
