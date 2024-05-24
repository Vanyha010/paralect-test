import { Box } from '@mantine/core';
import { useEffect, useState } from 'react';
import { MovieData, MovieRated } from '../../shared/types/types';
import MovieCard from '../../entities/movieCard/movieCard';
import { getMovieStorage } from '../../app/services/localStorageHandler';
import MainPageFallback from '../../entities/fallbacks/mainPageFallback';

function MoviesList({ props }: { props: MovieData[] }) {
    const [ratedMoviesList, setRatedMovies] = useState<MovieRated[]>([]);
    useEffect(() => {
        const ratedMovies = getMovieStorage();
        if (ratedMovies) {
            setRatedMovies(JSON.parse(ratedMovies));
        }
    }, []);

    return (
        <Box className="moviesList">
            {props.length > 0 ? (
                props.map((item: MovieData) => {
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
