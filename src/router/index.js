import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login'
import HomePage from '@/views/HomePage'
import CreateUser from '@/views/CreateUser'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: 'Login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/create',
    name: 'CreateUser',
    component: CreateUser
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
