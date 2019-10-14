import Vue from 'vue'
import Router from 'vue-router'
import GoogleMap from '@/components/home/GoogleMap'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import ViewProfile from '@/components/profile/ViewProfile'
import firebase from "firebase";


Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'GoogleMap',
    component: GoogleMap,
    meta: {
      requiresAuth: true
    }
  }, {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/profile/:id',
    name: 'ViewProfile',
    component: ViewProfile,
    meta: {
      requiresAuth: true
    }
  }]
})

router.beforeEach((to, from, next) => {
  // check to see if the route requires Auth
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    // check auth state of the user
    let user = firebase.auth().currentUser
    if (user) {
      // user signed in, proceed to route
      next()
    } else {
      // no signed in, redirects to login
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router