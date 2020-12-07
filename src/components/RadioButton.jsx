import React from "react";
import styled from 'styled-components'
import ChosenMark from "./svgIcons/ChosenMark";

const InputStyled = styled.input`
  display: none;
`;

const RadioIconStyled = styled(ChosenMark)`
  position: relative;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  margin-right: 12px;
  top: -12px;
  left: -2px;
  visibility: hidden;
  z-index: 3;
  @media screen and (max-width: 350px) { 
       width: 24px;
       height: 24px;
       top: -8px;
  }
  
 
`;

const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  width: 24px;
  height: 24px;
  border: 2px solid white;
  border-radius: 50%;
  
  @media screen and (max-width: 350px) { 
       width: 18px;
       height: 18px;
  }
  
  & ${InputStyled}:checked + ${RadioIconStyled}{
    visibility: visible;
  }
`;

const TextStyled = styled.p`
  color: white;
  font-size: 20px;
  white-space: pre-line;
`;

const WrapperStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  & + & {
    margin-top: 42px;
    @media screen and (max-height: 750px){
         margin-top: 25px;
    } 
    
    
     @media screen and (min-width: 1100px){
         margin-top: 55px;
    } 
  }
  
`;
const TextWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
  flex-shrink: 0;
      
  
`;


export const RadioButton = (props) => {
    const { name, value, checked, children, onChange, className } = props;
    return (
        <WrapperStyled className={className}>
            <LabelStyled >
                <InputStyled
                    type='radio'
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={() => onChange(value)}
                />
                <RadioIconStyled/>
                <TextWrapperStyled>
                    <TextStyled>{children}</TextStyled>
                </TextWrapperStyled>
            </LabelStyled>
        </WrapperStyled>
    )
};