import { useForm } from '@mantine/form';
import GenreSelect from '../../features/genreSelect/genreSelect';
import RatingsSelect from '../../features/ratingsSelect/ratingsSelect';
import ResetQueryButton from '../../features/resetQueryButton/resetQueryButton';
import styles from './movieselectbar.module.css';
import { QueryParamsStateType } from '../../shared/types/types';
import YearSelect from '../../features/yearSelect/yearSelect';

const initialValues: QueryParamsStateType = {
    genresSelected: [],
    releaseYearSelected: null,
    minRatingSelected: null,
    maxRatingSelected: null,
};

function MovieSelectBar() {
    const form = useForm({
        mode: 'controlled',
        initialValues,
    });

    return (
        <div className={styles.movieSelectBar}>
            <GenreSelect form={form} key={form.key('genresSelected')} />
            <YearSelect form={form} key={form.key('releaseYearSelected')} />
            <RatingsSelect
                form={form}
                key={(form.key('minRatingSelected'), form.key('maxRatingSelected'))}
            />
            <ResetQueryButton form={form} />
        </div>
    );
}

export default MovieSelectBar;
