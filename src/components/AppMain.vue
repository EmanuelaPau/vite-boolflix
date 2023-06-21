<template>
    <main>
        <h2>AppMain</h2>
        <AppHeader />
        <AppCardsContainer />
    </main>
</template>

<script>

import AppHeader from './AppHeader.vue'
import AppCardsContainer from './AppCardsContainer.vue'

export default {
    name: 'AppMain',
    components: {
        AppHeader,
        AppCardsContainer,
    },
    data() {
        return {

            // links: [
            //	'gino',
            //	'ciao',
            //	]

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
