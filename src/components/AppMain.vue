<template>
    <main>
        <!-- <h2>AppMain</h2> -->
        <AppHeader @search="console.log('ciao')" />
        <!-- <p>{{ store.moviesList }}</p> -->
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
            linkApi: ' https://api.themoviedb.org/3/search/movie',
        }
    },
    methods: {
        searchMovie(element) {
            axios.get(this.linkApi, {
                params: {
                    api_key: 'f962c0c469c36980eda0b0c8310fb32d',
                    query: element,
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

        }
    },

    created() {
        axios.get(this.linkApi, {
            params: {
                api_key: 'f962c0c469c36980eda0b0c8310fb32d',
                query: 'matrix'
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

    },
}		
</script>
<style scoped lang="scss">
@use '../styles/partials/_variables.scss';
@use '../styles/partials/_mixins.scss';
</style> 
