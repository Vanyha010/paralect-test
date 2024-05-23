import { MovieRated } from '../../shared/types/types';

function addMovieToStorage(id: number, rating: number) {
    const ratedMovies = localStorage.getItem('ratedMovies');
    if (ratedMovies) {
        const ratedMoviesList = JSON.parse(ratedMovies);
        console.log(ratedMoviesList);
        let movie = ratedMoviesList.find((item: MovieRated) => item.id === id);
        if (movie) {
            movie.rating = rating;
        } else {
            movie = {
                id,
                rating,
            };
            ratedMoviesList.push(movie);
        }

        localStorage.setItem('ratedMovies', JSON.stringify(ratedMoviesList));
    } else {
        const movie = {
            id,
            rating,
        };
        localStorage.setItem('ratedMovies', JSON.stringify([movie]));
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
        const movieIndex = ratedMoviesList.map((item) => item.id).indexOf(id);
        if (movieIndex !== -1) {
            ratedMoviesList.splice(movieIndex, 1);
            localStorage.setItem('ratedMovies', JSON.stringify(ratedMoviesList));
        }
    }
}

export { addMovieToStorage, getMovieStorage, removeMovieFromStorage };
