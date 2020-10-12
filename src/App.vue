<template>
  <div class="container" id="app">
    <Formulario/>
    <ListaFuncionario/>
    <BuscaFuncionario/>
  </div>
</template>

<script>
import Formulario from './components/Formulario.vue';
import ListaFuncionario from './components/ListaFuncionario.vue';
import BuscaFuncionario from './components/BuscaFuncionario.vue';

export default {
  name: 'App',
  components: {
    Formulario,
    ListaFuncionario,
    BuscaFuncionario
  }
}
</script>

<style>
</style>
