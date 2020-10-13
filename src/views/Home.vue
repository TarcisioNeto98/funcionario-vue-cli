<template>
  <div class="home">
    <ListaFuncionario/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListaFuncionario from '../components/ListaFuncionario.vue';

export default {
  name: 'Home',
  components: {
    ListaFuncionario
  }
}
</script>
