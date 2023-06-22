<template>
    <div class="other-titles mb-2 d-flex align-items-top flex-wrap">
        <p class="text-light me-4">Altri titoli da scoprire:</p>
        <ul class="other-list d-flex flex-wrap list-unstyled">
            <li class="me-3 border-end pe-3" v-for="other in store.moviesList.slice(10, 20)"><a
                    class="text-reset text-decoration-none" href="">{{ other.title
                    }}</a></li>
        </ul>
    </div>
    <!-- Movies -->
    <h1>Film</h1>
    <div class="d-flex flex-wrap gap-2 mb-4">
        <!-- Movie  card-->
        <MovieCard v-for="movie in    store.moviesList   " class="mt-3 movie-card" :movie=movie :title=movie.title
            :originalTitle=movie.original_title :language=movie.original_language :rating=movie.vote_average />
    </div>

    <!-- Series -->
    <h1>Serie Tv</h1>
    <div class="d-flex flex-wrap gap-2">
        <!-- Series  card-->
        <MovieCard class="mt-3 movie-card" v-for=" series in store.tvSeriesList" :movie=series :title=series.name
            :originalTitle=series.original_name :language=series.original_language :rating=series.vote_average />
    </div>
</template>

<script>
import { store } from '../store.js';
import MovieCard from './MovieCard.vue'
export default {
    name: 'AppcardContainer',
    components: {
        MovieCard
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

ul.other-list {
    width: 85%;

    li:hover {
        color: #e50914;
    }
}
</style> 
