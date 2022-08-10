import * as React from 'react';
import { ShowDot, ShowTags, ShowWrapper } from '../movie/styled';
import { SkeletonImg, SkeletonTitle } from './styled';

export const SkeletonShow = () => {
    return (
        <ShowWrapper>
            <SkeletonImg />
            <ShowTags>
                <SkeletonTitle width="32px" height="8px" />
                <ShowDot />
                <SkeletonTitle width="32px" height="8px" />
                <ShowDot />
                <SkeletonTitle width="32px" height="8px" />
            </ShowTags>
            <SkeletonTitle margin="1rem 0 0 0" width="80%" height="24px" />
        </ShowWrapper>
    )
}