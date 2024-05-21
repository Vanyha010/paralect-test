import requestBuilder from '../requestBuilder';

export type GenreType = {
    id: number;
    name: string;
};

type GenresStateType = {
    genresMap: GenreType[];
};

type GenresActionType = {
    type?: string;
    payload?: GenresStateType;
};

const initialGenreState: GenresStateType = {
    genresMap: await requestBuilder.getGenresNames(),
};

export const genreReducer = (
    state: GenresStateType = initialGenreState,
    action: GenresActionType = {}
) => {
    switch (action.type) {
        case 'SET_GENRES':
            return {
                ...state,
                genresMap: action.payload,
            };
        default:
            return state;
    }
};
