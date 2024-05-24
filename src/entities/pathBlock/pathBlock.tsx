import { Link } from 'react-router-dom';
import styles from './pathBlock.module.css';

type PropsType = {
    movieName: string;
};

function PathBlock(props: PropsType) {
    const { movieName } = props;

    return (
        <div className={styles.pathBlock}>
            <Link to="/movies" className={styles.pathElement}>
                Movies
            </Link>
            <span>/</span>
            <span className={styles.pathElement}>{movieName}</span>
        </div>
    );
}

export default PathBlock;
