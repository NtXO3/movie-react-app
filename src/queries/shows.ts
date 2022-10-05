import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { TMDBResponse } from "../types/shows"
import requests from "../services/requests"
import { GetVideosResponseType } from "./types"

const key = 'c8c98566ad1356b425fb4fc2834daa8e'

export const useGetTrendingShows = () => {
    return useQuery(
        ['trendingShows'],
        async () => {
            const { data } = await axios.get(requests.requestTrending)
            return data;
        }
    )
}

export const useGetRecommendedShows = () => {
    return useQuery(
        ['recommendedShows'],
        async () => {
            const { data: moviesDiscover } = await axios.get(requests.requestDiscoverMovie)
            const { data: seriesDiscover } = await axios.get(requests.requestDiscoverSeries)
            console.log(seriesDiscover.results.map((item: any) => ({...item, media_type: 'tv'})))
            const data = {
                page: 1,
                results: [
                    ...seriesDiscover.results.slice(0, 8).map((item: any) => ({...item, media_type: 'tv'})),
                    ...moviesDiscover.results.slice(0, 8).map((item: any) => ({ ...item, media_type: 'movie'}))
                ].sort((a, b) => b.vote_average - a.vote_average)
            }
            console.log(data)
            return data;
        }
    )
}

export const useGetMovies = () => {
    return useQuery(
        ['movies'],
        async () => {
            const { data } = await axios.get(requests.requestPopularMovies)
            return data;
        }
    )
}

export const useGetTopRatedMovies = () => {
    return useQuery(
        ['topRatedMovies'],
        async () => {
            const { data } = await axios.get(requests.requestTopRatedMovies)
            return data;
        }
    )
}

export const useGetSeries = () => {
    return useQuery(
        ['series'],
        async () => {
            const { data } = await axios.get(requests.requestPopularSeries)
            return data;
        }
    )
}

export const useGetTopRatedSeries = () => {
    return useQuery(
        ['topRatedSeries'],
        async () => {
            const { data } = await axios.get(requests.requestTopRatedSeries)
            return data; 
        }
    )
}

export const searchShow = async (search: string, searchType: string = 'multi') => {
    const query = search.slice(3, search.length)
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/${searchType}?api_key=${key}&language=en-US&page=1&include_adult=true&query=${query}`)
    return searchType === 'multi' ? data : {...data, results: data.results.map((item: TMDBResponse) => ({...item, media_type: searchType}))};
}

export const getMovieVideos = async (id: number, type: 'movie' | 'tv' | 'person'): Promise<GetVideosResponseType> => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${key}&language=en-US`)
    return data;
}