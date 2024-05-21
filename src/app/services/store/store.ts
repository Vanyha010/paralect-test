import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { genreListReducer, queryParamsReducer } from './reducers';

const rootReducer = combineReducers({
    genresList: genreListReducer, // List of all genres and their Ids
    queryParams: queryParamsReducer,
});

const store = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type IRootState = ReturnType<typeof rootReducer>;
export { store };
