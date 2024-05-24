import { Box } from '@mantine/core';
import MovieCard from '../../entities/movieCard/movieCard';
import { MovieRated } from '../../shared/types/types';
import RatedPageFallback from '../../entities/fallbacks/ratedPageFallback';

type PropsType = {
    movieItems: MovieRated[];
};

function RatedMoviesList(props: PropsType) {
    const { movieItems } = props;

    if (movieItems.length === 0) return <RatedPageFallback />;

    return (
        <Box className="moviesList">
            {movieItems?.map((item) => (
                <MovieCard data={item.data} key={item.data.id} rating={item.rating} />
            ))}
        </Box>
    );
}

export default RatedMoviesList;
