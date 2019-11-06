import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/template/index/Index'
import Exam from '@/template/exam/Index'
import About from '@/template/about/Index'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            name:'Index',
            component:Index
        },
        {
            path:'/about',
            name:'About',
            component:About

        },
        {
            path:'/exam',
            name:'Exam',
            component:Exam

        },
    ]
})
