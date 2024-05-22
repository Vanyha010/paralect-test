import { QueryParamsStateType } from '../../../shared/types/types';
import requestBuilder from '../requestBuilder';

export type GenreType = {
    id: number;
    name: string;
};

type GenresStateType = {
    genresMap: {
        genres: GenreType[];
    };
};

type GenresActionType = {
    type?: string;
    payload?: GenresStateType;
};

// This is map of all movie genres and its Ids
const initialGenreState: GenresStateType = {
    genresMap: await requestBuilder.getGenresNames(),
};

// This reducer hass no purpose, it exists in order to let create a state object in store
export const genreListReducer = (
    state: GenresStateType = initialGenreState,
    action: GenresActionType = {}
) => {
    switch (action.type) {
        case 'NEVER_WILL_BE_CALLED':
            return action.payload;
        default:
            return state;
    }
};

const initialQueryParamsState: QueryParamsStateType = {
    genresSelected: [],
    releaseYearSelected: '',
    minRatingSelected: '',
    maxRatingSelected: '',
};

type QueryParamsActionType = {
    type?: string;
    payload?: string[];
};

export const queryParamsReducer = (
    state: QueryParamsStateType = initialQueryParamsState,
    action: QueryParamsActionType = {}
) => {
    switch (action.type) {
        case 'SET_GENRES':
            return {
                ...state,
                genresSelected: action.payload,
            };
        case 'SET_YEAR':
            return {
                ...state,
                releaseYearSelected: action.payload,
            };
        case 'SET_LOWER_RATING':
            return {
                ...state,
                minRatingSelected: action.payload,
            };
        case 'SET_HIGHER_RATING':
            return {
                ...state,
                maxRatingSelected: action.payload,
            };
        case 'CLEAR_QUERY':
            return {
                ...initialQueryParamsState,
            };
        default:
            return state;
    }
};
