export type MovieData = {
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

export type GenreType = {
    id: number;
    name: string;
};

export type Video = {
    id: string;
    key: string;
};

export type Company = {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
};

export type MovieFullData = {
    adult: boolean;
    backdrop_path: string;
    genres: GenreType[];
    id: number;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    videos: {
        results: Video[];
    };
    production_companies: Company[];
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

export type MovieShortData = {
    id: number;
    original_title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    genre_ids: number[];
};

export type QueryParamsStateType = {
    genresSelected: string[];
    releaseYearSelected: string | null;
    minRatingSelected: string | null;
    maxRatingSelected: string | null;
};

export type MovieRated = {
    data: MovieData;
    rating: number;
};
