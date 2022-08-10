import * as React from 'react';
import { ButtonLoader, StyledButton } from './styled';

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', isLoading, width, margin, type, onClick }) => {
    return (
        <StyledButton margin={margin} width={width} variant={variant} isLoading={isLoading} type={type} onClick={onClick}>
            {
            !isLoading ? children : (
                <ButtonLoader variant={variant}>
                    <div /> <div /> <div />
                </ButtonLoader>
            )}
        </StyledButton>
    )
};

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary'
    isLoading?: boolean;
    width?: string;
    margin?: string;
    type?: "submit"
    onClick?: () => void;
}