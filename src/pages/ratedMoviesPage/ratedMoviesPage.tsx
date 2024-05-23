import { AppShellMain } from '@mantine/core';
import RatedMoviesList from '../../widgets/ratedMoviesList/ratedMoviesList';

function RatedMoviesPage() {
    return (
        <AppShellMain>
            <div>This is movies page</div>
            <RatedMoviesList />
        </AppShellMain>
    );
}

export default RatedMoviesPage;
