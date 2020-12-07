import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
    background: rgb(154,15,183);
    position: relative;
    background: linear-gradient(90deg, rgba(154,15,183,1) 0%, rgba(209,32,144,1) 50%, rgba(228,41,85,1) 100%);
    border-bottom-right-radius: 35px;
    padding: 9px 12px 9px 0;
    width: 90vw;
    z-index: 0;    
    max-width: 350px;

    @media screen and (min-width: 1100px){
        max-width: 550px;
        border-bottom-right-radius: 65px;          
    }
`

const Content = styled.div`
    background: transparent;
    min-height: 72px;
    border: solid 2px transparent; 
    border-left: none;
    position: relative;
    color: #fff;
    display: flex;
    align-items: center;
    white-space: pre-line;
    background: linear-gradient(90deg, rgba(154,15,183,1) 0%, rgba(209,32,144,1) 50%, rgba(228,41,85,1) 100%);
    background-clip: padding-box; 
    border-bottom-right-radius: 35px;

    &:before {
            content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            z-index: -1;
            margin: -2px; 
            border-bottom-right-radius: inherit; 
            border-left: inherit;
            background: #fff;
            background: linear-gradient(90deg, rgba(207,159,225,1) 0%, rgba(238,195,207,1) 100%);
    } 
    
    @media screen and (min-width: 1100px){
          border-bottom-right-radius: 65px;          
    }
`




const TextHighlightField = (props) => {
    return (
        <Wrapper className={props.className}>
            <Content>
                {props.children}
            </Content>
        </Wrapper>
    )
}
export default TextHighlightField;