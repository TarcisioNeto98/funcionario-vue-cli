<template>
  <div class="container" id="app">
    <div class="mb-3" id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/cadastrar">Cadastrar Funcionário e Atualizar</router-link> | 
      <router-link to="/buscar/funcionario">Buscar, Atualizar e Excluir por  ID</router-link> | 
      <router-link to="/buscar/cargo">Buscar por Cargo</router-link> | 
      <router-link to="/buscar/quantidade">Buscar por Quantidade</router-link> | 
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
