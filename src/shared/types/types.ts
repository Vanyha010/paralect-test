export type MovieItem = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type QueryParamsStateType = {
    genresSelected: string[];
    releaseYearSelected: string | null;
    minRatingSelected: string | null;
    maxRatingSelected: string | null;
};

export type MovieRated = {
    id: number;
    rating: number;
};
