import * as React from 'react';
import { VideoModalWrapper, ModalOverlay } from './styled';

export const VideoModal: React.FC<VideoModalProps> = ({ videoUrl }) => {
    return (
        <>
        <ModalOverlay />
        <VideoModalWrapper onClick={(e) => e.stopPropagation()}>
            <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${videoUrl}`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            >
            </iframe>
        </VideoModalWrapper>
        </>
    )
}

type VideoModalProps = {
    videoUrl: string;
}