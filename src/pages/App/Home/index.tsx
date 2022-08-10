import * as React from 'react';
import { useNavigate } from 'react-router';
import { MoviesWrapper, ShowsWrapper } from '../../../components/common';
import { SearchInput } from '../../../components/common/form/SearchInput';
import { Heading } from '../../../components/common/typography';
import { Show } from '../../../components/modules/movie';
import { Sidebar, MobileHeader } from '../../../components/modules/navigation';
import { SkeletonShow } from '../../../components/modules/skeletonMovie';
import { VideoModal } from '../../../components/modules/videoModal';
import { useGetRecommendedShows } from '../../../services/queries/shows';
import { TMDBResponse } from '../../../types/shows';
import { TrendingShows } from './Trending';

const Home: React.FC = () => {
    const { data: discoverShows, isLoading } = useGetRecommendedShows();
    const [search, setSearch] = React.useState('');
    const [videoUrl, setVideoUrl] = React.useState('');
    const [videoModalOpen, setVideoModalOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/search?s=${search}`)
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
                    placeholder='Search for Movies or TV Series'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onSearch={handleSearch}
                />
                <Heading size="l">Trending</Heading>
                <TrendingShows setVideoUrl={setVideoUrl} setVideoModalOpen={setVideoModalOpen}/>
                <Heading size="l">Recommended for you</Heading>
                <ShowsWrapper>
                    { isLoading ? (
                        new Array(20).fill(0).map((_, index) => <SkeletonShow key={index + 1} />)
                    ) : (
                        discoverShows?.results.map((item: TMDBResponse, index: number) => <Show 
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

export default Home;