import React from "react"
import styled from "styled-components";

export interface ButtonProps {
    text: string,
    onClick?: (evento: React.MouseEvent) => void
}

const ButtonStyled = styled.button`
    background-color: #EB9B00;
    padding: 16px 24px;
    color: #FFF;
    font-size: 20px;
    line-height: 30px;
    border: none;
    cursor: pointer;
    &:hover {
        color: #002F52;
    }
`

export const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <ButtonStyled onClick={onClick} className="ab-btn">
            {text}
        </ButtonStyled>
    )
}