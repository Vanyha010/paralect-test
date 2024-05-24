import { AppShellMain } from '@mantine/core';
import { useState } from 'react';
import RatedMoviesList from '../../widgets/ratedMoviesList/ratedMoviesList';
import SearchBar from '../../features/searchBar/searchBar';
import { MovieRated } from '../../shared/types/types';

function RatedMoviesPage() {
    const [movieItems, setMovieItems] = useState<MovieRated[]>([]);

    return (
        <AppShellMain>
            <SearchBar movieItems={movieItems} setMovieItems={setMovieItems} />
            <RatedMoviesList movieItems={movieItems} />
        </AppShellMain>
    );
}

export default RatedMoviesPage;
