<template>
    <div>
        <h4>{{titulo}}</h4>
        <ul>
            <li v-for="funcionario in dados" v-bind:key="funcionario.id">
                <ul>
                    <li>ID: {{funcionario.id}}</li>
                    <li>Nome: {{funcionario.nome}}</li>
                    <li>Cargo: {{funcionario.cargo}}</li>
                    <li>Data de Nascimento: {{funcionario.dataAniversario}}</li>
                    <li>Data de Entrada: {{funcionario.dataEntrada}}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:  'MostrarDados',
    props: ['titulo', 'dados']
}
</script>