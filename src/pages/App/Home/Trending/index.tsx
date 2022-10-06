import * as React from 'react';
import { TMDBResponse } from 'types';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import { useGetTrendingShows } from 'queries/shows';

import { TrendingShow } from './TrendingShow';
import { TrendingShowSkeleton } from './TrendingShow/styled';
import { TrendingContainer, TrendingScrollButton, TrendingWrapper } from './styled';

export const TrendingShows: React.FC<TrendingShowProps> = ({ setVideoUrl, setVideoModalOpen }) => {
    const { data: trendingShows, isLoading} = useGetTrendingShows();
    const trendingShowsRef = React.useRef<HTMLDivElement | null>(null)

    const handleScroll = (dir: 'left' | 'right') => {
        if (!trendingShowsRef.current) { 
            return
        };

        const { current: element} = trendingShowsRef;

        if (dir === 'left') {
            element.scrollLeft = element.scrollLeft - 500
        } else if (dir === 'right') {
            element.scrollLeft = element.scrollLeft + 500
        }
    }

    return (
        <TrendingContainer>
            <TrendingScrollButton 
                position='left' 
                onClick={() => handleScroll('left')}
            >
                <AiOutlineArrowLeft />
            </TrendingScrollButton>
            <TrendingScrollButton position='right' onClick={() => handleScroll('right')}>
                <AiOutlineArrowRight />
            </TrendingScrollButton>
            <TrendingWrapper ref={trendingShowsRef}>
                {isLoading ? (
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
                )}
            </TrendingWrapper>
        </TrendingContainer>
    )
}

type TrendingShowProps = {
    setVideoUrl: (url: string) => void;
    setVideoModalOpen: (open: boolean) => void;
}