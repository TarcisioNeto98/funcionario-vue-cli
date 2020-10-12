<template>
  <div class="container" id="app">
    <Formulario/>
    <ListaFuncionario/>
  </div>
</template>

<script>
import Formulario from './components/Formulario.vue';
import ListaFuncionario from './components/ListaFuncionario.vue';

export default {
  name: 'App',
  components: {
    Formulario,
    ListaFuncionario
  }
}
</script>

<style>
</style>
