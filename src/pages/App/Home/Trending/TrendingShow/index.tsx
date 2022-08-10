import * as React from 'react';
import { SaveButton } from '../../../../../components/common/interaction/Save';
import getDataBackground from '../../../../../services/getBackground';
import { FirestoreShow, TMDBResponse } from '../../../../../types/shows';
import { TrendingShowDescription, TrendingShowImg, TrendingShowWrapper } from './styled';
import { Heading, Text } from '../../../../../components/common/typography';
import { MdMovie, MdOndemandVideo } from 'react-icons/md'
import { PlayButton } from '../../../../../components/common/interaction/Play';
import { ShowTags, ShowDot, ShowOverlay } from '../../../../../components/modules/movie/styled';
import { getMovieVideos } from '../../../../../services/queries/shows';
import { MovieVideo } from '../../../../../services/queries/types';
import { toast } from 'react-toastify';
import { UserAuth } from '../../../../../context/AuthContext';

export const TrendingShow: React.FC<TrendingShowProps> = ({ item, setVideoUrl, setVideoModalOpen }) => {
    const [saved, setSaved] = React.useState(false)
    const { getUserData, user, saveShow, deleteSavedShow } = UserAuth()

    const handleIsSaved = async () => {
        const data = await getUserData()
        if (data?.find((dbItem: FirestoreShow) => dbItem.id === item.id)) {
            setSaved(true)
        }
    }

    React.useEffect(() => {
        handleIsSaved()
    }, [user?.email])
    
    const getMovieVideo = async () => {
        try {
            const { results } = await getMovieVideos(item.id, item.media_type)
            if (!results.length) {
                console.log('no videos')
                return toast('No videos found for this show')
            };
    
            const video = results.find((item: MovieVideo) => item.type === 'Trailer' || item.type === 'Teaser' || item.type === 'Clip') || results[0]
            setVideoUrl(video.key)
            setVideoModalOpen(true)
        } catch (err) {
            console.log('error')
            toast.error('Something went wrong getting this video')
        }
    }

    return (
        <TrendingShowWrapper>
            <TrendingShowImg src={getDataBackground(item.backdrop_path)} />
            <ShowOverlay />
            <SaveButton isSaved={saved} onClick={() => {
                if (saved) return deleteSavedShow(item, setSaved)
                saveShow(item, setSaved)
            }}/>
            <TrendingShowDescription>
                <ShowTags>
                    <Text size="s">{item?.release_date?.slice(0, 4) || item?.first_air_date?.slice(0, 4)}</Text>
                    <ShowDot />
                    <Text size="s">
                        {item.media_type === 'movie' ? (
                            <>
                            <MdMovie /> Movie
                            </>
                        ) : (
                            <>
                                <MdOndemandVideo /> Series
                            </>
                        )}
                    </Text>
                    <ShowDot />
                    <Text size="s">
                        {item?.vote_average?.toFixed(1)} / 10
                    </Text>
                </ShowTags>
                <Heading size="m">{item.title || item.name}</Heading>
            </TrendingShowDescription>
            <PlayButton onClick={getMovieVideo} />
        </TrendingShowWrapper>
    )
}

type TrendingShowProps = {
    item: TMDBResponse
    setVideoUrl: (url: string) => void;
    setVideoModalOpen: (open: boolean) => void;
}