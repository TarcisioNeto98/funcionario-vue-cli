<template>
    <div>
        <MostrarDados titulo="Eai" v-bind:dados="array"/>
        <form>
            <div class="form-group">
                <label>Cargo</label>
                <input class="form-control" type="number" placeholder="Número de Registros"/>
                <small>Buscará os registros que correspondem ao cargo</small>
            </div>
            <input class="btn btn-outline-info btn-lg" type="button" value="Buscar"/>
        </form>
    </div>
</template>