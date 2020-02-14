import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/template/front/Index'
import IndexBase from '@/template/index/Index'
import Back from '@/template/back/Index'
import Information from '@/template/information/Index'
import Person from '@/template/person/Index'
import Vote from '@/template/vote/Index'
import Tickets from '@/template/tickets/Index'
import Appraise from '@/template/information/appraise'
import PerIndex from '@/template/person/Temp'
import PerAdd from '@/template/person/Add'


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
            ]
        },
        {
            path:'/Back',
            name:'Back',
            component:Back
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

        }
    ]
})
