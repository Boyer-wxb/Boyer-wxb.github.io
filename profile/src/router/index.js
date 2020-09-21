import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/profile',
    name: 'Profile',
    meta:{
      title:'个人简历'
    },
    component: () => import(/* webpackChunkName: "profile" */ '../views/profile/Index.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
