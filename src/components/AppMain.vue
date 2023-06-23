<template>
    <main class="my_container px-2 px-sm-5 ">
        <AppHeader @search="searchMovie" @language="discoverMovie" />
        <AppCardsContainer />
    </main>
</template>

<script>

import AppHeader from './AppHeader.vue'
import AppCardsContainer from './AppCardsContainer.vue'
import axios from 'axios'
import { store } from '../store.js';


export default {
    name: 'AppMain',
    components: {
        AppHeader,
        AppCardsContainer,
    },
    data() {
        return {
            store,
            apiKey: 'f962c0c469c36980eda0b0c8310fb32d',
            linkApiMovie: 'https://api.themoviedb.org/3/search/movie',
            linkApiTv: 'https://api.themoviedb.org/3/search/tv',

            linkApiMovieDiscover: 'https://api.themoviedb.org/3/discover/movie',
            linkApiTvDiscover: 'https://api.themoviedb.org/3/discover/tv',
        }
    },
    methods: {
        searchMovie(element) {
            axios.get(this.linkApiMovie, {
                params: {
                    api_key: 'f962c0c469c36980eda0b0c8310fb32d',
                    query: element,
                    language: 'it',
                }
            }
            )
                .then((response) => {
                    // handle success
                    store.moviesList = response.data.results;
                    console.log('Movie List arriving');
                    console.log(store.moviesList);
                    if (store.moviesList.length <= 0) {
                        store.isMovieFound = false;
                    } else {
                        store.isMovieFound = true;
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });

            axios.get(this.linkApiTv, {
                params: {
                    api_key: 'f962c0c469c36980eda0b0c8310fb32d',
                    query: element,
                    language: 'it',
                }
            }
            )
                .then((response) => {
                    // handle success
                    store.tvSeriesList = response.data.results;
                    console.log('Series List arriving');
                    console.log(store.tvSeriesList)
                    if (store.tvSeriesList.length <= 0) {
                        store.isTvFound = false;
                    } else {
                        store.isTvFound = true;
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });


        },

        discoverMovie(element) {
            axios.get(this.linkApiMovieDiscover, {
                params: {
                    api_key: 'f962c0c469c36980eda0b0c8310fb32d',
                    page: '1',
                    sort_by: 'popularity.desc',
                    language: 'it',
                    with_origin_country: element,
                }
            }
            )
                .then((response) => {
                    // handle success
                    store.moviesList = response.data.results;
                    console.log(store.moviesList)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });

            axios.get(this.linkApiTvDiscover, {
                params: {
                    api_key: 'f962c0c469c36980eda0b0c8310fb32d',
                    language: 'it',
                    page: '1',
                    sort_by: 'popularity.desc',
                    with_origin_country: element,

                }
            }
            )
                .then((response) => {
                    // handle success
                    store.tvSeriesList = response.data.results;
                    console.log('Series List arriving');
                    console.log(store.moviesList)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });


        }
    },

    created() {
        axios.get(this.linkApiMovieDiscover, {
            params: {
                api_key: 'f962c0c469c36980eda0b0c8310fb32d',
                page: '1',
                sort_by: 'popularity.desc',
                language: 'it',
                with_origin_country: store.languageToSearch
            }
        }
        )
            .then((response) => {
                // handle success
                store.moviesList = response.data.results;
                console.log(store.moviesList)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

        axios.get(this.linkApiTvDiscover, {
            params: {
                api_key: 'f962c0c469c36980eda0b0c8310fb32d',
                language: 'it',
                page: '1',
                sort_by: 'popularity.desc',
                with_origin_country: store.languageToSearch

            }
        }
        )
            .then((response) => {
                // handle success
                store.tvSeriesList = response.data.results;
                console.log('Series List arriving');
                console.log(store.moviesList)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });


    },
}		
</script>
<style scoped lang="scss">
@use '../styles/partials/_variables.scss';
@use '../styles/partials/_mixins.scss';

main {
    background-color: #101010;
    color: white;
}
</style> 
