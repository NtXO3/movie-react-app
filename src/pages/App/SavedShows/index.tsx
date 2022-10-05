import { doc, DocumentData, onSnapshot } from 'firebase/firestore';
import * as React from 'react';
import { useNavigate } from 'react-router';
import { MoviesWrapper, ShowsWrapper } from 'components/common';
import { Button } from 'components/common/interaction/Button';
import { Heading } from 'components/common/typography';
import { Show } from 'components/modules/movie';
import { Sidebar, MobileHeader } from 'components/modules/navigation';
import { SkeletonShow } from 'components/modules/skeletonMovie';
import { VideoModal } from 'components/modules/videoModal';
import { UserAuth } from 'context/AuthContext';
import { db } from 'firebase-config';
import { FirestoreShow } from 'types';
import { EmptyText, EmptyWrapper } from './styled';

const SavedShows: React.FC = () => {
    const [savedShows, setSavedShows] = React.useState<DocumentData | undefined>([])
    const { getUserData, user } = UserAuth()
    const [isLoading, setIsLoading] = React.useState(true);
    const [videoUrl, setVideoUrl] = React.useState('');
    const [videoModalOpen, setVideoModalOpen] = React.useState(false);
    const navigate = useNavigate();

    const savedShowsCheck = (type: "movie" | "tv") => {
        return !!savedShows?.filter((item: FirestoreShow) => item.media_type === type).length
    }

    const renderSavedShows = (type: 'movie' | 'tv') => {
        return (
            isLoading ? (
                new Array(8).fill(0).map((_, index) => <SkeletonShow key={index + 1} />)
            ) : (
                savedShowsCheck(type) ? (
                    savedShows?.filter((item: FirestoreShow) => item.media_type === type)
                    .map((item: FirestoreShow, index: number) => <Show
                        item={item}
                        key={index + 1}
                        setVideoModalOpen={setVideoModalOpen}
                        setVideoUrl={setVideoUrl}
                    />)
                ) : (
                    <EmptyWrapper>
                        <EmptyText>
                            You don't have any saved {type === 'movie' ? 'movies' : 'series'}...
                        </EmptyText>
                        <Button onClick={() => navigate(type === 'movie' ? '/movies' : '/series')}>
                            Browse {type === 'movie' ? 'movies' : 'series'}
                        </Button>
                    </EmptyWrapper>         
                )
        ))
    }

    React.useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setSavedShows(doc.data()?.savedMovies)
            setIsLoading(false)
        })
    }, [user])

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
                <Heading size="l">Bookmarked Movies</Heading>
                <ShowsWrapper>
                    {renderSavedShows('movie')}
                </ShowsWrapper>
                <Heading size="l">Bookmarked Series</Heading>
                <ShowsWrapper>
                    {renderSavedShows('tv')}
                </ShowsWrapper>
            </MoviesWrapper>
            {
                videoModalOpen && <VideoModal videoUrl={videoUrl} />
            }
        </>
    )
}

export default SavedShows;