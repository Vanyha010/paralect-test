import { AspectRatio, Box } from '@mantine/core';
import { MovieFullData } from '../../shared/types/types';
import styles from './movieDetailedInfo.module.css';
import ProductionCompany from '../../entities/productionCompany/productionCompany';

type PropsType = {
    data: MovieFullData;
};

function MovieDetailedInfo(props: PropsType) {
    const { data } = props;
    const trailerSrc = `https://www.youtube.com/embed/${data.videos.results[0].key}`;

    return (
        <Box className={styles.container}>
            <Box className="cardSection">
                <div className="cardTitle">Trailer</div>
                <AspectRatio ratio={16 / 9}>
                    <iframe
                        src={trailerSrc}
                        title="YouTube video player"
                        style={{ border: 0, width: '490px', borderRadius: '10px' }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </AspectRatio>
            </Box>
            <Box className="cardSection">
                <div className="cardTitle">Description</div>
                <div>{data.overview}</div>
            </Box>
            <Box>
                <div className="cardTitle">Production</div>
                {data.production_companies.map((item) => (
                    <ProductionCompany data={item} key={item.id} />
                ))}
            </Box>
        </Box>
    );
}

export default MovieDetailedInfo;
