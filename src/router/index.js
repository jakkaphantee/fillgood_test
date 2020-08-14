import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login'
import HomePage from '@/views/HomePage'
import MyProfile from '@/views/MyProfile'
import CreateUser from '@/views/CreateUser'
import EditUser from '@/views/EditUser'
import UserDetail from '@/views/UserDetail'

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
    path: '/me',
    name: 'MyProfile',
    component: MyProfile
  },
  {
    path: '/create',
    name: 'CreateUser',
    component: CreateUser
  },
  {
    path: '/edit/:id',
    name: 'EditUser',
    component: EditUser
  },
  {
    path: '/:id',
    name: 'UserDetail',
    component: UserDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
