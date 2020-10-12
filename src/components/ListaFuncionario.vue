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
            <tr>
                <td>1</td>
                <td>Tarcisio</td>
                <td>Chefe</td>
                <td>21/06/1998</td>
                <td>21/06/1998</td>
            </tr>
        </table>
        <input type="button" value="GET" class="btn btn-outline-success btn-lg mt-2">
    </div>
</template>

<script>
export default {
    name: 'ListaFuncionario',
    data: function(){
        return {
            index: [2, 1, 1]
        }
    }
}
</script>