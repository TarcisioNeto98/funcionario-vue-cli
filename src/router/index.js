import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Formulario from '../components/Formulario.vue';
import BuscarPorCargo from '../components/BuscarPorCargo.vue';
import BuscarPorQuantidade from '../components/BuscarPorQuantidade.vue';
import BuscaFuncionario from '../components/BuscaFuncionario.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cadastrar',
    name: 'Formulario',
    component: Formulario
  },
  {
    path: '/buscar/funcionario',
    name: 'BuscaFuncionario',
    component: BuscaFuncionario
  },
  {
    path: '/buscar/cargo',
    name: 'BuscarPorCargo',
    component: BuscarPorCargo
  },
  {
    path: '/buscar/quantidade',
    name: 'BuscarPorQuantidade',
    component: BuscarPorQuantidade
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
