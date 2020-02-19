import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/template/front/Index'
import IndexBase from '@/template/front/index/Index'
import Back from '@/template/back/Index'
import Information from '@/template/front/information/Index'
import Person from '@/template/front/person/Index'
import Vote from '@/template/front/vote/Index'
import Tickets from '@/template/front/tickets/Index'
import Appraise from '@/template/front/information/appraise'
import PerIndex from '@/template/front/person/Temp'
import PerAdd from '@/template/front/person/Add'
import NotFound from '@/template/other/404'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            name:'Index',
            component:Index,
            children:[
                {
                    path:'/',
                    name:'IndexBase',
                    component:IndexBase,
                },
                {
                    path:'/Person/',
                    name:'Person',
                    component:Person,
                    children:[
                        {
                            path:'/Person/',
                            name:'',
                            component:PerIndex

                        },
                        {
                            path:'/Person/add',
                            name:'add',
                            component:PerAdd

                        }
                    ]

                },
                {
                    path:'/Person/',
                    name:'Person',
                    component:Person,
                    children:[
                        {
                            path:'/Person/',
                            name:'',
                            component:PerIndex

                        },
                        {
                            path:'/Person/add',
                            name:'add',
                            component:PerAdd

                        }
                    ]

                },
                {
                    path:'/tickets',
                    name:'Tickets',
                    component:Tickets

                },
                {
                    path:'/information',
                    name:'Information',
                    component:Information,
                    children:[
                        {
                            path:'/information/appraise',
                            name:'Appraise',
                            component:Appraise

                        }
                    ]

                },{
                    path:'/vote',
                    name:'Vote',
                    component:Vote

                },
            ]
        },
        {
            path:'/Back',
            name:'Back',
            component:Back
        },

        {
            path: "/404",
            name: "NotFound",
            component: NotFound
        },{
            path: "*",
            redirect: "/404"
        }

    ]
})
