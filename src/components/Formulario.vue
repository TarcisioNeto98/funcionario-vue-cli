<template>
    <form class="mt-3">
        <h3>Formulário de Cadastro</h3>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="idNome">Nome</label><br>
                <input id="idNome" class="form-control" type="text" placeholder="Digite seu nome">
            </div>
            <div class="form-group col-md-6">
                <label for="idCargo">Cargo</label><br>
                <input id="idCargo" class="form-control" type="text" placeholder="Digite seu cargo">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="idNascimento">Data de Nascimento</label><br>
                <input id="idNascimento" class="form-control" type="date" placeholder="Data de Nascimento">
            </div>
            <div class="form-group col-md-6">
                <label for="idEntrada">Nome</label><br>
                <input id="idEntrada" class="form-control" type="date" placeholder="Data de Entrada">
            </div>
        </div>
        <input type="button" class="btn btn-outline-success btn-lg" value="Post">
    </form>
</template>

<script>
export default {
    name:  'Formulario'
}
</script>