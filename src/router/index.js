import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/template/front/Index'
import IndexBase from '@/template/front/index/Index'
import Back from '@/template/back/Index'
import Information from '@/template/front/information/index'
import InfoMsg from '@/template/front/information/msg'
import Info from '@/template/front/information/info'
import Appraise from '@/template/front/information/appraise'
import Audit from '@/template/back/config/audit'
import Page from '@/template/back/config/page'
import Role from '@/template/back/config/role'
import BackIndex from '@/template/back/index/index'
import Consumer from '@/template/back/config/consumer'
import Article from '@/template/back/article/article'
import AddArt from '@/template/back/article/addArt'
import Picture from '@/template/back/picture/picture'
import addPic from '@/template/back/picture/addPic'
import Person from '@/template/front/person/Index'
import Vote from '@/template/front/vote/Index'
import Tickets from '@/template/front/tickets/Index'
import PerIndex from '@/template/front/person/Temp'
import PerAdd from '@/template/front/person/Add'
import NotFound from '@/template/other/404'
import Login from '@/template/other/Login'
import Skill from '@/template/front/skill/index'
import SkillIndex from '@/template/front/skill/list'


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
                    path:'/Skill/',
                    name:'Skill',
                    component:Skill,

                    children:[
                        {
                            path:'/Skill/',
                            name:'SkillIndex',
                            component:SkillIndex,

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
                            path:'/information/msg',
                            name:'InfoMsg',
                            component:InfoMsg,
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
                    component: BackIndex,
                    meta:{
                        requireAuth: true
                    },
                },
                {
                    path: "/Back/Audit",
                    name: "Audit",
                    component: Audit,
                    meta:{
                        requireAuth: true
                    },
                },
                {
                    path: "/Back/Page",
                    name: "Page",
                    component: Page,
                    meta:{
                        requireAuth: true
                    },
                },
                {
                    path: "/Back/Role",
                    name: "Role",
                    component: Role,
                    meta:{
                        requireAuth: true
                    },
                },
                {
                    path: "/Back/Consumer",
                    name: "Consumer",
                    component: Consumer,
                    meta:{
                        requireAuth: true
                    },
                },
                {
                    path: "/Back/Article",
                    name: "Article",
                    component: Article,
                    meta:{
                        requireAuth: true
                    },
                },
                {
                    path: "/Back/AddArt",
                    name: "AddArt",
                    component: AddArt,
                    meta:{
                        requireAuth: true
                    },
                },
                {
                    path: "/Back/Picture",
                    name: "Picture",
                    component: Picture,
                    meta:{
                        requireAuth: true
                    },
                },
                {
                    path: "/Back/addPic",
                    name: "addPic",
                    component: addPic,
                    meta:{
                        requireAuth: true
                    },
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