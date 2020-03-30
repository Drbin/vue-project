import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/template/front/Index'
import IndexBase from '@/template/front/index/Index'
import Back from '@/template/back/Index'
import Information from '@/template/front/information/index'
import Info from '@/template/front/information/info'
import Appraise from '@/template/front/information/appraise'
import Audit from '@/template/back/config/audit'
import Page from '@/template/back/config/page'
import Role from '@/template/back/config/role'
import BackIndex from '@/template/back/index/index'

import Person from '@/template/front/person/Index'
import Vote from '@/template/front/vote/Index'
import Tickets from '@/template/front/tickets/Index'
import PerIndex from '@/template/front/person/Temp'
import PerAdd from '@/template/front/person/Add'
import NotFound from '@/template/other/404'
import Login from '@/template/other/Login'


Vue.use(Router)



const router = new Router({
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
                            component:PerIndex,

                        },
                        {
                            path:'/Person/add',
                            name:'add',
                            component:PerAdd,


                        }
                    ]

                },

                {
                    path:'/tickets',
                    name:'Tickets',
                    component:Tickets,
                },
                {
                    path:'/information',
                    name:'Information',
                    component:Information,

                    children:[
                        {
                            path:'/information/',
                            name:'Appraise',
                            component:Appraise,
                        },
                        {
                            path:'/information/info',
                            name:'Info',
                            component:Info,

                        },
                    ]

                },{
                    path:'/vote',
                    name:'Vote',
                    component:Vote,


                },
            ]
        },
        {
            path:'/Back',
            name:'Back',
            component:Back,
            meta:{
                requireAuth: true
            },
            children:[
                {
                    path: "/Back/",
                    name: "BackIndex",
                    component: BackIndex
                },
                {
                    path: "/Back/Audit",
                    name: "Audit",
                    component: Audit
                },
                {
                    path: "/Back/Page",
                    name: "Page",
                    component: Page
                },
                {
                    path: "/Back/Role",
                    name: "Role",
                    component: Role
                },
            ]
        },
        {
            path: "/Login",
            name: "Login",
            component: Login
        },
        {
            path: "/404",
            name: "NotFound",
            component: NotFound
        },
        {
            path: "*",
            redirect: "/404"
        }

    ]
})
export default router
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (window.sessionStorage.getItem("token") === 'true') { // 判断本地是否存在token
            next()
        } else {
            next({
                path: '/login'
            })
        }
    } else {
        next()
    }
})