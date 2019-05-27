import Collection from '@/views/Collection.vue';
import Course from '@/components/collections/Course.vue';
import Themenu from '@/components/collections/Themenu.vue';
import history from '@/components/collections/history.vue';
export default[
    {
        alias: '/Collection',
        path:'/Collection',
        name: 'Collection',
        component: Collection,
        children:[
            {
                path:'/',
                alias:'Themenu',
                component:Themenu,
               },
               {
                 path:'history',
                 component:history,
               },{
                 path:'Course',
                 component:Course
               }
        ]
    },
]