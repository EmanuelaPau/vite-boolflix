<template>
    <h1>Movies</h1>
    <div v-for="movie in store.moviesList" class="mt-3">
        <!-- <MovieCard /> -->
        <img class="poster" :src="addMovieImg(movie)" alt="">
        <ol class="mb-3">
            <li>{{ movie.title }}</li>
            <li>{{ movie.original_title }}</li>
            <img class="flag" :src="addLanguageFlag(movie)" alt="">
            <li v-if="!store.languages.hasOwnProperty(movie.original_language)">{{
                movie.original_language }}</li>
            <li>{{ movie.vote_average }}</li>
            <li>{{ ratingFromOneToFive(movie.vote_average) }}</li>
            <img class="stars" v-for="index in ratingFromOneToFive(movie.vote_average)"
                src="https://em-content.zobj.net/thumbs/240/apple/354/star_2b50.png" alt="stars">
        </ol>

    </div>
    <h1>Series</h1>
    <div v-for="series in store.tvSeriesList">

        <img class="poster" :src="addMovieImg(series)" alt="">
        <ol class="mb-3">
            <li>{{ series.name }}</li>
            <li>{{ series.original_name }}</li>
            <img class="flag" :src="addLanguageFlag(series)" alt="">
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
                // console.log(languageCode);
                let languageFlag = store.languages[element.original_language].flagImg;
                return languageFlag;
            }
        },

        addMovieImg(element) {
            // console.log(element.original_language)
            let movieImgUrl = store.imgBaseUrl + element.poster_path;
            // console.log(movieImgUrl)
            return movieImgUrl
        },

        ratingFromOneToFive(rating) {
            let ratingToFive = Math.ceil(rating / 2)
            return ratingToFive
        }
    }
}

</script>
<style scoped lang="scss">
@use '../styles/partials/_variables.scss';
@use '../styles/partials/_mixins.scss';

img.flag {
    height: 15px;
}

img.poster {
    width: 300px;
}

img.stars {
    width: 20px;
}
</style> 
