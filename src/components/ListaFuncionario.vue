<template>
    <div>
        <h4>Buscar todos os Funcionários</h4>
        <table class="table table-info mb-1">
            <tr>
                <th>id</th>
                <th>Nome</th>
                <th>Cargo</th>
                <th>Data de Nascimento</th>
                <th>Data de Entrada</th>
            </tr>
            <tr v-for="funcionario in funcionarios" v-bind:key="funcionario.id">
                <td>{{funcionario.id}}</td>
                <td>{{funcionario.nome}}</td>
                <td>{{funcionario.cargo}}</td>
                <td>{{funcionario.dataNascimento}}</td>
                <td>{{funcionario.dataEntrada}}</td>
            </tr>
        </table>
        <input type="button" v-on:click = "get" value="GET" class="btn btn-outline-success btn-lg mt-2">
    </div>
</template>

<script>
export default {
    name: 'ListaFuncionario',
    data: function(){
        return {
            url: 'http://localhost:8090/backend_funcionario/api/funcionarios/',
            funcionarios: []
        }
    },
    methods: {
        get: function(){
            this.$http.get(this.url).then(res => res.data).then(data => (this.funcionarios=data));
        }
    }
}
</script>