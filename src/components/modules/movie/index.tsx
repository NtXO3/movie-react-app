import * as React from 'react';
import { MdMovie, MdOndemandVideo } from 'react-icons/md';

import { UserAuth } from 'context/AuthContext';
import getDataBackground from 'services/getBackground';

import { getMovieVideos } from 'queries/shows';
import { MovieVideo } from 'queries/types';
import { FirestoreShow, TMDBResponse } from 'types';
import { PlayButton } from 'components/common/interaction/Play';
import { SaveButton } from 'components/common/interaction/Save';
import { Heading, Text } from 'components/common/typography';

import { ShowDescription, ShowDot, ShowImg, ShowImgWrapper, ShowOverlay, ShowTags, ShowWrapper } from './styled';

export const Show: React.FC<ShowProps> = ({ item, setVideoModalOpen, setVideoUrl, type }) => {
    const [saved, setSaved] = React.useState(false);
    const { user, saveShow, deleteSavedShow, getUserData } = UserAuth();

    const showMovieVideo = async () => {
        const passType = type ? type : item.media_type
        const { results } = await getMovieVideos(item.id, passType)
        if (!results.length) return;

        const video = results.find((item: MovieVideo) => item.type === 'Trailer' || item.type === 'Teaser' || item.type === 'Clip')

        if (!video) return;
        setVideoUrl(video.key)
        setVideoModalOpen(true)
    }

    const handleIsSaved = async () => {
        console.log('this ran for ' + item.title)
        const data = await getUserData()
        if (data?.find((dbItem: FirestoreShow) => dbItem.id === item.id)) {
            setSaved(true)
        }
    }

    React.useEffect(() => {
        handleIsSaved()
    }, [user?.email])

    return (
        <ShowWrapper>
            <ShowImgWrapper>
                <ShowImg src={getDataBackground(item.backdrop_path)} />
                <ShowOverlay />
                <PlayButton onClick={showMovieVideo}/>
                <SaveButton isSaved={saved} onClick={() => {
                    if (saved) {
                        deleteSavedShow(item, setSaved)
                        handleIsSaved()
                        return;
                    }
                    saveShow(item, setSaved, type)
                }}/>
            </ShowImgWrapper>
            <ShowDescription>
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
            </ShowDescription>
        </ShowWrapper>
    )
}

type ShowProps = {
    item: TMDBResponse;
    setVideoUrl: (url: string) => void;
    setVideoModalOpen: (open: boolean) => void;
    type?: 'tv' | 'movie'
}