import styles from './starIcon.module.css';

type PropsType = {
    active: boolean;
    click: () => void;
};

function StarIcon({ active, click }: PropsType) {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" onClick={click}>
            <path
                d="M14 20.7083L6.79929 24.4941L8.17479 16.4756L2.34146 10.7974L10.3915 9.63078L13.9918 2.33561L17.5921 9.63078L25.6421 10.7974L19.8088 16.4756L21.1843 24.4941L14 20.7083Z"
                // fill="#D5D6DC"
                // stroke="#D5D6DC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={active ? styles.rated : styles.notRated}
            />
        </svg>
    );
}

export default StarIcon;
