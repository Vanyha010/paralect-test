import { Modal, Rating, Title } from '@mantine/core';
import { useState } from 'react';
import PrimaryButton from '../../shared/UI/buttons/primaryButton/primaryButton';
import TextButton from '../../shared/UI/buttons/textButton/textButton';
import styles from './movieModalRating.module.css';

type PropsType = {
    movieName: string;
    opened: boolean;
    close: () => void;
};

function MovieModalRating(props: PropsType) {
    const { movieName, opened, close } = props;
    const [value, setValue] = useState(0);

    const log = () => {
        console.log(value);
    };

    return (
        <Modal title="Your rating" opened={opened} onClose={close} centered size="sm">
            <Title order={5}>{movieName}</Title>
            <Rating value={value} onChange={setValue} count={10} size="xl" />
            <div className={styles.buttonBlock}>
                <PrimaryButton text="Save" click={log} />
                <TextButton text="Remove rating" click={log} disabled={value === 0} />
            </div>
        </Modal>
    );
}

export default MovieModalRating;
