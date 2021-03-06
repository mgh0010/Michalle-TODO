import Vue from 'vue'
import VueRouter from 'vue-router'
import todoLists from '../views/todoLists.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'todoLists',
    component: todoLists
  },
  {
    path: '/to-gets',
    name: 'toGets',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/toGetList.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
