import { AppShellMain, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
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
    const [isLoading, setIsLoading] = useState(false);
    const [moviesList, setMoviesList] = useState<MovieData[]>([]);
    const queryString = useQueryString();
    const navigate = useNavigate();

    const fetchMovies = async (query: string) => {
        setIsLoading(true);
        try {
            const response: MovieListType = await requestBuilder.getMovies(query);
            setMoviesList(response.results);
            setIsLoading(false);
        } catch (e) {
            if (e instanceof AxiosError) {
                if (e.response?.status === 404) {
                    navigate('/404');
                }
            }
        }
    };

    useEffect(() => {
        fetchMovies(queryString);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryString]);

    return (
        <AppShellMain className={styles.main}>
            <Title order={1} fz={32}>
                Movies
            </Title>
            <MovieSelectBar />
            <SortSelect />
            <MovieList moviesList={moviesList} isLoading={isLoading} />
        </AppShellMain>
    );
}

export default MainPage;
