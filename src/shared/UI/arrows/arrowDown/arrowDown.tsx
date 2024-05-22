import arrowDownSvg from '../../../../assets/arrow-down.svg';
import styles from './arrowdown.module.css';

type PropsType = {
    isOpened: boolean;
};

function ArrowDown(props: PropsType) {
    const { isOpened } = props;

    return (
        <img
            src={arrowDownSvg}
            alt="Select"
            className={[styles.arrowDown, isOpened ? styles.opened : ''].join(' ')}
        />
    );
}

export default ArrowDown;
