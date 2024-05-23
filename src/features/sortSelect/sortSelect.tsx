import { Select, Title } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from './sortselect.module.css';
import ArrowDown from '../../shared/UI/arrows/arrowDown/arrowDown';

const data = [
    { label: 'Most popular', value: 'popularity.desc' },
    { label: 'Least popular', value: 'popularity.asc' },
    { label: 'Most rated', value: 'vote_average.desc' },
    { label: 'Least rated', value: 'vote_average.asc' },
    { label: 'Most voted', value: 'vote_count.desc' },
    { label: 'Least voted', value: 'vote_count.asc' },
    { label: 'Title (A-Z)', value: 'original_title.asc' },
    { label: 'Title (Z-A)', value: 'original_title.desc' },
    { label: 'Lately released', value: 'primary_release_date.desc' },
    { label: 'Earlier released', value: 'primary_release_date.asc' },
];

function SortSelect() {
    const [isOpened, setIsOpened] = useState(false);
    const dispatch = useDispatch();
    const handleChange = (e: string | null) => {
        const payload = e || '';
        const action = {
            type: 'SET_SORT_METHOD',
            payload,
        };
        dispatch(action);
    };

    return (
        <Select
            label={<Title order={5}>Sort by</Title>}
            className={styles.sortSelect}
            data={data}
            onChange={(e) => handleChange(e)}
            onDropdownOpen={() => setIsOpened(true)}
            onDropdownClose={() => setIsOpened(false)}
            rightSection={<ArrowDown isOpened={isOpened} />}
        />
    );
}

export default SortSelect;
