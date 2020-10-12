<template>
    <div id="recuperarDados">
        <form>
            <h4 class="mb-2">Buscar, Atualizare e Deletar Funcionário</h4>
            <div class="form-group">
                <label for="id">Id</label>
                <input class="form-control col-md-6" type="text" id="id">
            </div>
            <input class="btn btn-outline-success mb-2" type="button" value="Buscar por ID"><br>
            <input class="btn btn-outline-info mb-2" type="button" value="Buscar por ID"><br>
            <input class="btn btn-outline-danger" type="button" value="Deletar por ID">
        </form>
        <div id="dados"></div>
    </div>
</template>

<script>
export default {
    name: 'BuscaFuncionario'
}
</script>