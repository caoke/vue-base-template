import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/Index'

Vue.use(Router)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

export const constantRoutes = [
  {
    path: '/',
    redirect: 'list',
    hidden: true
  },
  {
    path: '',
    component: Layout,
    meta: {
      title: 'shouye'
    },
    children: [
      {
        path: 'list',
        component: () => import(/* webpackChunkName: "home" */'@/views/Kanban'),
        name: 'List',
        meta: { title: '实时监控', icon: 'el-icon-data-line', roles: ['admin'], affix: true }
      }
    ]
  },
  {
    path: '/hospital',
    component: Layout,
    meta: {
      title: '医院信息',
      icon: 'el-icon-s-home'
    },
    children: [
      {
        path: 'keshi',
        name: 'KeShi',
        component: () => import(/* webpackChunkName: "home" */'@/views/home/Index'),
        hidden: false,
        meta: { title: '科室管理', icon: '', roles: ['admin'] }
      },
      {
        path: 'bingqu',
        name: 'Bingqu',
        component: () => import(/* webpackChunkName: "home" */'@/views/home/Index'),
        meta: { title: '病区管理', icon: '', roles: ['admin'] }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = []

const createRouter = () => new Router({
  scrollBehavior: () => ({
    x: 0,
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

export default router
