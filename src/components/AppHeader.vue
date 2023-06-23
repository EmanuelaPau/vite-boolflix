<template>
    <header class="d-flex justify-content-between align-items-center">
        <!-- header left  -->
        <div class="header-left d-flex justify-content-between align-items-center position-relative">
            <a href="#"><img id="bool-logo" class="me-4" src="../../public/boolflix_logo.png" alt="boolflix logo"></a>
            <ul class="navlist list-unstyled d-flex align-items-center m-0 ">
                <li class="m-2 d-none d-md-block" @click="store.isMovieSearchOn = true, store.isTvSearchOn = true">Home</li>
                <li class="m-2 d-none d-md-block" @click="store.isMovieSearchOn = false, store.isTvSearchOn = true">Serie
                    TV</li>
                <li class="m-2 d-none d-md-block" @click="store.isTvSearchOn = false, store.isMovieSearchOn = true">Film
                </li>
                <li class="m-2 d-none d-lg-block"><a href="">Nuovi e Popolari</a></li>
                <li class="m-2 d-none d-xl-block"><a href="">La mia nuova lista</a></li>
                <li @mouseover="isLanguageAccordionHover = true" class="m-2 d-none d-xxl-block"><a href="">Sfoglia per
                        lingua</a></li>
            </ul>

            <div class="language-accordion" :class="isLanguageAccordionHover == false ? 'd-none' : ''"
                @mouseleave="isLanguageAccordionHover = false">
                <ul>
                    <li>
                        English
                    </li>
                    <li>
                        Italian
                    </li>
                    <li>
                        French
                    </li>
                    <li>
                        Chinese
                    </li>
                    <li>
                        Japanese
                    </li>
                </ul>
            </div>
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

                <!-- Account nav menu  -->
                <div class="account-menu position-relative" @mouseover="isAccountAccordionHover = true">
                    <img id="" class="me-2 profile-pic" src="../../public/profile_pic_1.png" alt="profile pic">
                    <a class="text-reset" href=""><i class="fa-solid fa-sort-down arrow"></i></a>
                    <!-- Account menu  -->
                    <div :class="isAccountAccordionHover == false ? 'd-none' : 'd-block'"
                        class="account-accordion-menu pt-4" @mouseleave="isAccountAccordionHover = false">
                        <div class="w-100 d-flex align-items-center mb-3">
                            <img class="profile-pic me-2" src="../../public/profile_pic_2.png" alt="profile pic">
                            <p class="m-0 accordion-item">Mamma</p>
                        </div>
                        <div class="w-100 d-flex align-items-center mb-3">
                            <img class="profile-pic me-2" src="../../public/profile_pic_3.png" alt="profile pic">
                            <p class="m-0 accordion-item">Babbo</p>
                        </div>
                        <div class="w-100 d-flex align-items-center mb-3">
                            <img class="profile-pic me-2" src="../../public/profile_pic_4.png" alt="profile pic">
                            <p class="m-0 accordion-item">Sorella</p>
                        </div>
                        <div class="w-100 d-flex align-items-center mb-3">
                            <img class="profile-pic me-2" src="../../public/profile_pic_kids.png" alt="profile pic">
                            <p class="m-0 accordion-item">Kids</p>
                        </div>

                        <div class="w-100 d-flex align-items-center mb-3">
                            <i class="fa-solid fa-pencil me-2"></i>
                            <p class="m-0 accordion-item">Gestisci i profili</p>
                        </div>
                        <div class="w-100 d-flex align-items-center mb-3">
                            <i class="fa-solid fa-suitcase me-2"></i>
                            <p class="m-0 accordion-item">Trasferisci profilo</p>
                        </div>
                        <div class="w-100 d-flex align-items-center mb-3">
                            <i class="fa-regular fa-user me-2"></i>
                            <p class="m-0 accordion-item">Account</p>
                        </div>
                        <div class="w-100 d-flex align-items-center mb-3">
                            <i class="fa-regular fa-circle-question me-2"></i>
                            <p class="m-0 accordion-item">Centro assistenza</p>
                        </div>
                        <div class="w-100 d-flex align-items-center mb-0 pt-2 border-top ">
                            <p class="m-0 w-100 text-center accordion-item">Esci da netflix</p>
                        </div>
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
            isAccountAccordionHover: false,
            isLanguageAccordionHover: false,
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

div.language-accordion {
    position: absolute;
    top: 50px;
    right: 0;
    background-color: rgba(0, 0, 0, 0.648);
    border: 1px solid rgba(255, 255, 255, 0.297);
    z-index: 1;

    ul {
        list-style-type: none;
        margin: 0;
        padding: .5rem 1rem;

        li {
            padding: .3rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.297);
            cursor: pointer;
        }

        li:hover {
            text-decoration: underline;
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

img.profile-pic {
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
    // display: none;
    position: absolute;
    z-index: 1;
    top: 50px;
    right: 0;
    width: 250px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.895);
    border: 1px solid rgba(255, 255, 255, 0.297);

    i {
        color: grey;
        font-size: 1.3rem;
        padding: 5px;
    }
}

i.arrow {
    height: 1rem;
    display: inline-block;
    transition: .3s all;
}

p.accordion-item:hover {
    text-decoration: underline;
}
</style> 
