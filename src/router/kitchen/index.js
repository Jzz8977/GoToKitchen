import Kitchen from '@/views/Kitchen.vue';
import Recommend from '@/components/kitchen/recommend.vue';
import Attention from '@/components/kitchen/attention.vue';
import Works from '@/components/kitchen/works.vue';
import MenuTypeList from '@/components/kitchen/menuTypeList'
import TypeContent from '@/components/kitchen/typeContent'
import AutoSort from "@/components/kitchen/typeContent/autoSort"
import DidMost from "@/components/kitchen/typeContent/didMost"
import ScoreTop from "@/components/kitchen/typeContent/scoreTop"
import VideoMenu from "@/components/kitchen/typeContent/videoMenu"
import MenuDetail from '@/components/kitchen/menuDetail'
export default[
    {
        alias: '/',
        path:'/kitchen',
        name: 'kitchen',
        component: Kitchen,
        // redirect:"/kitchen",
        children:[
            {
                path:'/',
                alias:'recommend',
                component:Recommend,
               },
               {
                 path:'attention',
                 component:Attention,
               },{
                 path:'works',
                 component:Works
               }
        ]
    },{
        path:'/menuTypeList',
        name: 'menuTypeList',
        component: MenuTypeList,
    },{
        path:'/typeContent',
        name:'typeContent',
        component: TypeContent,
        children:[
            {
                path:'/',
                alias:'autoSort',
                component:AutoSort,
               },
               {
                 path:'scoreTop',
                 component:ScoreTop,
               },{
                 path:'didMost',
                 component:DidMost
               },{
                path:'videoMenu',
                component:VideoMenu
              }
        ]
    },{
        path:'/menuDetail',
        component:MenuDetail
    }
]