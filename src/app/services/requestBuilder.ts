import axios from 'axios';

const requestBuilder = {
    host: 'https://api.themoviedb.org/3',
    options: {
        headers: {
            Authorization: `Bearer ${import.meta.env.CTP_TOKEN}`,
        },
    },

    async getGenresNames() {
        const data = await axios.get(`${this.host}/genre/movie/list`, this.options);

        const result = await data.data;

        return result;
    },

    async getMovies(query: string = '') {
        const data = await axios.get(`${this.host}/discover/movie?${query}`, this.options);

        const result = await data.data;

        return result;
    },
};

export default requestBuilder;
