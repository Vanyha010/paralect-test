import { AppShell, AppShellNavbar, useMantineTheme } from '@mantine/core';
import { Outlet } from 'react-router-dom';
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
                    width: 280,
                    padding: 25,
                    position: 'static',
                }}
            >
                <LogoLink />
            </AppShellNavbar>
            <Outlet />
        </AppShell>
    );
}

export default Layout;
