import { AppShellMain } from '@mantine/core';
import { useState } from 'react';
import RatedMoviesList from '../../widgets/ratedMoviesList/ratedMoviesList';
import SearchBar from '../../features/searchBar/searchBar';
import { MovieRated } from '../../shared/types/types';
import RatedPageFallback from '../../entities/fallbacks/ratedPageFallback';

function RatedMoviesPage() {
    const [movieItems, setMovieItems] = useState<MovieRated[]>([]);

    return (
        <AppShellMain>
            {movieItems.length > 0 ? (
                <>
                    <SearchBar movieItems={movieItems} setMovieItems={setMovieItems} />
                    <RatedMoviesList movieItems={movieItems} />
                </>
            ) : (
                <RatedPageFallback />
            )}
        </AppShellMain>
    );
}

export default RatedMoviesPage;
