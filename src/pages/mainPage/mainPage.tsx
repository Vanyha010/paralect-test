import { AppShellMain, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { MovieData } from '../../shared/types/types';
import MovieList from '../../widgets/moviesList/moviesList';
import styles from './mainpage.module.css';
import requestBuilder from '../../app/services/requestBuilder';
import useQueryString from '../../shared/hooks/useQueryString';
import MovieSelectBar from '../../widgets/movieSelectBar/movieSelectBar';
import SortSelect from '../../features/sortSelect/sortSelect';

type MovieListType = {
    page: number;
    results: MovieData[];
    total_pages: number;
    total_results: number;
};

function MainPage() {
    const [moviesList, setMoviesList] = useState<MovieData[]>([]);
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
            <SortSelect />
            <MovieList props={moviesList} />
        </AppShellMain>
    );
}

export default MainPage;
