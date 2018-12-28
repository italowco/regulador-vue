import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Report from './views/Report'
import AddReport from './views/AddReport'
import Login from './views/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/report',
      name: 'report',
      component: Report
    },
    {
      path: '/add-report',
      name: 'addReport',
      component: AddReport
    }
  ],
  linkActiveClass: "is-active",
})
