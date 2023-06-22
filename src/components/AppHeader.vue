<template>
    <header class="d-flex justify-content-between align-items-center">
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
            <div class="d-flex align-items-center">
                <button @click="$emit('search', searchedText), searchedText = ''"
                    class="btn btn-primary my-searchbar-button rounded-0" type="button">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <input class="my-searchbar me-3" type="text" placeholder="Titoli, persone, generi" aria-label="Search"
                    v-model="searchedText" @keyup.enter="$emit('search', searchedText), searchedText = ''">
                <a class="text-reset me-3 text-decoration-none " href="#">Bambini</a>
                <i class="bell fa-regular fa-bell me-3"></i>
                <img id="profile-pic" class="me-2" src="../../public/profile_pic_1.png" alt="profile pic">
                <i class="fa-solid fa-sort-down"></i>
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
    width: 100%;
    height: 70px;
    font-size: .85rem;
    margin-bottom: 40px;
}

img#bool-logo {
    width: 120px;
}

ul.navlist {
    height: 100%;
}

button.my-searchbar-button {
    background-color: #101010;
    border: 1px solid white;
    border-radius: none;
    border-right: none;
    height: 35px;
    padding: 5px;
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

i.bell {
    font-size: 1.3rem;
}

img#profile-pic {
    height: 30px;
    border-radius: 4px;
}
</style> 
