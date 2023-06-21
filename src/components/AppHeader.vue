<template>
    <div>
        <h2>AppHeader</h2>
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
