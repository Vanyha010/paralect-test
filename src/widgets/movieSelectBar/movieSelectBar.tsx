import GenreSelect from '../../features/genreSelect/genreSelect';
import RatingsSelect from '../../features/ratingsSelect/ratingsSelect';
import YearSelect from '../../features/yearSelect/yearSelect';

function MovieSelectBar() {
    return (
        <>
            <GenreSelect />
            <YearSelect />
            <RatingsSelect />
        </>
    );
}

export default MovieSelectBar;
