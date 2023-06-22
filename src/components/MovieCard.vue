<template>
    <!-- <Movie Card /> -->
    <div class="movie-card">
        <img class="poster rounded-1" :src="addMovieImg(movie)" :alt="movie.title + ' poster'">
        <!-- Movie infobox  -->
        <div class="movie-infobox">
            <h1 class="my_title">{{ movie.title }}</h1>
            <p class="text-light">{{ movie.original_title }}</p>
            <div class="d-flex justify-content-left">
                <div class="d-flex align-items-center">
                    <p class="me-2 mb-0">Lingua:</p>
                    <img class="flag me-2" :src="addLanguageFlag(movie)"
                        :alt="!store.languages.hasOwnProperty(movie.original_language) ? 'flag' : store.languages[movie.original_language].language + ' flag'">
                </div>
                <span>|</span>
                <div class="d-flex align-items-center">
                    <p class="ms-2 me-2 mb-0">Reviews:</p>
                    <img class="stars" v-for="   index    in    ratingFromOneToFive(movie.vote_average)   "
                        src="https://em-content.zobj.net/thumbs/240/apple/354/star_2b50.png" alt="star icon">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'MovieCard',
    props: {
        movie: Object,
        title: String,
        originalTitle: String,
        language: String,
        rating: Number,
    },

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
                let languageFlag = store.languages[element.original_language].flagImg;
                return languageFlag;
            }
        },

        addMovieImg(element) {
            let movieImgUrl
            if (element.poster_path == null) {
                movieImgUrl = `https://italiancinemaaudiences.org/wp-content/themes/trend/assets/img/empty/424x500.png`
            } else {
                movieImgUrl = store.imgBaseUrl + element.poster_path;
                // console.log(movieImgUrl)
            }
            return movieImgUrl
        },

        ratingFromOneToFive(rating) {
            let ratingToFive = Math.ceil(rating / 2)
            return ratingToFive
        }
    },
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
    height: 430px;
    object-fit: cover;
}

div.movie-card {
    width: 300px;
}

div.movie-infobox {
    padding: 10px;
}

img.stars {
    width: 17px;
    margin: 2px;
}

h1.my_title {
    font-size: 1.75rem;
    font-weight: 600;
}

p.text-light {
    color: rgb(131, 131, 131) !important;
}
</style> 
