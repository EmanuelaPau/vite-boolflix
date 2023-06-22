<template>
    <header class="d-flex justify-content-between align-items-center">
        <!-- header left  -->
        <div class="header-left d-flex justify-content-between align-items-center">
            <a href="#"><img id="bool-logo" class="me-4" src="../../public/boolflix_logo.png" alt="boolflix logo"></a>
            <ul class="navlist list-unstyled d-flex align-items-center m-0">
                <li class="m-2 d-none d-md-block"><a href="">Home</a></li>
                <li class="m-2 d-none d-md-block"><a href="">Serie TV</a></li>
                <li class="m-2 d-none d-md-block"><a href="">Film</a></li>
                <li class="m-2 d-none d-lg-block"><a href="">Nuovi e Popolari</a></li>
                <li class="m-2 d-none d-xl-block"><a href="">La mia nuova lista</a></li>
                <li class="m-2 d-none d-xxl-block"><a href="">Sfoglia per lingua</a></li>
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
                <a class="text-reset me-3 text-decoration-none d-none d-lg-block" href="#">Bambini</a>
                <a class="text-reset" href=""><i class="bell fa-regular fa-bell me-3"></i></a>
                <div class="account-menu position-relative">
                    <img id="profile-pic" class="me-2" src="../../public/profile_pic_1.png" alt="profile pic">
                    <a class="text-reset" href=""><i class="fa-solid fa-sort-down arrow"></i></a>
                    <div class="account-accordion-menu">

                    </div>

                </div>
            </div>
        </div>


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

    li {
        a {
            text-decoration: none;
            color: white;
        }
    }
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

.account-menu {
    cursor: pointer;
}

.account-menu:hover a i {
    // color: red;
    transform-origin: center;
    transform: rotate(180deg);
}

div.account-accordion-menu {
    position: absolute;
    top: 50px;
    right: 0;
    // height: 500px;
    width: 250px;
    background-color: aqua;

}

i.arrow {
    height: 1rem;
    display: inline-block;
    transition: .3s all;
}
</style> 
