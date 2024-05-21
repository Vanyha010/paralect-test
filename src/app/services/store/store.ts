import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { genreReducer } from './reducers';

const store = () => {
    const rootReducer = combineReducers({
        genres: genreReducer,
    });

    return configureStore({
        reducer: rootReducer,
    });
};

const rootReducer = combineReducers({});
export type IRootState = ReturnType<typeof rootReducer>;
export { store };
