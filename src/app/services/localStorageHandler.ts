import { MovieRated, MovieShortData } from '../../shared/types/types';

function addMovieToStorage(data: MovieShortData, rating: number) {
    const ratedMovies = localStorage.getItem('ratedMovies');
    if (ratedMovies) {
        const ratedMoviesList = JSON.parse(ratedMovies);
        let movie = ratedMoviesList.find((item: MovieRated) => item.data.id === data.id);
        if (movie) {
            movie.rating = rating;
        } else {
            movie = {
                data,
                rating,
            };
            ratedMoviesList.push(movie);
        }

        localStorage.setItem('ratedMovies', JSON.stringify(ratedMoviesList));
    } else {
        const movie = {
            data,
            rating,
        };
        localStorage.setItem('ratedMovies', JSON.stringify([movie]));
        console.log('sdfsd');
    }
}

function getMovieStorage() {
    const ratedMovies = localStorage.getItem('ratedMovies');

    return ratedMovies;
}

function removeMovieFromStorage(id: number) {
    const ratedMovies = localStorage.getItem('ratedMovies');
    if (ratedMovies) {
        const ratedMoviesList: MovieRated[] = JSON.parse(ratedMovies);
        const movieIndex = ratedMoviesList.map((item) => item.data.id).indexOf(id);
        if (movieIndex !== -1) {
            ratedMoviesList.splice(movieIndex, 1);
            localStorage.setItem('ratedMovies', JSON.stringify(ratedMoviesList));
        }
    }
}

export { addMovieToStorage, getMovieStorage, removeMovieFromStorage };
