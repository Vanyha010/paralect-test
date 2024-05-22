import { Link } from 'react-router-dom';
import { Box, Image, useMantineTheme } from '@mantine/core';
import logo from '../../../assets/logo.svg';
import styles from './logolink.module.css';

function LogoLink() {
    const theme = useMantineTheme();

    return (
        <Link to="/" className={styles.logolink} style={{ color: theme.other.purple500 }}>
            <Image src={logo} alt="logo" />
            <Box fz={24} fw={600} style={{ fontFamily: 'Poppins' }}>
                ArrowFlicks
            </Box>
        </Link>
    );
}

export default LogoLink;
