import { AppShell, AppShellNavbar, Flex, useMantineTheme } from '@mantine/core';
import { Link, Outlet } from 'react-router-dom';
import styles from './layout.module.css';
import LogoLink from '../../shared/logoLink/logoLink';

function Layout() {
    const theme = useMantineTheme();

    return (
        <AppShell className={styles.container}>
            <AppShellNavbar
                withBorder={false}
                style={{
                    backgroundColor: theme.other.purple100,
                    minWidth: 280,
                    width: 280,
                    padding: 25,
                    position: 'static',
                }}
            >
                <LogoLink />
                <Flex gap={12} direction="column" mt={80}>
                    <Link to="/" className={styles.link}>
                        Movies
                    </Link>
                    <Link to="/" className={styles.link}>
                        Rated movies
                    </Link>
                </Flex>
            </AppShellNavbar>
            <Outlet />
        </AppShell>
    );
}

export default Layout;
