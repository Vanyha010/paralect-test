import { Box, Image, Text, Title, useMantineTheme } from '@mantine/core';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { MovieItem } from '../../shared/types/types';
import noPoster from '../../assets/noposter.png';
import starYellow from '../../assets/star-yellow.svg';
import starNotRated from '../../assets/star-not-rated.svg';
import styles from './moviecard.module.css';
import { IRootState } from '../../app/services/store/store';
import { GenreType } from '../../app/services/store/reducers';

const imgPath = 'http://image.tmdb.org/t/p/w500';

function MovieCard({ props }: { props: MovieItem }) {
    const releaseYear = new Date(props.release_date).getFullYear();
    const theme = useMantineTheme();
    const genresMap = useSelector((state: IRootState) => state.genresList?.genresMap.genres);
    const [genresNames, setGenreNames] = useState<string[]>([]);

    const getGenresNames = () => {
        // This function sets 3 (or less) genres in the card and converts genre Id's into understandable names
        if (Array.isArray(genresMap) && Array.isArray(props.genre_ids)) {
            const arr: string[] = [];
            props.genre_ids.forEach((id) => {
                genresMap.forEach((item: GenreType) => {
                    if (item.id === id && arr.length < 3) {
                        arr.push(item.name);
                    }
                });
            });
            setGenreNames(arr);
        }
    };

    useEffect(() => {
        getGenresNames();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box className={styles.movieCard}>
            <Box className={styles.movieCardContent}>
                <Image
                    src={`${imgPath}${props.poster_path}`}
                    fallbackSrc={noPoster}
                    className={styles.movieCardImage}
                    fit="contain"
                    w={120}
                    h="100%"
                />
                <Box className={styles.movieCardDescription}>
                    <Box className={styles.movieCardGeneral}>
                        <Title
                            order={6}
                            fz={20}
                            lh={1.2}
                            fw={600}
                            style={{
                                color: theme.other.purple500,
                            }}
                        >
                            {props.original_title}
                        </Title>
                        <Text>{releaseYear || 'Unknown year'}</Text>
                        <Box className={styles.rating}>
                            <img src={starYellow} alt="Rating" />
                            <Text fw={600}>{props.vote_average}</Text>
                            <Text style={{ color: theme.other.grey600 }}>({props.vote_count})</Text>
                        </Box>
                    </Box>
                    <Box className={styles.movieCardGenres}>
                        <span className={styles.genresTitle}>Genres</span>
                        <span>{genresNames.join(', ')}</span>
                    </Box>
                </Box>
            </Box>
            <Box>
                <img src={starNotRated} alt="Rate" />
            </Box>
        </Box>
    );
}

export default MovieCard;
