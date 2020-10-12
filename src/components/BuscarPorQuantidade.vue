<template>
    <div>
        <MostrarDados titulo="Eai" v-bind:dados="array"/>
        <form>
            <div class="form-group">
                <label>Número de Registros</label>
                <input class="form-control col-md-6" type="number" placeholder="Número de Registros"/>
                <small>Buscará os N primeiros Registros</small>
            </div>
            <input class="btn btn-outline-info btn-lg" type="button" value="Buscar"/>
        </form>
    </div>
</template>

<script>
import MostrarDados from './MostrarDados.vue';

export default {
    name: 'BuscarPorQuantidade',
    data:function() {
        return {
            array: ['neto', 'tarcisio']
        }
    },
    components:{
        MostrarDados
    }
}
</script>