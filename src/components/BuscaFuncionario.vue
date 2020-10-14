<template>
    <div id="recuperarDados">
        <form>
            <h4 class="mb-2">Buscar, Atualizar e Deletar Funcionário</h4>
            <div class="form-group">
                <label for="id">Id</label>
                <input v-model="id" class="form-control col-md-6" type="number" id="id">
            </div>
            <input v-on:click="buscar" class="btn btn-outline-success mb-2" type="button" value="Buscar por ID"><br>
            <!--<input class="btn btn-outline-info mb-2" type="button" value="Atualizar por ID">--><br>
            <input v-on:click = "deletar" class="btn btn-outline-danger" type="button" value="Deletar por ID">
        </form>
        <div id="dados">{{this.funcionario}}</div>
    </div>
</template>

<script>
export default {
    name: 'BuscaFuncionario',
    data: function(){
        return{
            id: '',
            url: 'http://localhost:8090/backend_funcionario/api/funcionarios/',
            funcionario: null
        }
    },
    methods: {
        buscar: function(){
            this.$http.get(this.url+this.id).then(Response => this.funcionario = Response.data);
        },
        deletar: function(){
            this.$http.delete(this.url+this.id);
        }
    }
}
</script>