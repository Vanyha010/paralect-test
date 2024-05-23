import { Box } from '@mantine/core';
import { useEffect, useState } from 'react';
import { MovieItem, MovieRated } from '../../shared/types/types';
import MovieCard from '../../entities/movieCard/movieCard';
import { getMovieStorage } from '../../app/services/localStorageHandler';

function MoviesList({ props }: { props: MovieItem[] }) {
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
                props.map((item: MovieItem) => {
                    const movieRated = ratedMoviesList.find(
                        (elem: MovieRated) => elem.id === item.id
                    );
                    if (movieRated) {
                        return <MovieCard data={item} key={item.id} rating={movieRated.rating} />;
                    }

                    return <MovieCard data={item} key={item.id} rating={0} />;
                })
            ) : (
                <div>No movies found</div>
            )}
        </Box>
    );
}

export default MoviesList;
