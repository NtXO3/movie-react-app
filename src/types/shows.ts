export type TMDBResponse = {
    adult?: boolean;
    backdrop_path: string;
    genre_ids?: number[];
    id: number;
    original_language?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date: string;
    title: string;
    video?: boolean;
    vote_average: number;
    vote_count?: number;
    name?: string;
    media_type: 'movie' | 'tv' | 'person';
    first_air_date?: string;
}

export type FirestoreShow = {
    id: number;
    title: string;
    img: string;
    media_type: 'movie' | 'tv' | 'person';
    release_date: string;
    vote_average: number;
    backdrop_path: string;
}