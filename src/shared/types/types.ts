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

type Collection = {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
};

export type MovieFullItem = {
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
    belongs_to_collection: Collection | null;
    budget: number;
    homepage: string;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    revenue: number;
    runtime: number;
    status: string;
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
