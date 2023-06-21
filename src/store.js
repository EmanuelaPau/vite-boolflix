import { reactive } from 'vue';

const store = reactive({
    searchText: "",
    loading: true,

    movieListElement: "",
    movieTtitle: "",
    originalMovieTitle: "",
    movieLanguage: "",
    movieReview: "",

});

export { store };

