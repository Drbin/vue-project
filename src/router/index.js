import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/template/index/Index'
import About from '@/template/about/About'


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
    ]
})