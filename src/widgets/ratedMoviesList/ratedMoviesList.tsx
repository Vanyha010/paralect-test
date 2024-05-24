import { Box } from '@mantine/core';
import MovieCard from '../../entities/movieCard/movieCard';
import { MovieRated } from '../../shared/types/types';
import MainPageFallback from '../../entities/fallbacks/mainPageFallback';

type PropsType = {
    movieItems: MovieRated[];
};

function RatedMoviesList(props: PropsType) {
    const { movieItems } = props;

    if (movieItems.length === 0) return <MainPageFallback />;

    return (
        <Box className="moviesList">
            {movieItems?.map((item) => (
                <MovieCard data={item.data} key={item.data.id} rating={item.rating} />
            ))}
        </Box>
    );
}

export default RatedMoviesList;
