import { AppShellMain } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieFullData } from '../../shared/types/types';
import requestBuilder from '../../app/services/requestBuilder';
import PathBlock from '../../entities/pathBlock/pathBlock';
import MovieCardBig from '../../entities/movieCardBig/movieCardBig';
import { getMovieRating } from '../../shared/functions/functions';

function MovieInfoPage() {
    const { id } = useParams();
    const [data, setData] = useState<MovieFullData | null>(null);
    const [rating, setRating] = useState(0);

    const fetchData = async () => {
        if (id) {
            const movieData: MovieFullData = await requestBuilder.getMovieById(parseInt(id, 10));
            console.log(movieData);
            setData(movieData);
            const savedRating = getMovieRating(parseInt(id, 10));
            if (savedRating) {
                setRating(savedRating);
            }
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AppShellMain>
            {data ? (
                <div className="movieInfoPageContent">
                    <PathBlock movieName={data.original_title} />
                    <MovieCardBig data={data} rating={rating} />
                </div>
            ) : (
                <div>Not found</div>
            )}
        </AppShellMain>
    );
}

export default MovieInfoPage;
