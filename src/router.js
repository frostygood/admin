import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bmv',
      component: () => import('./views/bmv.vue'),
      beforeEnter: AuthGuard
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue'),
      beforeEnter: AuthGuard
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./views/Signin.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/Signup.vue')
    }
  ]
})

function AuthGuard(from, to, next) {
  if (store.getters.isAuth) {
    next()
  } else {
    next('/signin')
  }
}