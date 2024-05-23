import { useEffect, useState } from 'react';
import { Box } from '@mantine/core';
import { MovieFullItem, MovieRated } from '../../shared/types/types';
import { getMovieStorage } from '../../app/services/localStorageHandler';
import requestBuilder from '../../app/services/requestBuilder';
import MovieCard from '../../entities/movieCard/movieCard';

function RatedMoviesList() {
    const [moviesData, setMoviesData] = useState<MovieFullItem[]>([]);

    const fetchMovies = async (ratedMoviesList: MovieRated[]) => {
        const moviesPromiseArray: Promise<MovieFullItem>[] = [];
        ratedMoviesList.forEach((ratedMovie) => {
            const data: Promise<MovieFullItem> = requestBuilder.getMovieById(ratedMovie.id);
            moviesPromiseArray.push(data);
        });

        const result = await Promise.allSettled(moviesPromiseArray);
        const moviesDataArray: MovieFullItem[] = [];
        result.forEach((item) => {
            if (item.status === 'fulfilled') {
                moviesDataArray.push(item.value);
            }
        });

        setMoviesData(moviesDataArray);
    };

    useEffect(() => {
        const ratedMovies = getMovieStorage();
        if (ratedMovies) {
            const ratedMoviesList = JSON.parse(ratedMovies);
            fetchMovies(ratedMoviesList);
        }
    }, [moviesData]);

    return (
        <Box className="moviesList">
            {moviesData.map((item) => (
                <MovieCard data={item} key={item.id} rating={3} />
            ))}
        </Box>
    );
}

export default RatedMoviesList;
