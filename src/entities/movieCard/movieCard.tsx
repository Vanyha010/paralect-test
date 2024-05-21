import { Box, Card, Text, Title, useMantineTheme } from '@mantine/core';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { MovieItem } from '../../shared/types/types';
import altImg from '../../assets/noposter.svg';
import starSvg from '../../assets/star-yellow.svg';
import styles from './moviecard.module.css';
import { IRootState } from '../../app/services/store/store';
import { GenreType } from '../../app/services/store/reducers';

const imgPath = 'http://image.tmdb.org/t/p/w500';

function MovieCard({ props }: { props: MovieItem }) {
    const releaseYear = new Date(props.release_date).getFullYear();
    const theme = useMantineTheme();
    const genresMap = useSelector((state: IRootState) => state.genres.genresMap.genres);
    const [genresNames, setGenreNames] = useState<string[]>([]);

    const getGenresNames = () => {
        console.log(genresMap);
        const arr: string[] = [];
        props.genre_ids.forEach((id) => {
            genresMap.forEach((item: GenreType) => {
                if (item.id === id && arr.length < 3) {
                    arr.push(item.name);
                }
            });
        });
        setGenreNames(arr);
    };

    useEffect(() => {
        getGenresNames();
    });

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
                    <Box className={styles.movieCardGenres}>
                        <span>Genres: </span>
                        <span>{genresNames.join(', ')}</span>
                    </Box>
                </Box>
            </Box>
        </Card>
    );
}

export default MovieCard;
