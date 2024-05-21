import { Flex } from '@mantine/core';
import { MovieItem } from '../../shared/types/types';
import MovieCard from '../../entities/movieCard/movieCard';

function MovieCardList({ props }: { props: MovieItem[] }) {
    return (
        <Flex wrap="wrap">
            {props.map((item: MovieItem) => (
                <MovieCard props={item} key={item.id} />
            ))}
        </Flex>
    );
}

export default MovieCardList;
