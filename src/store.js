import { reactive } from 'vue';

const store = reactive({
    searchText: "",
    loading: true,

    moviesList: [],
    movieTtitle: "",
    originalMovieTitle: "",
    movieLanguage: "",
    movieReview: "",

    languages: {
        'al': {
            language: 'albanian',
            languageCode: 'al',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/al.svg',
        },

        'at': {
            language: 'Austrian',
            languageCode: 'at',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/at.svg',
        },
        'by': {
            language: 'Belarusian',
            languageCode: 'by',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/by.svg',
        },
        'be': {
            language: 'Belgian',
            languageCode: 'be',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/be.svg',
        },
        'bg': {
            language: 'Bulgarian',
            languageCode: 'bg ',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/bg.svg',
        },
        'cn': {
            language: 'Chinese',
            languageCode: 'cn',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/cn.svg',
        },
        'hr': {
            language: 'Croatian',
            languageCode: 'hr',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/hr.svg',
        },
        'cz': {
            language: 'Czech',
            languageCode: 'cz',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/cz.svg',
        },
        'dk': {
            language: 'Danish',
            languageCode: 'dk',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/dk.svg',
        },
        'eg': {
            language: 'Egyptian',
            languageCode: 'eg',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/eg.svg',
        },
        'fi': {
            language: 'Finnish',
            languageCode: 'fi',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/fi.svg',
        },
        'fr': {
            language: 'French',
            languageCode: 'fr',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/fr.svg',
        },
        'de': {
            language: 'German',
            languageCode: 'de',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/de.svg',
        },
        'gr': {
            language: 'Greek',
            languageCode: 'gr',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/gr.svg',
        },
        'hu': {
            language: 'Hungarian',
            languageCode: 'hu',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/hu.svg',
        },
        'is': {
            language: 'Icelandic',
            languageCode: 'is',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/is.svg',
        },

        'in': {
            language: 'Indian',
            languageCode: 'in',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/in.svg',
        },
        'ir': {
            language: 'Iranian',
            languageCode: 'ir',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/ir.svg',
        },
        'it': {
            language: 'Italian',
            languageCode: 'it',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/it.svg',
        },
        'jp': {
            language: 'Japanese',
            languageCode: 'jp',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/jp.svg',
        },
        'nl': {
            language: 'Dutch',
            languageCode: 'nl',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/nl.svg',
        },
        'no': {
            language: 'Norwegian',
            languageCode: 'no',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/no.svg',
        },
        'ph': {
            language: 'Philippine',
            languageCode: 'ph',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/ph.svg',
        },
        'pl': {
            language: 'Polish',
            languageCode: 'pl',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/pl.svg',
        },
        'pt': {
            language: 'Portughese',
            languageCode: 'pt',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/pt.svg',
        },
        'ru': {
            language: 'Russian',
            languageCode: 'ru',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/ru.svg',
        },
        'kr': {
            language: 'Korean',
            languageCode: 'kr',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/kr.svg',
        },
        'es': {
            language: 'Spanish',
            languageCode: 'es',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/es.svg',
        },
        'se': {
            language: 'Swedish',
            languageCode: 'se',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/se.svg',
        },
        'th': {
            language: 'Thai',
            languageCode: 'th',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/th.svg',
        },
        'en': {
            language: 'English',
            languageCode: 'en',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/gb.svg',
        },
        'undefined': {
            language: 'Undefined',
            languageCode: 'undefined',
            flagImg: 'https://flagicons.lipis.dev/flags/4x3/xx.svg',
        },



    }

});

export { store };

