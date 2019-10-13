import Vue from 'vue'
import Router from 'vue-router'
import GoogleMap from '@/components/home/GoogleMap'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'GoogleMap',
    component: GoogleMap
  }, {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }]
})
