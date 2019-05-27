import Vue from 'vue'
import Router from 'vue-router'
// import Kitchen from '@/views/Kitchen.vue'
// import Collection from '@/views/Collection.vue'
import Lession from '@/views/Lession.vue'
import Market from '@/views/Market.vue'
import Me from '@/views/Me.vue'
import special from '@/components/Lession/special.vue'
import Classification from '@/components/Lession/Classification.vue'
// import Course from '@/components/collections/Course.vue'
// import history from '@/components/collections/history.vue'
// import Themenu from '@/components/collections/Themenu.vue'
import detail from '@/components/collections/detail.vue'
import myFavorite from '@/components/collections/myFavorite.vue'
import Page from '@/components/Market/page.vue'
import Cart from "@/components/Market/cart.vue"
import Search from "@/components/Market/search.vue"
import Type from "@/components/Market/Type.vue"
import kitchen from './kitchen'
import Collection from './Collection'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...kitchen,
    ...Collection,
    ...[
        {
        path:"/market",
        name:"market",
        component: Market
        },
        {
        path:"/page",
        name:"page",
        component:Page
        },
        {
          path:"/cart",
          name:"cart",
          component:Cart
          
        },
        {
          path:"/search",
          name:"search",
          component:Search
        },
        {
          path:"/type",
          name:"type",
          component:Type
        },
        {
        path:"/lession",
        name:"lession",
        component: Lession,
        },
        {
        path:'/special',
        name:'special',
        component:special
        },
        {
        path:'/detail',
        name:'detail',
        component:detail
        },
        // {
        // path:"/Collection",
        // name:"Collection",
        // component: Collection,
        // children: [
        //     { 
        //     path: '/Course', 
        //     name:"Course",
        //     component: Course 
        //     }, 
        //     { 
        //     path: '/history', 
        //     name:"history",
        //     component: history 
        //     },
        //     { 
        //     path: '/Themenu', 
        //     name:'Themenu',
        //     component: Themenu 
        //     },  
        // ]
        // },
        { 
        path: '/myFavorite', 
        name:'myFavorite',
        component: myFavorite 
        },
        {
        path:"/Classification",
        name:"Classification",
        component: Classification
        },
        {
        path:"/me",
        name:"me",
        component: Me
        }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    // }
    ]
  ]
})
