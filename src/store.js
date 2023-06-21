import { reactive } from 'vue';

const store = reactive({
    searchText: "",
    loading: true,
});

export { store };