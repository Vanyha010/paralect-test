import { AppShellMain } from '@mantine/core';
import { useState } from 'react';
import RatedMoviesList from '../../widgets/ratedMoviesList/ratedMoviesList';
import SearchBar from '../../features/searchBar/searchBar';
import { MovieRated } from '../../shared/types/types';
import { getMovieStorage } from '../../app/services/localStorageHandler';
import RatedPageFallback from '../../entities/fallbacks/ratedPageFallback';

function RatedMoviesPage() {
    const [movieItems, setMovieItems] = useState<MovieRated[]>([]);
    const ratedMovies = getMovieStorage();
    if (ratedMovies) {
        const ratedMoviesArray = JSON.parse(ratedMovies);
        if (ratedMoviesArray.length === 0) {
            return (
                <AppShellMain>
                    <RatedPageFallback />
                </AppShellMain>
            );
        }
    }

    return (
        <AppShellMain>
            <SearchBar movieItems={movieItems} setMovieItems={setMovieItems} />
            <RatedMoviesList movieItems={movieItems} />
        </AppShellMain>
    );
}

export default RatedMoviesPage;
