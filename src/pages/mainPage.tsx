import { AppShellMain } from '@mantine/core';
import { useEffect, useState } from 'react';
import { MovieItem } from '../shared/types/types';
import MovieCardList from '../widgets/movieCardList/movieCardList';
import styles from './mainpage.module.css';

type MovieListType = {
    page: number;
    results: MovieItem[];
    total_pages: number;
    total_results: number;
};

function MainPage() {
    const [moviesList, setMoviesList] = useState<MovieItem[]>([]);

    const fetchData = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.CTP_API_KEY}`)
            .then((data) => data.json())
            .then((res: MovieListType) => setMoviesList(res.results));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AppShellMain className={styles.main}>
            <MovieCardList props={moviesList} />
        </AppShellMain>
    );
}

export default MainPage;
