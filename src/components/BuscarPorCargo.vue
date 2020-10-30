<template>
    <div>
        <MostrarDados titulo="Registros por cargos" v-bind:dados="funcionarios"/>
        <form>
            <div class="form-group">
                <label>Cargo</label>
                <input v-model="cargo" class="form-control" type="text" placeholder="Cargo"/>
                <small>Buscará os registros que correspondem ao cargo</small>
            </div>
            <input v-on:click = "clique" class="btn btn-outline-info btn-lg" type="button" value="Buscar"/>
        </form>
    </div>
</template>

<script>

import MostrarDados from './MostrarDados.vue';

export default{
    name:"BuscarPorCargo",
    data: function(){
        return {
            url: 'http://localhost:8095/api/funcionarios/cargo',
            cargo: '',
            funcionarios: []
        }
    },
    methods:{
        clique: function(){
            this.$http.get(this.url+'?cargo='+this.cargo).then(res => res.data).then(data => (this.funcionarios=data));
        }
    },
    components:{
        MostrarDados
    }
}
</script>