import Vue from 'vue'
import Vuex from 'vuex'
import Market from "./Market"
import Kitchen from './Kitchen'
import Adv from './Adv'
import config from './common'
Vue.use(Vuex)
const state={
    // isShow:true,
   
}
const mutations={
  
}
export default new Vuex.Store({

 modules:{
   Market,
   Kitchen,
   Adv,
   config
 },
 state,
 

})
