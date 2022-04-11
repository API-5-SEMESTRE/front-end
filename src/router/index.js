import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/crud-usuario',
    name: 'CRUD Usuário',
    component: () => import('../views/usuario-crud.vue')
  },
  {
    path: '/upload-csv',
    name: 'Upload CSV',
    component: () => import('../views/upload-csv.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
