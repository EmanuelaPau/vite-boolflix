<template>
    <header class="my_container d-flex justify-content-between align-items-center">
        <!-- header left  -->
        <div class="header-left d-flex justify-content-between align-items-center">
            <img id="bool-logo" class="me-4" src="../../public/boolflix_logo.png" alt="boolflix logo">
            <ul class="navlist list-unstyled d-flex align-items-center m-0">
                <li class="m-2">Home</li>
                <li class="m-2">Serie TV</li>
                <li class="m-2">Film</li>
                <li class="m-2">Nuovi e Popolari</li>
                <li class="m-2">La mia nuova lista</li>
                <li class="m-2">Sfoglia per lingua</li>
            </ul>
        </div>
        <!-- header right -->
        <div class="header-right d-flex justify-content-between align-items-center">
            <!-- Searchbar -->
            <div class="d-flex">
                <button @click="$emit('search', searchedText), searchedText = ''"
                    class="btn btn-primary my-searchbar-button rounded-0 p-0 px-2" type="button">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <input class=" mr-sm-2 my-searchbar" type="text" placeholder="Titoli, persone, generi" aria-label="Search"
                    v-model="searchedText" @keyup.enter="$emit('search', searchedText), searchedText = ''">
            </div>
        </div>

        <!-- Searchbar -->
        <!-- <div class="d-flex">
            <input class="form-control mr-sm-2 w-50" type="text" placeholder="Search" aria-label="Search"
                v-model="searchedText" @keyup.enter="$emit('search', searchedText), searchedText = ''">
            <button @click="$emit('search', searchedText), searchedText = ''" class="btn btn-primary"
                type="button">Ciao</button>
        </div> -->
    </header>
</template>

<script>
import { store } from '../store.js';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            searchedText: '',
        }
    },
    methods() {
    },
}		
</script>
<style scoped lang="scss">
@use '../styles/partials/_variables.scss';
@use '../styles/partials/_mixins.scss';

header {
    background-color: #101010;
    color: white;
    width: 100%;
    height: 70px;
}

img#bool-logo {
    width: 120px;
}

ul.navlist {
    height: 100%;

    li {
        font-size: .85rem;
    }
}

button.my-searchbar-button {
    background-color: #101010;
    border: 1px solid white;
    border-radius: none;
    border-right: none;
}

input.my-searchbar {
    background-color: #101010;
    color: white;
    border: 1px solid white;
    border-left: none;
    height: 35px;
    padding: 5px;
    font-size: .85rem;
}
</style> 
