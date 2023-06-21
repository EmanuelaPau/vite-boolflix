<template>
    <div>
        <h3>AppCardsContainer</h3>
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
