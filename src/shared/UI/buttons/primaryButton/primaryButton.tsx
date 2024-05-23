import styles from './primaryButton.module.css';

type PropsType = {
    text: string;
    click: () => void;
};

function PrimaryButton(props: PropsType) {
    const { text, click } = props;

    return (
        <button onClick={click} className={styles.universalButton}>
            {text}
        </button>
    );
}

export default PrimaryButton;
