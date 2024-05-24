import { Box, Loader } from '@mantine/core';
import { useEffect, useState } from 'react';
import { MovieData, MovieRated } from '../../shared/types/types';
import MovieCard from '../../entities/movieCard/movieCard';
import { getMovieStorage } from '../../app/services/localStorageHandler';
import MainPageFallback from '../../entities/fallbacks/mainPageFallback';

type PropsType = {
    moviesList: MovieData[];
    isLoading: boolean;
};

function MoviesList(props: PropsType) {
    const { moviesList, isLoading } = props;
    const [ratedMoviesList, setRatedMovies] = useState<MovieRated[]>([]);
    useEffect(() => {
        const ratedMovies = getMovieStorage();
        if (ratedMovies) {
            setRatedMovies(JSON.parse(ratedMovies));
        }
    }, []);

    if (isLoading) {
        return <Loader color="#9854F6" size={100} />;
    }

    return (
        <Box className="moviesList">
            {moviesList.length > 0 ? (
                moviesList.map((item: MovieData) => {
                    const movieRated = ratedMoviesList.find(
                        (elem: MovieRated) => elem.data.id === item.id
                    );
                    if (movieRated) {
                        return <MovieCard data={item} key={item.id} rating={movieRated.rating} />;
                    }

                    return <MovieCard data={item} key={item.id} rating={0} />;
                })
            ) : (
                <MainPageFallback />
            )}
        </Box>
    );
}

export default MoviesList;
