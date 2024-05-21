import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { IRootState } from '../../app/services/store/store';

const useQueryString = () => {
    const [queryString, setQueryString] = useState('');
    const selectedGenres = useSelector((state: IRootState) => state.selectedGenres);

    useEffect(() => {
        setQueryString('');
        if (selectedGenres?.length) {
            setQueryString(`&with_genres=${selectedGenres.join(',')}`);
        }
    }, [selectedGenres]);

    return queryString;
};

export default useQueryString;
