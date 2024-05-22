import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { IRootState } from '../../app/services/store/store';

// This code will create a new string with all query params from select fields each time when state property "queryParams" is changed
const useQueryString = () => {
    const [queryString, setQueryString] = useState('');
    const queryParamsState = useSelector((state: IRootState) => state.queryParams);
    const { genresSelected, releaseYearSelected, minRatingSelected, maxRatingSelected } =
        queryParamsState;
    const sortMethod = useSelector((state: IRootState) => state.sortMethod.sortMethod);

    useEffect(() => {
        let newQueryString = '';
        if (genresSelected?.length) {
            newQueryString = `&with_genres=${genresSelected.join(',')}`;
        }

        if (releaseYearSelected?.length) {
            newQueryString += `&primary_release_year=${releaseYearSelected}`;
        }

        if (minRatingSelected) {
            newQueryString += `&vote_average.gte=${minRatingSelected}`;
        }

        if (maxRatingSelected) {
            newQueryString += `&vote_average.lte=${maxRatingSelected}`;
        }

        if (typeof sortMethod === 'string' && sortMethod.length > 0) {
            newQueryString += `&sort_by=${sortMethod}`;
        }

        setQueryString(newQueryString);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryParamsState, sortMethod]);

    return queryString;
};

export default useQueryString;
