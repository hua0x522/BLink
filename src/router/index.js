import Vue from 'vue'
import VueRouter from 'vue-router'

import Base from '@/views/baseView'
import Login from '@/views/loginView'
import Home from '@/views/homeView'
import Job from '@/views/jobView'
import Find from '@/views/findView'
import Message from '@/views/messageView'
import Stat from '@/views/statView'
import Me from '@/views/meView'
import Talk from '@/views/talkView'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'base',
        component: Base,
        redirect: '/home', 
        children:[
            {
                path: '/home',
                name: 'home',
                component: Home
            },
            {
                path: '/login', 
                name: 'login',
                meta: {
                    title: 'BLink - 用户登录'
                },
                component: Login
            },
            {
                path: '/job',
                name: 'job',
                meta: {
                    title: 'BLink - 岗位'
                },
                component: Job
            },
            {
                path: '/find',
                name: 'find',
                component: Find
            },
            {
                path: '/message',
                name: 'message',
                component: Message 
            },
            {
                path: '/stat',
                name: 'stat',
                component: Stat
            }, 
            {
                path: '/me',
                name: 'me',
                component: Me 
            },
            {
                path: '/talk',
                name: 'talk',
                component: Talk
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router 