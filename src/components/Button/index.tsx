import React from "react"
import styled, { css } from "styled-components";

export interface ButtonProps {
    text?: string,
    onClick?: (evento: React.MouseEvent) => void
    context: 'primary' | 'secondary'
}

const ButtonStyled = styled.button<ButtonProps>`
    padding: 16px 24px;
    font-size: 20px;
    line-height: 30px;
    cursor: pointer;
    border: 2px solid #EB9B00;
    background-color: ${ (props: ButtonProps) => props.context === 'secondary' ? 'transparent' : '#EB9B00' };
    color: ${ (props: ButtonProps) => props.context === 'secondary' ? '#EB9B00' : '#FFF' };
    ${ (props: ButtonProps) => props.context === 'secondary' 
        ? css`
            &:hover {
                color: #FFF;
                background-color: #EB9B00;
            }
        ` 
        : css`
            &:hover {
                color: #002F52;
            }
        ` 
    }
`

export const Button = ({ text, onClick, context = 'primary' }: ButtonProps) => {
    return (
        <ButtonStyled context={context} onClick={onClick}>
            {text}
        </ButtonStyled>
    )
}