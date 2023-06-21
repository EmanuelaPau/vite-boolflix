<template>
    <div class="mt-3">
        <!-- <MovieCard /> -->
        <ol class="mb-3">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </div>
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'AppcardContainer',
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
