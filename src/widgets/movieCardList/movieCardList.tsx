import { Box } from '@mantine/core';
import { MovieItem } from '../../shared/types/types';
import MovieCard from '../../entities/movieCard/movieCard';
import styles from './moviecardlist.module.css';

function MovieCardList({ props }: { props: MovieItem[] }) {
    return (
        <Box className={styles.movieCardList}>
            {props.map((item: MovieItem) => (
                <MovieCard props={item} key={item.id} />
            ))}
        </Box>
    );
}

export default MovieCardList;
