import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Mixins from '../views/Mixins.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Forgot from '../views/auth/Forgot.vue'
import Reset from '../views/auth/Reset.vue'

import store from '../store/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Mixins',
    component: Mixins,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresVisitor: true }
  },
  {
    path: '/reset',
    name: 'Reset',
    component: Reset,
    meta: { requiresVisitor: true }
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot,
    meta: { requiresVisitor: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
