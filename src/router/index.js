import Vue from 'vue'
import VueRouter from 'vue-router'
import RusNews from '../views/RusNews.vue'
import UsaNews from '../views/UsaNews.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/ru',
    component: RusNews
  },
  {
    path: '/us',
    component: UsaNews
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
