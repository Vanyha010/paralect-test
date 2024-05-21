import { Select } from '@mantine/core';
import { useDispatch } from 'react-redux';

function YearSelect() {
    const dispatch = useDispatch();
    const oldestMovieMade = 1887;
    const currentYear = new Date().getFullYear();
    const yearsArray = [];

    for (let i = currentYear; i >= oldestMovieMade; i -= 1) {
        yearsArray.push(i.toString());
    }

    const setSelectedYear = (year: string | null) => {
        console.log('test');
        const action = {
            type: 'SET_YEAR',
            payload: year || '',
        };
        dispatch(action);
    };

    return (
        <Select
            label="Release year"
            placeholder="Select release year"
            data={yearsArray}
            onChange={(e) => setSelectedYear(e)}
        />
    );
}

export default YearSelect;
