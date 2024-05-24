import { AppShellMain } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import notFoundSvg from '../../assets/404.svg';
import styles from './notFoundPage.module.css';
import LogoLink from '../../shared/UI/logoLink/logoLink';
import PrimaryButton from '../../shared/UI/buttons/primaryButton/primaryButton';

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <AppShellMain className={styles.notFoundPage}>
            <LogoLink />
            <div className={styles.notFoundPageContent}>
                <img src={notFoundSvg} alt="Not found" />
                <div>We can&#39;t find the page you are looking for</div>
                <PrimaryButton text="Go home" click={() => navigate('/movies')} />
            </div>
        </AppShellMain>
    );
}

export default NotFoundPage;
