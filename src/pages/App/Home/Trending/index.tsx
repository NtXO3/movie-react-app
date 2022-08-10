import * as React from 'react';
import { useGetTrendingShows } from '../../../../services/queries/shows';
import { TMDBResponse } from '../../../../types/shows';
import { TrendingWrapper } from './styled';
import { TrendingShow } from './TrendingShow';
import { TrendingShowSkeleton } from './TrendingShow/styled';

export const TrendingShows: React.FC<TrendingShowProps> = ({ setVideoUrl, setVideoModalOpen }) => {
    const { data: trendingShows, isLoading} = useGetTrendingShows();

    return (
        <TrendingWrapper>
            {
                isLoading ? (
                    new Array(5).fill(0).map((_, index) => <TrendingShowSkeleton key={index + 1} />)
                ) : (
                    trendingShows.results.slice(0, 10).map((item: TMDBResponse) => (
                        <TrendingShow
                            setVideoUrl={setVideoUrl} 
                            key={item.id} 
                            item={item} 
                            setVideoModalOpen={setVideoModalOpen}
                        />
                    ))
                )
            }
        </TrendingWrapper>
    )
}

type TrendingShowProps = {
    setVideoUrl: (url: string) => void;
    setVideoModalOpen: (open: boolean) => void;
}