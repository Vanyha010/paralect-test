import { AppShell, AppShellNavbar, Flex, useMantineTheme } from '@mantine/core';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { AxiosError } from 'axios';
import styles from './layout.module.css';
import LogoLink from '../../shared/UI/logoLink/logoLink';
import requestBuilder from '../services/requestBuilder';

function Layout() {
    const theme = useMantineTheme();
    const dispatch = useDispatch();
    const location = useLocation();
    const isMoviesPage = location.pathname.includes('movies');

    const fetchGenres = async () => {
        try {
            const data = await requestBuilder.getGenresNames();
            dispatch({
                type: 'SET_GENRES_LIST',
                payload: data.genres,
            });
        } catch (e) {
            if (e instanceof AxiosError) {
                console.error(e);
            } else {
                throw e;
            }
        }
    };

    useEffect(() => {
        fetchGenres();
    });

    return (
        <AppShell className={styles.container}>
            <AppShellNavbar
                className={styles.test}
                withBorder={false}
                style={{
                    backgroundColor: theme.other.purple100,
                    minWidth: 280,
                    width: 280,
                    padding: 25,
                    paddingTop: 35,
                    position: 'static',
                    height: 'inherit',
                }}
            >
                <LogoLink />
                <Flex gap={12} direction="column" mt={80}>
                    <Link to="/movies" className={isMoviesPage ? styles.active : styles.link}>
                        Movies
                    </Link>
                    <Link to="/rated" className={isMoviesPage ? styles.link : styles.active}>
                        Rated movies
                    </Link>
                </Flex>
            </AppShellNavbar>
            <Outlet />
        </AppShell>
    );
}

export default Layout;
