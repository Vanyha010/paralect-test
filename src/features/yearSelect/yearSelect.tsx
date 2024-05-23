import { Select, Title } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { UseFormReturnType } from '@mantine/form';
import { useState } from 'react';
import ArrowDown from '../../shared/UI/arrows/arrowDown/arrowDown';
import styles from './yearselect.module.css';
import { QueryParamsStateType } from '../../shared/types/types';

const oldestMovieMade = 1887;

type PropsType = {
    form: UseFormReturnType<
        QueryParamsStateType,
        (values: QueryParamsStateType) => QueryParamsStateType
    >;
};

function YearSelect(props: PropsType) {
    const [isOpened, setIsOpened] = useState(false);
    const { form } = props;
    const dispatch = useDispatch();

    const currentYear = new Date().getFullYear();
    const yearsArray = [];

    for (let i = currentYear; i >= oldestMovieMade; i -= 1) {
        yearsArray.push(i.toString());
    }

    const setSelectedYear = (year: string | null) => {
        form.setValues({ releaseYearSelected: year || '' });
        const action = {
            type: 'SET_YEAR',
            payload: year || '',
        };
        dispatch(action);
    };

    const handleChange = (e: string | null) => {
        setSelectedYear(e);
    };

    return (
        <Select
            label={<Title order={5}>Release year</Title>}
            placeholder="Select release year"
            value={form.getValues().releaseYearSelected}
            data={yearsArray}
            onChange={(e) => handleChange(e)}
            onDropdownOpen={() => setIsOpened(true)}
            onDropdownClose={() => setIsOpened(false)}
            rightSection={<ArrowDown isOpened={isOpened} />}
            className={styles.yearSelect}
        />
    );
}

export default YearSelect;
