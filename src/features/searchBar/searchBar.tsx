import { TextInput, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './searchBar.module.css';
import PrimaryButton from '../../shared/UI/buttons/primaryButton/primaryButton';
import { MovieRated } from '../../shared/types/types';
import { IRootState } from '../../app/services/store/store';
import { getMovieStorage } from '../../app/services/localStorageHandler';

type PropsType = {
    movieItems: MovieRated[];
    setMovieItems: React.Dispatch<React.SetStateAction<MovieRated[]>>;
};

function SearchBar(props: PropsType) {
    const { movieItems, setMovieItems } = props;
    const [value, setValue] = useState('');
    const ratedMoviesArray = useSelector((state: IRootState) => state.ratedMovies.ratedMovies);
    const storageList = getMovieStorage();

    const search = () => {
        if (Array.isArray(ratedMoviesArray)) {
            const filteredMovieList = ratedMoviesArray.filter((item) => {
                const movieName = item.data.original_title.toLowerCase();
                if (movieName.includes(value)) {
                    return item;
                }

                return null;
            });
            console.log(filteredMovieList);
            setMovieItems(filteredMovieList);
        }
    };

    const getNewMovieItems = () => {
        const newMovieItems: MovieRated[] = [];
        movieItems.forEach((movie) => {
            ratedMoviesArray?.forEach((item) => {
                if (item.data.id === movie.data.id) {
                    newMovieItems.push(movie);
                }
            });
        });

        return newMovieItems;
    };

    useEffect(() => {
        if (storageList) {
            setMovieItems(JSON.parse(storageList));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (ratedMoviesArray && movieItems.length > 0) {
            const newRatedMoviesArray = getNewMovieItems();
            setMovieItems(newRatedMoviesArray);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ratedMoviesArray]);

    return (
        <div className={styles.searchBar}>
            <Title order={1} fz={32}>
                Rated movies
            </Title>
            <TextInput
                size="md"
                placeholder="Search movie title"
                className={styles.searchInput}
                rightSection={<PrimaryButton text="Search" click={search} />}
                rightSectionWidth={95}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
