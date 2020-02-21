import Vue from 'vue'
import VueRouter from 'vue-router'
import signIn from '@/components/signIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/sign-in',
    name: 'signIn',
    component: signIn,
  },
  {
    path: '/',
    name: 'todoLists',
    component: () => import(/* webpackChunkName: "todoLists" */ '../views/todoLists.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/to-gets',
    name: 'toGets',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "toGets" */ '../views/toGetList.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

import store from '@/store/store'

router.beforeEach(async (to, from, next) => {
  if (!to.meta.requiresAuth) {
    next()
  } 
  else {
    if (store.state.signedIn) {
      next()
    } 
    else {
      next('/sign-in')
    }
  }
})

export default router
