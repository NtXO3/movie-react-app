import * as React from 'react';
import { useNavigate } from 'react-router';
import { MoviesWrapper, ShowsWrapper } from 'components/common';
import { SearchInput } from 'components/common/form/SearchInput';
import { Heading } from 'components/common/typography';
import { Show } from 'components/modules/movie';
import { Sidebar, MobileHeader } from 'components/modules/navigation';
import { SkeletonShow } from 'components/modules/skeletonMovie';
import { VideoModal } from 'components/modules/videoModal';
import { useGetMovies, useGetTopRatedMovies } from 'queries/shows';
import { TMDBResponse } from 'types';

const MoviesPage: React.FC = () => {
    const [search, setSearch] = React.useState('');
    const navigate = useNavigate()
    const [videoUrl, setVideoUrl] = React.useState('');
    const [videoModalOpen, setVideoModalOpen] = React.useState(false);
    const { data: movies, isLoading: moviesLoading } = useGetMovies();
    const { data: topRatedMovies, isLoading: topRatedLoading } = useGetTopRatedMovies();


    const handleSearch = () => {
        navigate(`/movies/search?s=${search}`)
    }

    React.useEffect(() => {
        if (videoModalOpen) {
            document.addEventListener('click', () => setVideoModalOpen(false))
            document.body.style.overflow = 'hidden'
        } else {
            document.removeEventListener('click', () => setVideoModalOpen(false))
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.removeEventListener('click', () => setVideoModalOpen(false))
            document.body.style.overflow = 'auto'
        }
    }, [videoModalOpen])
    
    return (
        <>
            <Sidebar />
            <MoviesWrapper>
                <MobileHeader />
                <SearchInput
                    placeholder='Search for Movies'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onSearch={handleSearch}
                />
                <Heading size="l">Top Rated Movies</Heading>
                <ShowsWrapper>
                    { topRatedLoading ? (
                        new Array(8).fill(0).map((_, index) => <SkeletonShow key={index + 1} />)
                    ) : (
                        topRatedMovies?.results.slice(0, 8).map((item: TMDBResponse, index: number) => <Show 
                            type="movie"
                            item={item}
                            key={index + 1}
                            setVideoModalOpen={setVideoModalOpen}
                            setVideoUrl={setVideoUrl}
                        />)
                    )}
                </ShowsWrapper>
                <Heading size="l">More Movies</Heading>
                <ShowsWrapper>
                    { moviesLoading ? (
                        new Array(20).fill(0).map((_, index) => <SkeletonShow key={index + 1} />)
                    ) : (
                        movies?.results.slice(0, 20).map((item: TMDBResponse, index: number) => <Show 
                            type="tv"
                            item={item}
                            key={index + 1}
                            setVideoModalOpen={setVideoModalOpen}
                            setVideoUrl={setVideoUrl}
                        />)
                    )}
                </ShowsWrapper>
            </MoviesWrapper>
            {
                videoModalOpen && <VideoModal videoUrl={videoUrl} />
            }
        </>
    )
}

export default MoviesPage;