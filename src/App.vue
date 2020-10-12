<template>
  <div class="container" id="app">
    <Formulario/>
    <ListaFuncionario/>
    <BuscaFuncionario/>
    <BuscarPorQuantidade/>
    <BuscarPorCargo/>
  </div>
</template>

<script>
import Formulario from './components/Formulario.vue';
import ListaFuncionario from './components/ListaFuncionario.vue';
import BuscaFuncionario from './components/BuscaFuncionario.vue';
import BuscarPorQuantidade from './components/BuscarPorQuantidade.vue';
import BuscarPorCargo from './components/BuscarPorCargo.vue';

export default {
  name: 'App',
  components: {
    Formulario,
    ListaFuncionario,
    BuscaFuncionario,
    BuscarPorQuantidade,
    BuscarPorCargo
  }
}
</script>

<style>
</style>
