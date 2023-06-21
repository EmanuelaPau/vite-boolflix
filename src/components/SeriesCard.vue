<template>
    <div class="series-card">
        <ol v-for="series in store.tvSeriesList" class="mb-3">
            <li>{{ series.name }}</li>
            <li>{{ series.original_name }}</li>
            <img :src="addLanguageFlag(series)" alt="">
            <li v-if="!store.languages.hasOwnProperty(series.original_language)">{{
                series.original_language }}</li>
            <li>{{ series.vote_average }}</li>
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
    methods: {
        addLanguageFlag(element) {
            if (!store.languages.hasOwnProperty(element.original_language)) {
                let languageFlag = store.languages.undefined.flagImg;
                return languageFlag;
            }
            else {
                let languageCode = element.original_language;
                console.log(languageCode);
                let languageFlag = store.languages[element.original_language].flagImg;
                return languageFlag;
            }
        }
    },
}		
</script>
<style scoped lang="scss">
@use '../styles/partials/_variables.scss';
@use '../styles/partials/_mixins.scss';

img {
    height: 15px;
}
</style> 
