import { MultiSelect } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { UseFormReturnType } from '@mantine/form';
import { IRootState } from '../../app/services/store/store';
import ArrowDown from '../../shared/UI/arrows/arrowDown/arrowDown';
import styles from './genreselect.module.css';
import { QueryParamsStateType } from '../../shared/types/types';

type MultiSelectDataProp = {
    value: string;
    label: string;
};

type PropsType = {
    isOpened: boolean;
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
    form: UseFormReturnType<
        QueryParamsStateType,
        (values: QueryParamsStateType) => QueryParamsStateType
    >;
};

function GenreSelect(props: PropsType) {
    const dispatch = useDispatch();
    const genresMap = useSelector((state: IRootState) => state.genresList?.genresMap.genres);
    const { isOpened, setIsOpened, form } = props;

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
        form.setValues({ genresSelected: genres });
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
            value={form.getValues().genresSelected}
            onChange={(e) => setSelectedGenres(e)}
            onClick={() => setIsOpened(!isOpened)}
            rightSection={<ArrowDown isOpened={isOpened} />}
            className={styles.genreSelect}
        />
    );
}

export default GenreSelect;
