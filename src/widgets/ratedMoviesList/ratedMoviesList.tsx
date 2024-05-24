import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mantine/core';
import { getMovieStorage } from '../../app/services/localStorageHandler';
import { IRootState } from '../../app/services/store/store';
import MovieCard from '../../entities/movieCard/movieCard';

function RatedMoviesList() {
    const storageList = getMovieStorage();
    const ratedMoviesArray = useSelector((state: IRootState) => state.ratedMovies.ratedMovies);
    const dispatch = useDispatch();

    useEffect(() => {
        if (storageList) {
            dispatch({
                type: 'REFRESH_RATED_MOVIES',
                payload: JSON.parse(storageList),
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box className="moviesList">
            {ratedMoviesArray?.map((item) => (
                <MovieCard data={item.data} key={item.data.id} rating={item.rating} />
            ))}
        </Box>
    );
}

export default RatedMoviesList;
