import { AppShellMain, Loader } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { MovieFullData } from '../../shared/types/types';
import requestBuilder from '../../app/services/requestBuilder';
import PathBlock from '../../entities/pathBlock/pathBlock';
import MovieCardBig from '../../entities/movieCardBig/movieCardBig';
import { getMovieRating } from '../../shared/functions/functions';
import MovieDetailedInfo from '../../widgets/movieDetailedInfo/movieDetailedInfo';

function MovieInfoPage() {
    const { id } = useParams();
    const [data, setData] = useState<MovieFullData | null>(null);
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();

    const fetchData = async () => {
        if (id) {
            try {
                const movieData: MovieFullData = await requestBuilder.getMovieById(
                    parseInt(id, 10)
                );
                console.log(movieData);
                setData(movieData);
            } catch (e) {
                if (e instanceof AxiosError) {
                    if (e.response?.status === 404) {
                        navigate('/404');
                    }
                }
            }

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
                    <MovieDetailedInfo data={data} />
                </div>
            ) : (
                <Loader color="#9854F6" size={100} />
            )}
        </AppShellMain>
    );
}

export default MovieInfoPage;
