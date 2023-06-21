<template>
    <div class="mt-3">
        <!-- <MovieCard /> -->
        <ol v-for="movie in store.moviesList" class="mb-3">
            <li>{{ movie.title }}</li>
            <li>{{ movie.original_title }}</li>
            <li>{{ addLanguageFlag(movie) }}</li>
            <img :src="'store.languages.' + movie.original_language + '.flagImg'" alt="">
            <li>{{ movie.vote_average }}</li>
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
            // let languageFlag = 'https://flagicons.lipis.dev/flags/4x3/' + element.original_language + '.svg';
            let languageCode = element.original_language;
            let languageFlag = 'store.languages.' + languageCode + '.flagImg';
            console.log(element.original_language);
            return languageFlag;
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
