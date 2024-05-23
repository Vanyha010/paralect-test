import styles from './textButton.module.css';

type PropsType = {
    text: string;
    click: () => void;
    // eslint-disable-next-line react/require-default-props
    disabled?: boolean;
};

function TextButton({ text, click, disabled = false }: PropsType) {
    return (
        <button onClick={click} className={styles.textButton} disabled={disabled}>
            {text}
        </button>
    );
}

export default TextButton;
