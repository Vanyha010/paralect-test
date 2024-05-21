import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { genreListReducer, selectedGenreReducer } from './reducers';

const rootReducer = combineReducers({
    genresList: genreListReducer, // List of all genres and their Ids
    selectedGenres: selectedGenreReducer, // Genres numbers selected in the movieSelectBar widget
});

const store = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type IRootState = ReturnType<typeof rootReducer>;
export { store };
