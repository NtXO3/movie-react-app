export type MovieVideo = {
    id?: string;
    key: string;
    site: string;
    type: string;
    media_type: 'tv' | 'movie' | 'person'
}

export type GetVideosResponseType = {
    id: number;
    results: MovieVideo[];
}