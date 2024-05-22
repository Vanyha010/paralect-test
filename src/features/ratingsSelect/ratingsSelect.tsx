import { Select } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { UseFormReturnType } from '@mantine/form';
import { useState } from 'react';
import ArrowUpDown from '../../shared/UI/arrows/arrowUpDown/arrowUpDown';
import styles from './ratingsselect.module.css';
import { QueryParamsStateType } from '../../shared/types/types';

type PropsType = {
    form: UseFormReturnType<
        QueryParamsStateType,
        (values: QueryParamsStateType) => QueryParamsStateType
    >;
};

function RatingsSelect(props: PropsType) {
    const { form } = props;

    // These variable are used only for 'getSelectRange' function to narrow allow ratings values
    const [minRating, setMinRating] = useState(0);
    const [maxRating, setMaxRating] = useState(10);

    const dispatch = useDispatch();

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
        setMinRating(Number(e));
        // If e equal to null then no value selected, so we set empty string as a value
        const data = e || '';

        form.setValues({ minRatingSelected: data });
        const action = {
            type: 'SET_LOWER_RATING',
            payload: data,
        };
        dispatch(action);
    };

    const handleMaxSelect = (e: string | null) => {
        setMaxRating(Number(e));
        const data = e || '';
        form.setValues({ maxRatingSelected: data });
        const action = {
            type: 'SET_HIGHER_RATING',
            payload: data,
        };
        dispatch(action);
    };

    return (
        <div className={styles.ratingsSelect}>
            <Select
                label="Ratings"
                placeholder="From"
                data={getSelectRange('lower')}
                value={form.getValues().minRatingSelected}
                onChange={(e) => handleMinSelect(e)}
                rightSection={<ArrowUpDown />}
            />
            <Select
                placeholder="To"
                data={getSelectRange('higher')}
                value={form.getValues().maxRatingSelected}
                onChange={(e) => handleMaxSelect(e)}
                rightSection={<ArrowUpDown />}
            />
        </div>
    );
}

export default RatingsSelect;
