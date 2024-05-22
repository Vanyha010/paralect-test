import { Select } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import ArrowDown from '../../shared/UI/arrows/arrowDown/arrowDown';

function YearSelect() {
    const [isOpened, setIsOpened] = useState(false);
    const dispatch = useDispatch();
    const oldestMovieMade = 1887;
    const currentYear = new Date().getFullYear();
    const yearsArray = [];

    for (let i = currentYear; i >= oldestMovieMade; i -= 1) {
        yearsArray.push(i.toString());
    }

    const setSelectedYear = (year: string | null) => {
        const action = {
            type: 'SET_YEAR',
            payload: year || '',
        };
        dispatch(action);
    };

    const handleChange = (e: string | null) => {
        setIsOpened(!isOpened);
        setSelectedYear(e);
    };

    return (
        <Select
            label="Release year"
            placeholder="Select release year"
            data={yearsArray}
            onChange={(e) => handleChange(e)}
            onClick={() => setIsOpened(!isOpened)}
            rightSection={<ArrowDown isOpened={isOpened} />}
        />
    );
}

export default YearSelect;
