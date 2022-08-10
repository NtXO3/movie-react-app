import * as React from 'react';
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs';
import { SaveButtonStyled } from './styled';

export const SaveButton: React.FC<SaveButtonProps> = ({ isSaved, onClick }) => {
    return (
        <SaveButtonStyled onClick={onClick}>
            {
                isSaved ? <BsFillBookmarkFill /> : <BsBookmark />
            }
        </SaveButtonStyled>
    )
}

type SaveButtonProps = {
    isSaved: boolean;
    onClick?: () => void;
}