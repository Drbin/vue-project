import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/template/front/Index'
import IndexBase from '@/template/front/index/Index'
import Back from '@/template/back/Index'
import Information from '@/template/front/information/index'
import Info from '@/template/front/information/info'
import Appraise from '@/template/front/information/appraise'

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
            meta:{
                requireAuth: true
            },
            children:[
                {
                    path:'/',
                    name:'IndexBase',
                    component:IndexBase,
                    meta:{
                        requireAuth: true
                    },
                },
                {
                    path:'/Person/',
                    name:'Person',
                    component:Person,
                    meta:{
                        requireAuth: true
                    },
                    children:[
                        {
                            path:'/Person/',
                            name:'',
                            component:PerIndex,
                            meta:{
                                requireAuth: true
                            },

                        },
                        {
                            path:'/Person/add',
                            name:'add',
                            component:PerAdd,
                            meta:{
                                requireAuth: true
                            },

                        }
                    ]

                },

                {
                    path:'/tickets',
                    name:'Tickets',
                    component:Tickets,
                    meta:{
                        requireAuth: true
                    },

                },
                {
                    path:'/information',
                    name:'Information',
                    component:Information,
                    meta:{
                        requireAuth: true
                    },
                    children:[
                        {
                            path:'/information/',
                            name:'Appraise',
                            component:Appraise,
                            meta:{
                                requireAuth: true
                            },
                        },
                        {
                            path:'/information/info',
                            name:'Info',
                            component:Info,
                            meta:{
                                requireAuth: true
                            },
                        },
                    ]

                },{
                    path:'/vote',
                    name:'Vote',
                    component:Vote,
                    meta:{
                        requireAuth: true
                    },

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