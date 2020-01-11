import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/template/index/Index'
import Information from '@/template/information/Index'
import Person from '@/template/person/Index'
import Vote from '@/template/vote/Index'
import Tickets from '@/template/tickets/Index'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            name:'Index',
            component:Index
        },
        {
            path:'/person',
            name:'Person',
            component:Person

        },
        {
            path:'/tickets',
            name:'Tickets',
            component:Tickets

        },
        {
            path:'/information',
            name:'Information',
            component:Information

        },{
            path:'/vote',
            name:'Vote',
            component:Vote

        }
    ]
})
