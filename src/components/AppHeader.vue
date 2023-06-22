<template>
    <div class="d-flex">
        <!-- Searchbar -->
        <input class="form-control mr-sm-2 w-50" type="text" placeholder="Search" aria-label="Search" v-model="searchedText"
            @keyup.enter="$emit('search', searchedText)">
        <button @click="$emit('search', searchedText)" class="btn btn-primary" type="button">Ciao</button>

    </div>
</template>

<script>
import { store } from '../store.js';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            searchedText: '',
        }
    },
    methods() {
    },
}		
</script>
<style scoped lang="scss">
@use '../styles/partials/_variables.scss';
@use '../styles/partials/_mixins.scss';
</style> 
