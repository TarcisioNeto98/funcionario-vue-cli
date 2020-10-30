<template>
    <div id="recuperarDados">
        <form>
            <h4 class="mb-2">Buscar e Deletar Funcionário</h4>
            <div class="form-group">
                <label for="id">Id</label>
                <input v-model="id" class="form-control col-md-6" type="number" id="id">
            </div>
            <input v-on:click="buscar" class="btn btn-outline-success mb-2" type="button" value="Buscar por ID"><br>
            <!--<input class="btn btn-outline-info mb-2" type="button" value="Atualizar por ID">--><br>
            <input v-on:click = "deletar" class="btn btn-outline-danger" type="button" value="Deletar por ID">
        </form>
        <div id="dados">
            <ul v-if="this.funcionario != null">
                <li>id: {{this.funcionario.id}}</li>
                <li>nome: {{this.funcionario.nome}}</li>
                <li>cargo: {{this.funcionario.cargo}}</li>
                <li>Data de Nascimento: {{this.funcionario.dataNascimento}}</li>
                <li>Data de Entrada: {{this.funcionario.dataEntrada}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BuscaFuncionario',
    data: function(){
        return{
            id: '',
            url: 'http://localhost:8095/api/funcionarios/',
            urlBusca: 'http://localhost:8095/api/funcionarios/',
            funcionario: null
        }
    },
    methods: {
        buscar: function(){
            this.$http.get(this.urlBusca+this.id).then(Response => this.funcionario = Response.data).
            catch((e) => {
                if(e.response.status === 404) alert("Funcionário não encontrado!");
                else alert("erro no servidor!");
            });
        },
        deletar: function(){
            this.$http.delete(this.url+this.id).
            catch((e) => {
                if(e.response.status === 404) alert("Funcionário não encontrado!");
                else alert("erro no servidor!");
            });
        }
    }
}
</script>