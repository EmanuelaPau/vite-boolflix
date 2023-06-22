<template>
    <!-- <Movie Card /> -->
    <div class="movie-card">
        <div v-if="movie.poster_path == null" class="no-img-title p-3">
            <h1 class="my_title">{{ title }}</h1>
        </div>
        <img class="poster rounded-1" :src="addMovieImg(movie)" :alt="movie.title + ' poster'">
        <!-- Movie infobox  -->
        <div class="movie-infobox">
            <h1 class="my_title">{{ title }}</h1>
            <p class="text-light mb-1">{{ originalTitle }}</p>
            <div class="d-flex justify-content-left mb-1">
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
            <p class="overview">{{ movie.overview.substring(0, 120) }}...</p>
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

div.movie-card {
    width: 300px;
    transition: all 1s ease-out;
    height: 430px;
    overflow: hidden;
    position: relative;

    img.poster {
        width: 300px;
        height: 430px;
        object-fit: cover;
        transition: all .5s ease-out;
    }

    div.no-img-title {
        color: rgb(133, 133, 133);
        width: 300px;
        position: absolute;

        h1 {
            margin-top: 20px;
            font-size: 1.7rem;
            text-align: center;
        }
    }

    div.movie-infobox {
        padding: 10px;
        // display: none;
        opacity: 0;
        transition: all .3s ease;


        h1.my_title {
            font-size: 1.75rem;
            font-weight: 600;
        }

        p.text-light {
            color: rgb(131, 131, 131) !important;
        }

        img.flag {
            height: 15px;
        }

        img.stars {
            width: 17px;
            margin: 2px;
        }
    }
}

div.movie-card:hover {
    img.poster {
        height: 200px;
    }

    div.movie-infobox {
        display: block;
        opacity: 1;
    }
}

p.overview {
    font-size: .85rem;
}
</style> 



