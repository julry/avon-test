import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    -webkit-box-shadow: inset -3px -3px 3px 0px rgba(71,32,87,1);
    -moz-box-shadow: inset -3px -3px 3px 0px rgba(71,32,87,1);
    box-shadow: inset -3px -3px 3px 0px rgba(71,32,87,1);
    background-color: #873CBC;
    border: none;
    padding: 8px 43px 10px;
    border-radius: 10px;
    font-size: 18.5px;
    font-family: AvertaCY, serif;
    color: #fff;
    position: relative;
    z-index: 1;
    
    &:hover{
        cursor: pointer;
        background-color: #602b7d;
    }
`

const Button = (props) => {
    return (
        <StyledButton className={props.className} onClick={props.onClick}>
            {props.text}
        </StyledButton>
    )
}

export default Button;