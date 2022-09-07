import * as React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { MoviesWrapper, ShowsWrapper } from 'common';
import { SearchInput } from 'common/form/SearchInput';
import { Heading } from 'common/typography';
import { Show } from 'modules/movie';
import { Sidebar, MobileHeader } from 'modules/navigation';
import { SkeletonShow } from 'modules/skeletonMovie';
import { VideoModal } from 'modules/videoModal';
import { searchShow } from 'queries/shows';
import { TMDBResponse } from 'types';

const Search = () => {
    const [search, setSearch] = React.useState('')
    const navigate = useNavigate()
    const { search: searchQuery } = useLocation();
    const [isLoading, setIsLoading] = React.useState(false)
    const [searchResults, setSearchResults] = React.useState<any>([])
    const [videoUrl, setVideoUrl] = React.useState('');
    const [videoModalOpen, setVideoModalOpen] = React.useState(false);

    const getResults = async () => {
        setIsLoading(true)
        const data = await searchShow(searchQuery)
        setSearchResults(data)
        setIsLoading(false)
    }

    React.useEffect(() => {
        getResults()
    }, [searchQuery])

    const renderSearchText = (query: string) => {
        return query.slice(3, query.length).split('%20').join(' ');
    }

    React.useEffect(() => {
        if (!searchQuery) {
            return navigate('/')
        }
        setSearch(renderSearchText(searchQuery))
    }, [searchQuery])

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
                    onSearch={() => navigate(`/search?s=${search}`)}
                />
                <Heading size="l">
                    Found {searchResults?.total_results} Results for: {renderSearchText(searchQuery)}
                </Heading>
                <ShowsWrapper>
                    {isLoading ? new Array(20).fill(0).map(item => <SkeletonShow />) : 
                        searchResults && searchResults.results?.filter((item: TMDBResponse) => 
                            item?.backdrop_path?.length > 0
                        )
                        .filter((item: TMDBResponse) => item.media_type !== 'person')
                        .map((item: TMDBResponse) => (
                            <Show 
                                item={item}
                                setVideoModalOpen={setVideoModalOpen}
                                setVideoUrl={setVideoUrl} 
                            />
                        ))}
                </ShowsWrapper>
            </MoviesWrapper>
            {
                videoModalOpen && <VideoModal videoUrl={videoUrl} />
            }
        </>
    )
}

export default Search;