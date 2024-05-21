import { AppShellMain, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { MovieItem } from '../../shared/types/types';
import MovieCardList from '../../widgets/movieCardList/movieCardList';
import styles from './mainpage.module.css';
import requestBuilder from '../../app/services/requestBuilder';
import useQueryString from '../../shared/hooks/useQueryString';
import MovieSelectBar from '../../widgets/movieSelectBar/movieSelectBar';

type MovieListType = {
    page: number;
    results: MovieItem[];
    total_pages: number;
    total_results: number;
};

function MainPage() {
    const [moviesList, setMoviesList] = useState<MovieItem[]>([]);
    const queryString = useQueryString();

    const fetchMovies = async (query: string) => {
        const response: MovieListType = await requestBuilder.getMovies(query);
        setMoviesList(response.results);
    };

    useEffect(() => {
        fetchMovies(queryString);
    }, [queryString]);

    return (
        <AppShellMain className={styles.main}>
            <Title order={1} fz={32}>
                Movies
            </Title>
            <MovieSelectBar />
            <MovieCardList props={moviesList} />
        </AppShellMain>
    );
}

export default MainPage;
