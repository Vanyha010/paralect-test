import { Box } from '@mantine/core';
import MovieCard from '../../entities/movieCard/movieCard';
import { MovieRated } from '../../shared/types/types';

type PropsType = {
    movieItems: MovieRated[];
};

function RatedMoviesList(props: PropsType) {
    const { movieItems } = props;

    return (
        <Box className="moviesList">
            {movieItems?.map((item) => (
                <MovieCard data={item.data} key={item.data.id} rating={item.rating} />
            ))}
        </Box>
    );
}

export default RatedMoviesList;
