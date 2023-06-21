<template>
    <div class="movies-card">
        <ol v-for="movie in store.moviesList" class="mb-3">
            <li>{{ movie.title }}</li>
            <li>{{ movie.original_title }}</li>
            <img :src="addLanguageFlag(movie)" alt="">
            <li v-if="!store.languages.hasOwnProperty(movie.original_language)">{{
                movie.original_language }}</li>
            <li>{{ movie.vote_average }}</li>
        </ol>
    </div>
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'MovieCard',
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
