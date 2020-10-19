import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SiteList from '../views/SiteList'
import PageList from '../views/PageList'
import PageGenerator from '../views/PageGenerator'
import Auth from '../views/Auth'
import View from '../views/View'
import Public from '../views/Public'
import store from '../store'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/public/:id',
    name: 'Public',
    component: Public
  },
  {
    path: '/Auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
      nameContentForLoad: 'loadContent'
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: SiteList,
    meta: {
      requiresAuth: true,
      nameContentForLoad: 'loadContent'
    }
  },
  {
    path: '/project/:projectID',
    name: 'project',
    component: PageList,
    meta: {
      requiresAuth: true,
      nameContentForLoad: 'loadContent'
    }
  },
  {
    path: '/project/:projectID/page/:pageID',
    name: 'PageGenerator',
    component: PageGenerator,
    meta: {
      requiresAuth: true,
      nameContentForLoad: 'loadContent'
    }
  },
  {
    path: '/view/project/:projectID/page/:pageID',
    name: 'View',
    component: View,
    meta: {
      requiresAuth: true,
      nameContentForLoad: 'loadContent'
    }
  },
  {
    path: '/404',
    redirect: '/'
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (store.getters.globalLoading) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        store.dispatch('currentUser', user.uid)
        store.dispatch('loadContent')
      }
      routerBefore()
    })
  } else {
    routerBefore()
  }
  function routerBefore () {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const isAuthenticated = firebase.auth().currentUser
    if (to.name === 'Auth' && isAuthenticated) next({ name: 'Home' })
    if (to.name !== 'Auth' && !isAuthenticated && requiresAuth) next({ name: 'Auth' })
    next()
  }
})
export default router
