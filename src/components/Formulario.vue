<template>
    <form class="mt-3">
        <h3>Formulário de Cadastro</h3>
        <div class="form-row mt-5">
            <div class="form-group col-md-2">
                <label for="idCargo">Id</label><br>
                <input v-model="id" id="id" class="form-control" type="number" placeholder="Id">
                <small>Id somente para atualização</small>
            </div>
            <div class="form-group col-md-6">
                <label for="idNome">Nome</label><br>
                <input v-model="nome" id="idNome" class="form-control" type="text" placeholder="Digite seu nome">
            </div>
            <div class="form-group col-md-4">
                <label for="idCargo">Cargo</label><br>
                <input v-model="cargo" id="idCargo" class="form-control" type="text" placeholder="Digite seu cargo">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="idNascimento">Data de Nascimento</label><br>
                <input v-model="dataNascimento" id="idNascimento" class="form-control" type="date" placeholder="Data de Nascimento">
            </div>
            <div class="form-group col-md-6">
                <label for="idEntrada">Data de Entrada</label><br>
                <input v-model="dataEntrada" id="idEntrada" class="form-control" type="date" placeholder="Data de Entrada">
            </div>
        </div>
        <input v-on:click="clique" type="button" class="btn btn-outline-success btn-lg" value="Post"><br>
        <input v-on:click="atualizar" class="btn btn-outline-info mt-3 btn-lg" type="button" value="Atualizar por ID">
    </form>
</template>

<script>
export default {
    name:  'Formulario',
    data: function(){
        return {
            url: 'http://localhost:8095/api/funcionarios',
            id: '',
            nome: '',
            cargo: '',
            dataNascimento: '',
            dataEntrada: ''
        }
    },
    methods:{
        clique: function(){
            this.$http.post(this.url, {nome: this.nome, cargo: this.cargo,
            dataAniversario: this.dataNascimento, dataEntrada: this.dataEntrada})
            .then(Response => Response.data).then(data => alert(data));
        },
        atualizar: function(){
            this.$http.put(this.url+'/'+this.id, {nome: this.nome, cargo: this.cargo,
            dataAniversario: this.dataNascimento, dataEntrada: this.dataEntrada})
            .then(Response => alert(JSON.stringify(Response.data)));
        }
    }
}
</script>