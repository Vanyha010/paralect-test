import styles from './arrowdown.module.css';

type PropsType = {
    isOpened: boolean;
};

function ArrowDown(props: PropsType) {
    const { isOpened } = props;

    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            // This line will return array of CSS class names: 'arrowDown' (necessarily) and 'opened' (optional)
            className={[styles.arrowDown, isOpened ? styles.opened : ''].join(' ')}
        >
            <path
                d="M3.33325 6L7.47929 9.55374C7.77888 9.81054 8.22096 9.81054 8.52055 9.55374L12.6666 6"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
}

export default ArrowDown;
