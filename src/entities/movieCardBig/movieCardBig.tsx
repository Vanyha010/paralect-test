import { Box, Title, Image, Text, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { MovieFullData } from '../../shared/types/types';
import styles from './movieCardBig.module.css';
import imgPath from '../../shared/variables/variables';
import starYellow from '../../assets/star-yellow.svg';
import noPoster from '../../assets/noposter.png';
import { getBudget, getMovieDuration, getPremiereDate } from '../../shared/functions/functions';
import MovieModalRating from '../movieModalRating/movieModalRating';

type PropsType = {
    data: MovieFullData;
    rating: number;
};

function MovieCardBig(props: PropsType) {
    const { data, rating } = props;
    const [rated, setRated] = useState(rating > 0);
    const [opened, { open, close }] = useDisclosure(false);

    const releaseYear = new Date(data.release_date).getFullYear();
    const duration = getMovieDuration(data.runtime);
    const premiere = getPremiereDate(data.release_date);
    const budget = getBudget(data.budget);
    const revenue = getBudget(data.revenue);
    const genres = data.genres.map((item: { id: number; name: string }) => item.name);
    const theme = useMantineTheme();

    return (
        <Box className={styles.movieCard}>
            <Box className="movieCardContent">
                <Image
                    src={`${imgPath}${data.poster_path}`}
                    fallbackSrc={noPoster}
                    className={styles.movieCardImage}
                    fit="fill"
                    w={250}
                    h="100%"
                    max-height={352}
                />
                <Box className="movieCardDescription">
                    <Box className="movieCardGeneral">
                        <Title
                            order={6}
                            fz={20}
                            lh={1.2}
                            fw={600}
                            style={{
                                color: theme.other.purple500,
                            }}
                        >
                            {data.original_title}
                        </Title>

                        <Text>{releaseYear || 'Unknown year'}</Text>
                        <Box className="movieCardRating">
                            <img src={starYellow} alt="Rating" />
                            <Text fw={600}>{data.vote_average}</Text>
                            <Text style={{ color: theme.other.grey600 }}>({data.vote_count})</Text>
                        </Box>
                    </Box>
                    <Box className="movieCardInfo">
                        <Box className="movieCardInfoTitles">
                            <div>Duration</div>
                            <div>Premiere</div>
                            <div>Budget</div>
                            <div>Gross worldwide</div>
                            <div>Genres</div>
                        </Box>
                        <Box className="movieCardInfoValues">
                            <div>{duration}</div>
                            <div>{premiere}</div>
                            <div>{budget}</div>
                            <div>{revenue}</div>
                            <span>{genres.join(', ')}</span>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <MovieModalRating
                data={data}
                opened={opened}
                close={close}
                openModal={open}
                rated={rated}
                setRated={setRated}
                rating={rating}
            />
        </Box>
    );
}

export default MovieCardBig;
