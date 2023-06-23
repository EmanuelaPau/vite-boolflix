<template>
    <div class="no-found-container">
        <h1>Oh no! Nessun risultato trovato!</h1>
        <img src="../../public/oh-no-rick-and-morty.gif" alt="">
        <h1>Prova a cercare qualcos'altro, sarai più fortunato</h1>
    </div>
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'NoResultsCard',
    props: {
    },

    data() {
        return {
            store,
        }
    },
    methods: {
    },
}		
</script>
<style scoped lang="scss">
@use '../styles/partials/_variables.scss';
@use '../styles/partials/_mixins.scss';

div.no-found-container {
    width: 90%;
    margin: 30px auto;
    text-align: center;

    img {
        width: 450px;
        margin: 60px;

    }
}
</style> 



