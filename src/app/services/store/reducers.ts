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
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
};

// These are genres numbers, selected in the movieSelectBar widget
const initialSelectedGenreState: string[] = [];

type SelectedGenresActionType = {
    type?: string;
    payload?: string[];
};

export const selectedGenreReducer = (
    state: string[] = initialSelectedGenreState,
    action: SelectedGenresActionType = {}
) => {
    switch (action.type) {
        case 'SET_SELECTED_GENRES':
            return action.payload;
        default:
            return state;
    }
};
