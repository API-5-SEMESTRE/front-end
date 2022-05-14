import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Gestão Usuário',
    meta: { title: 'Gestão Usuário' },
    component: () => import('../views/usuario-crud.vue')
  },
  {
    path: '/upload-cidade',
    name: 'Upload Cidade',
    meta: { title: 'Upload Cidade' },
    component: () => import('../views/upload-cidade.vue')
  },
  {
    path: '/upload-cnae',
    name: 'Upload CNAE',
    meta: { title: 'Upload CNAE' },
    component: () => import('../views/upload-cnae.vue')
  },
  {
    path: '/upload-empresa',
    name: 'Upload Empresa',
    meta: { title: 'Upload Empresa' },
    component: () => import('../views/upload-empresa.vue')
  },
  {
    path: '/upload-consumo',
    name: 'Upload Consumo',
    meta: { title: 'Upload Consumo' },
    component: () => import('../views/upload-consumo.vue')
  },
  {
    path: '/carteira-vendedor',
    name: 'Carteira Vendedor',
    meta: { title: 'Carteira Vendedor' },
    component: () => import('../views/carteira-vendedor.vue')
  },
  {
    path: '/consumo-vs-empresa',
    name: 'Consumo VS Empresa',
    meta: { title: 'Consumo VS Empresa' },
    component: () => import('../views/consumo-vs-empresa.vue')
  },
  {
    path: '/relatorios-score',
    name: 'Score Origem',
    meta: { title: 'Score Origem' },
    component: () => import('../views/relatorios-score.vue')
  },
  {
    path: '/relatorios-score-regiao',
    name: 'Score Região',
    meta: { title: 'Score Região' },
    component: () => import('../views/relatorios-score-regiao.vue')
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
