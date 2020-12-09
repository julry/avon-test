import React, {useContext} from 'react';
import styled from 'styled-components';
import {avon, introImage} from "../../constants/images";
import TextHighlightField from "../shared/TextHighlightField";
import Button from "../shared/Button";
import {ProgressContext} from "../../contexts/ProgressContext";
import CyberLogo from "../svgIcons/CyberLogo";
import AvonLogo from "../svgIcons/AvonLogo";

const Wrapper = styled.div`
    padding: 49px 37px 0 53px ;
    color: white;
    white-space: pre-line;
    @media screen and (max-height: 700px){
        padding: 29px 30px 0;
    }
    @media screen and (min-width: 1100px){
        padding: 55px 85px 0 ;
    }
    
    
`

const Logo = styled.div`
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    & svg{
      height: 48px;
    }
    
     & svg:last-child {
        height: 53px !important;
      }
    
    @media screen and (max-height: 750px){
        & svg{
           height: 36px;
        }
        & svg:last-child {
            height: 41px !important; 
        }
    }
    @media screen and (max-width: 330px){
          & svg{
            height: 27px;
          }
          & svg:last-child {
            height: 30px !important;
        }
    }
    @media screen and (min-width: 1100px){
       flex-direction: row;
        & svg{
           height: 70px !important;
        }
        & svg:last-child {
           height: 70px !important;
           margin-left: 30px;
        }
    }
`

const Title = styled(TextHighlightField)`
    margin-left: -53px;
    margin-top: 15px;
    & > div {
        padding-left: 53px;
        padding-right: 15px;
        @media screen and (max-height: 750px){
          padding-left: 30px;
          min-height: 55px;
        }
        @media screen and (min-width: 1100px){
          border-bottom-right-radius: 65px;          
          min-height: 135px;
          padding-left: 85px;

        }
        
    }
    
     @media screen and (max-height: 700px){
         margin-left: -36px;
         width: 75vw;
    }
    
    @media screen and (min-width: 1100px){
        margin: 32px 0 32px -85px;
        border-bottom-right-radius: 65px;
    }
`

const Text = styled.p`
    margin: 10px 0;
    line-height: 23px;
    font-size: 18.5px;
       @media screen and (max-height: 750px){
          max-width: 60vw;
          line-height: 18px;
          font-size: 14px;
       }
       @media screen and (max-width: 330px){
          font-size: 12px;
       }
       
      @media screen and (min-width: 1100px){
        font-size: 28px;
        line-height: 30px;
        &:nth-child(3){
          font-size: 24px;
          max-width: 450px;
        }
      }

`

const ImageWrapper = styled.div`
  width: 100%;
  height: 28%;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  bottom: 0;
  right: 0;
  overflow: hidden;
  
    @media screen and (max-width: 330px){
        height: 24%;
    }
    @media screen and (min-width: 640px){
        height: 50%;
    }
    @media screen and (min-width: 1100px){
         bottom: 40px;
         height: 69%;
    }

`

const Image = styled.img`
    height: 120%;
    @media screen and (min-width: 1100px){
         height: 100%;
    }
`
const StartButton = styled(Button)`
    margin-top: 20px;
    @media screen and (max-height: 750px){
          line-height: 18px;
          font-size: 14px;
   }
   
   @media screen and (min-width: 1100px){
        line-height: 35px;
        font-size: 28px;
   }
`

const Intro = () => {
    const { setNext } = useContext(ProgressContext);

    return(
        <Wrapper>
                <Logo>
                    <CyberLogo />
                    <AvonLogo />
                </Logo>
            <Text>
                {'Avon ушла в cyber-реальность!\nТеперь в компании работают не сами сотрудники, а их аватары.'}
            </Text>
            <Title>
                <Text>
                    {'Какой аватар был бы у тебя в виртуальном офисе Avon?'}
                </Text>
            </Title>
            <Text>{'Узнаешь, ответив\nна 5 вопросов!'}</Text>
            <StartButton text={'Пройти тест'} onClick={setNext}/>
            <ImageWrapper>
                <Image src={introImage} alt={''}/>
            </ImageWrapper>
        </Wrapper>
    )
}
export default Intro;