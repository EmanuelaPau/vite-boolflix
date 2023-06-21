<template>
    <div>
        <!-- Searchbar -->
        <form class="form-inline my-2 my-lg-0 d-flex">
            <input class="form-control mr-sm-2 w-50" type="search" placeholder="Search" aria-label="Search">
            <button @click="$emit('search')" class="btn btn-primary" type="button">Ciao</button>
        </form>

    </div>
</template>

<script>
import { store } from '../store.js';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
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
