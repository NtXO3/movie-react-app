import * as React from 'react';
import { PlayButtonIcon, StyledPlayButton } from './styled';
import { AiFillPlayCircle } from 'react-icons/ai'

export const PlayButton: React.FC<PlayButtonProps> = ({ onClick }) => {
    return (
        <StyledPlayButton onClick={onClick}>
            <AiFillPlayCircle />
            Play
        </StyledPlayButton>
    )
}

type PlayButtonProps = {
    onClick: () => void;
}