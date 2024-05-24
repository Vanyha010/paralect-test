import { getMovieStorage } from '../../app/services/localStorageHandler';
import { MovieData, MovieFullData, MovieRated, MovieShortData } from '../types/types';

function getMovieDuration(runtime: number) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    if (hours > 0) {
        return `${hours}h ${minutes.toString().padStart(2, '0')}m`;
    }

    if (minutes > 0) {
        return `${minutes}m`;
    }

    return 'Unknown';
}

function getPremiereDate(release_date: string) {
    const date = new Date(release_date);
    const year = date.getFullYear();
    const month = date.toLocaleString('en-us', { month: 'long' });
    const day = date.getDay() + 1;

    return `${month} ${day}, ${year}`;
}

function getBudget(budget: number) {
    if (!budget) {
        return 'Unknown';
    }

    const stringBudget = budget.toString();
    let result = '';
    let j = 1;
    for (let i = stringBudget.length - 1; i >= 0; i -= 1) {
        j += 1;
        result = stringBudget[i] + result;
        if (j === 4 && i !== 0) {
            j = 1;
            result = `,${result}`;
        }
    }

    return `$${result}`;
}

function getDataToSave(data: MovieData | MovieFullData) {
    let genres: number[] = [];
    if ('genre_ids' in data) {
        genres = data.genre_ids;
    }

    if ('genres' in data) {
        data.genres.forEach((genre) => {
            genres.push(genre.id);
        });
    }

    const dataToSave: MovieShortData = {
        id: data.id,
        original_title: data.original_title,
        poster_path: data.poster_path,
        release_date: data.release_date,
        vote_average: data.vote_average,
        vote_count: data.vote_count,
        genre_ids: genres,
    };

    return dataToSave;
}

function getMovieRating(id: number) {
    let result;
    const ratedMovies = getMovieStorage();
    if (ratedMovies) {
        const ratedMoviesArray = JSON.parse(ratedMovies);
        ratedMoviesArray.forEach((item: MovieRated) => {
            if (item.data.id === id) {
                result = item.rating;
            }
        });
    }

    return result;
}

export { getMovieDuration, getPremiereDate, getBudget, getDataToSave, getMovieRating };
