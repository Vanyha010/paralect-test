import { Select } from '@mantine/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ArrowUpDown from '../../shared/UI/arrows/arrowUpDown/arrowUpDown';

function RatingsSelect() {
    const dispatch = useDispatch();
    const [minRating, setMinRating] = useState(0);
    const [maxRating, setMaxRating] = useState(10);

    // This function disables option more than max selected for 'from' <select> and options less than min selected for 'to' <select>
    const getSelectRange = (type: 'lower' | 'higher') => {
        const data = [];
        for (let i = 0; i <= 10; i += 1) {
            const obj = {
                value: i.toString(),
                label: i.toString(),
                disabled: type === 'lower' ? maxRating < i : minRating > i,
            };
            data.push(obj);
        }

        return data;
    };

    const handleMinSelect = (e: string | null) => {
        if (e) {
            setMinRating(parseInt(e, 10));
            const action = {
                type: 'SET_LOWER_RATING',
                payload: e,
            };
            dispatch(action);
        }
    };

    const handleMaxSelect = (e: string | null) => {
        if (e) {
            setMaxRating(parseInt(e, 10));
            const action = {
                type: 'SET_HIGHER_RATING',
                payload: e,
            };
            dispatch(action);
        }
    };

    return (
        <div>
            <Select
                label="Ratings"
                placeholder="From"
                data={getSelectRange('lower')}
                onChange={(e) => handleMinSelect(e)}
                rightSection={<ArrowUpDown />}
            />
            <Select
                placeholder="To"
                data={getSelectRange('higher')}
                onChange={(e) => handleMaxSelect(e)}
                rightSection={<ArrowUpDown />}
            />
        </div>
    );
}

export default RatingsSelect;
