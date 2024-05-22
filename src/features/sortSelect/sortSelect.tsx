import { Select, Title } from '@mantine/core';
import { useDispatch } from 'react-redux';
import styles from './sortselect.module.css';

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
        />
    );
}

export default SortSelect;
