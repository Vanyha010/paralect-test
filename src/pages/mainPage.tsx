import { AppShellMain } from '@mantine/core';
import { useEffect, useState } from 'react';
import { MovieItem } from '../shared/types/types';
import MovieCardList from '../widgets/movieCardList/movieCardList';
import styles from './mainpage.module.css';
import requestBuilder from '../app/services/requestBuilder';

type MovieListType = {
    page: number;
    results: MovieItem[];
    total_pages: number;
    total_results: number;
};

function MainPage() {
    const [moviesList, setMoviesList] = useState<MovieItem[]>([]);

    const fetchMovies = async () => {
        const response: MovieListType = await requestBuilder.getMovies();
        setMoviesList(response.results);
    };

    useEffect(() => {
        fetchMovies();
        requestBuilder.getGenresNames().then((res) => console.log(res));
    }, []);

    return (
        <AppShellMain className={styles.main}>
            <MovieCardList props={moviesList} />
        </AppShellMain>
    );
}

export default MainPage;
