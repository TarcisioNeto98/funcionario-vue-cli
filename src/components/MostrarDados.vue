<template>
    <div>
        <h4>{{titulo}}</h4>
        <span v-for="dado in dados" v-bind:key="dado">{{dado}}</span>
        <!--<ul v-for="funcionario in dados" v-bind:key="funcionario.id">
            <ul>
                <li>ID: {{funcionario.id}}</li>
                <li>Nome: {{funcionario.nome}}</li>
                <li>Cargo: {{funcionario.cargo}}</li>
                <li>Data de Nascimento: {{funcionario.dataNascimento}}</li>
                <li>Data de Entrada: {{funcionario.dataEntrada}}</li>
            </ul>
        </ul>-->
    </div>
</template>

<script>
export default {
    name:  'MostrarDados',
    props: ['titulo', 'dados']
}
</script>