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

    async getMovies() {
        const data = await axios.get(`${this.host}/discover/movie`, this.options);

        const result = await data.data;

        return result;
    },
};

export default requestBuilder;
