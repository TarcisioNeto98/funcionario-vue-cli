<template>
    <div>
        <MostrarDados titulo="Quantidade de Registros" v-bind:dados="funcionarios"/>
        <form>
            <div class="form-group">
                <label>Número de Registros</label>
                <input v-model="quantidade" class="form-control col-md-6" type="number" placeholder="Número de Registros"/>
                <small>Buscará os N primeiros Registros</small>
            </div>
            <input v-on:click="buscar" class="btn btn-outline-info btn-lg" type="button" value="Buscar"/>
        </form>
    </div>
</template>

<script>
import MostrarDados from './MostrarDados.vue';

export default {
    name: 'BuscarPorQuantidade',
    data:function() {
        return {
            quantidade: '',
            funcionarios: [],
            url: 'http://localhost:8090/backend_funcionario/api/funcionarios/quantidade/'
        }
    },
    components:{
        MostrarDados
    },
    methods: {
        buscar: function(){
            this.$http.get(this.url+this.quantidade).then(Response => this.funcionarios=Response.data);
        }
    }
}
</script>