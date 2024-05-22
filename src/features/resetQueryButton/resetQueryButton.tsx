import { useDispatch } from 'react-redux';
import { UseFormReturnType } from '@mantine/form';
import useQueryString from '../../shared/hooks/useQueryString';
import styles from './resetquerybutton.module.css';
import { QueryParamsStateType } from '../../shared/types/types';

type PropsType = {
    setGenreOpened: React.Dispatch<React.SetStateAction<boolean>>;
    setYearOpened: React.Dispatch<React.SetStateAction<boolean>>;
    form: UseFormReturnType<
        QueryParamsStateType,
        (values: QueryParamsStateType) => QueryParamsStateType
    >;
};

function ResetQueryButton(props: PropsType) {
    const { setGenreOpened, setYearOpened, form } = props;
    const dispatch = useDispatch();
    const queryString = useQueryString();
    const isQueryString = Boolean(queryString);

    const resetFilters = () => {
        form.setValues({
            genresSelected: [],
            releaseYearSelected: null,
            minRatingSelected: null,
            maxRatingSelected: null,
        });
        dispatch({ type: 'CLEAR_QUERY' });
        setGenreOpened(false);
        setYearOpened(false);
    };

    return (
        <button
            disabled={!isQueryString}
            className={[styles.resetQueryButton, isQueryString ? styles.active : ''].join(' ')}
            onClick={resetFilters}
        >
            Reset filters
        </button>
    );
}

export default ResetQueryButton;
