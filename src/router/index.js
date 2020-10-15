import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SiteList from '../views/SiteList'
import PageList from '../views/PageList'
import PageGenerator from '../views/PageGenerator'
import View from '../views/View'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'projects',
    component: SiteList
  },
  {
    path: '/project/:projectID',
    name: 'project',
    component: PageList
  },
  {
    path: '/project/:projectID/page/:pageID',
    name: 'PageGenerator',
    component: PageGenerator
  },
  {
    path: '/view/project/:projectID/page/:pageID',
    name: 'View',
    component: View
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
