import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    font-size: 11px;
    flex-grow: 0;
    font-weight: 300;
    position: relative;
    z-index: 2;
    align-items: center;
    
    @media screen and (max-width: 350px) { 
           font-size: 8px;
    }
    
    @media screen and (min-width: 1100px){
           font-size: 18px;
    }
    
    & p{
      margin-left: 13px;
      height: fit-content;
    }
    & svg{
        width: 20px;
        height: 20px;
        @media screen and (max-width: 350px) { 
            width: 18px;
            height: 18px;
        }
        @media screen and (min-width: 1100px){
           width: 35px;
           height: 35px;
        }
    }
    & + & {
        margin-top: 8px;
    }
`

const SkillData = props => {
        return (<Wrapper>
            {props.children}
        </Wrapper>
        )
}

export default SkillData;