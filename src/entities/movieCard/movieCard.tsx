import { Box, Card, Text, Title, useMantineTheme } from '@mantine/core';
import { MovieItem } from '../../shared/types/types';
import altImg from '../../assets/noposter.svg';
import starSvg from '../../assets/star-yellow.svg';
import styles from './moviecard.module.css';

const imgPath = 'http://image.tmdb.org/t/p/w500';

function MovieCard({ props }: { props: MovieItem }) {
    const releaseYear = new Date(props.release_date).getFullYear();
    const theme = useMantineTheme();

    return (
        <Card className={styles.movieCard}>
            <Box className={styles.movieCardContent}>
                <img
                    src={`${imgPath}${props.poster_path}`}
                    alt={altImg}
                    className={styles.movieCardImage}
                />
                <Box className={styles.movieCardDescription}>
                    <Box>
                        <Title
                            order={6}
                            fz={20}
                            fw={600}
                            style={{
                                color: theme.other.purple500,
                            }}
                        >
                            {props.original_title}
                        </Title>
                        <Text>{releaseYear}</Text>
                        <Box className={styles.rating}>
                            <img src={starSvg} alt="Rating" />
                            <Text>{props.vote_average}</Text>
                            <Text>({props.vote_count})</Text>
                        </Box>
                    </Box>
                    <Text>Genres: {props.genre_ids}</Text>
                </Box>
            </Box>
        </Card>
    );
}

export default MovieCard;
