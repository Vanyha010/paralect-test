import { AppShellMain } from '@mantine/core';
import { useParams } from 'react-router-dom';

function MovieInfoPage() {
    const { id } = useParams();

    return (
        <AppShellMain>
            <div>{id}</div>
        </AppShellMain>
    );
}

export default MovieInfoPage;
