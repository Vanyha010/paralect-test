import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { IRootState } from '../../app/services/store/store';

const useQueryString = () => {
    const [queryString, setQueryString] = useState('');
    const queryParams = useSelector((state: IRootState) => state.queryParams);
    const { genresSelected, releaseYearSelected } = queryParams;

    useEffect(() => {
        let newQueryString = '';
        if (genresSelected?.length) {
            newQueryString = `&with_genres=${genresSelected.join(',')}`;
        }

        if (releaseYearSelected?.length) {
            newQueryString += `&primary_release_year=${releaseYearSelected}`;
        }

        setQueryString(newQueryString);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryParams]);

    return queryString;
};

export default useQueryString;
