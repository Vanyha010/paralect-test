import { Box, Modal, Rating, Title } from '@mantine/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PrimaryButton from '../../shared/UI/buttons/primaryButton/primaryButton';
import TextButton from '../../shared/UI/buttons/textButton/textButton';
import styles from './movieModalRating.module.css';
import {
    addMovieToStorage,
    getMovieStorage,
    removeMovieFromStorage,
} from '../../app/services/localStorageHandler';
import StarIcon from '../../shared/UI/starIcon/starIcon';
import { MovieData } from '../../shared/types/types';

type PropsType = {
    data: MovieData;
    opened: boolean;
    openModal: () => void;
    close: () => void;
    rated: boolean;
    setRated: React.Dispatch<React.SetStateAction<boolean>>;
    rating: number;
};

function MovieModalRating(props: PropsType) {
    const { data, opened, openModal, close, rated, setRated, rating } = props;
    const [value, setValue] = useState(rating);
    const dispatch = useDispatch();

    const refreshMovieList = () => {
        const newMovieList = getMovieStorage();
        if (newMovieList) {
            const newMovieListArray = JSON.parse(newMovieList);
            dispatch({
                type: 'REFRESH_RATED_MOVIES',
                payload: newMovieListArray,
            });
        }
    };

    const removeMovie = () => {
        removeMovieFromStorage(data.id);
        setRated(false);
        close();
        refreshMovieList();
    };

    const saveMovie = () => {
        if (value > 0) {
            addMovieToStorage(data, value);
            setRated(true);
            close();
            refreshMovieList();
        }
    };

    return (
        <Box
            className={styles.movieModalRating}
            title="Rate this movie"
            onClick={(e) => e.stopPropagation()}
        >
            <Modal title="Your rating" opened={opened} onClose={close} centered size="sm">
                <Title order={5}>{data.original_title}</Title>
                <Rating value={value} onChange={setValue} count={10} size="xl" />
                <div className={styles.buttonBlock}>
                    <PrimaryButton text="Save" click={saveMovie} />
                    <TextButton text="Remove rating" click={removeMovie} disabled={value === 0} />
                </div>
            </Modal>
            <StarIcon active={rated} click={openModal} />
            <div className={styles.ratingValue}>{rated && value}</div>
        </Box>
    );
}

export default MovieModalRating;
