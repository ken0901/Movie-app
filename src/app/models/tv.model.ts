export interface Tv {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview:  string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}

export interface TvDTO {
    page: number;
    results: Tv[];
    total_results: number;
    total_pages: number;
}

