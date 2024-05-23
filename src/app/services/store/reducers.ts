import { GenreType, QueryParamsStateType } from '../../../shared/types/types';
import requestBuilder from '../requestBuilder';

type GenresStateType = {
    genresMap: {
        genres: GenreType[];
    };
};

type GenresActionType = {
    type?: string;
    payload?: GenresStateType;
};

const test = async () => {
    try {
        const data = await requestBuilder.getGenresNames();

        return data;
    } catch {
        return {
            genres: [],
        };
    }
};

// This is map of all movie genres and its Ids
const initialGenreState: GenresStateType = {
    genresMap: await test(),
    // genresMap: await requestBuilder.getGenresNames(),
};

// This reducer hass no purpose, it exists in order to let create a state object in store
export const genreListReducer = (
    state: GenresStateType = initialGenreState,
    action: GenresActionType = {}
) => {
    switch (action.type) {
        case 'SET_GENRES_LIST':
            return {
                ...state,
                genres: action.payload,
            };
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

type SortMethodState = {
    sortMethod: string;
};

const initialSortMethod: SortMethodState = {
    sortMethod: '',
};

type SortMethodAction = {
    type?: string;
    payload?: string;
};

export const sortMethodReducer = (
    state: SortMethodState = initialSortMethod,
    action: SortMethodAction = {}
) => {
    switch (action.type) {
        case 'SET_SORT_METHOD':
            return {
                ...state,
                sortMethod: action.payload,
            };
        default:
            return state;
    }
};
