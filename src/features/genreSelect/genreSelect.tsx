import { MultiSelect } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../app/services/store/store';

type MultiSelectDataProp = {
    value: string;
    label: string;
};

function GenreSelect() {
    const dispatch = useDispatch();
    const genresMap = useSelector((state: IRootState) => state.genresList?.genresMap.genres);

    const genresNames: MultiSelectDataProp[] = [];
    if (Array.isArray(genresMap)) {
        genresMap.forEach((item) => {
            const genre = {
                value: item.id.toString(),
                label: item.name,
            };
            genresNames.push(genre);
        });
    }

    const setSelectedGenres = (genres: string[]) => {
        const action = {
            type: 'SET_GENRES',
            payload: genres,
        };
        dispatch(action);
    };

    return (
        <MultiSelect
            label="Genres"
            placeholder="Select genres"
            data={genresNames}
            // value={genre}
            onChange={(e) => setSelectedGenres(e)}
        />
    );
}

export default GenreSelect;
