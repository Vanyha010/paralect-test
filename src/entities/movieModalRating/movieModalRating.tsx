import { Modal, Rating, Title } from '@mantine/core';
import { useState } from 'react';
import PrimaryButton from '../../shared/UI/buttons/primaryButton/primaryButton';
import TextButton from '../../shared/UI/buttons/textButton/textButton';
import styles from './movieModalRating.module.css';
import { addMovieToStorage, removeMovieFromStorage } from '../../app/services/localStorageHandler';
import StarIcon from '../../shared/UI/starIcon/starIcon';

type PropsType = {
    movieName: string;
    movieId: number;
    opened: boolean;
    openModal: () => void;
    close: () => void;
    rated: boolean;
    setRated: React.Dispatch<React.SetStateAction<boolean>>;
};

function MovieModalRating(props: PropsType) {
    const { movieName, movieId, opened, openModal, close, rated, setRated } = props;
    const [value, setValue] = useState(0);

    const removeMovie = () => {
        removeMovieFromStorage(movieId);
        setRated(false);
        close();
    };

    const saveMovie = () => {
        if (value > 0) {
            addMovieToStorage(movieId, value);
            setRated(true);
            close();
        }
    };

    return (
        <div>
            <Modal title="Your rating" opened={opened} onClose={close} centered size="sm">
                <Title order={5}>{movieName}</Title>
                <Rating value={value} onChange={setValue} count={10} size="xl" />
                <div className={styles.buttonBlock}>
                    <PrimaryButton text="Save" click={saveMovie} />
                    <TextButton text="Remove rating" click={removeMovie} disabled={value === 0} />
                </div>
            </Modal>
            <StarIcon active={rated} click={openModal} />
        </div>
    );
}

export default MovieModalRating;
