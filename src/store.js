import { reactive } from 'vue';

const store = reactive({
    searchText: "",
    loading: true,

    moviesList: [],
    movieTtitle: "",
    originalMovieTitle: "",
    movieLanguage: "",
    movieReview: "",

});

export { store };

