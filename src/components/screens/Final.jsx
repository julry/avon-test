import React from 'react';
import styled from 'styled-components';
import {useResult} from "../../hocs/useResult";
import SkillData from "../SkillData";
import {AnswerType} from "../../answerTypes.config";
import TextHighlightField from "../shared/TextHighlightField";
import VkIcon from "../svgIcons/VkIcon";

const Wrapper = styled.div`
  padding: 4% 9.5% 0 9%;
  white-space: pre-line;
  height: 100%;
  
  @media screen and (min-width: 1100px){
       padding: 70px 0  0 98px;
   }
`

const AvatarWrapper = styled.div`
    position: relative;
    height: 45%;
    
    @media screen and (max-width: 350px) { 
           height: 40%;
    }
    
    @media screen and (min-width: 1000px){
        position: absolute;
        display: flex;
        right:0;
        flex-direction: row-reverse;
        padding-right: 53px;
        align-items: center;
        width: 100vw;
        top: 70px;
        height: 75%;
    }
`

const ImageWrapper = styled.div`
    position: absolute;
    right: -9.5vw;
    left: 0;
    top: -3%;
    height: 100%;
    overflow: hidden;
    & img {
      position: absolute;
      right: 0;
      height: 100%;
      object-fit: contain;
      transform: ${props => props.type===AnswerType.HR ? 'scale(-1, 1)' : ''};
      
       @media screen and (min-width: 1000px){
            transform: none;
            right: 15%;
       }
    }
    
    @media screen and (min-width: 1000px){
        top: 0;
        height: 110%;
        right: 0;
    }
    
`

const StyledP = styled.p`
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.105em;
    margin-bottom: 1.3982%;
    
    @media screen and (max-height: 700px) {
        font-size: 12px;
        line-height: 15px;
    }
    @media screen and (max-width: 350px) { 
        font-size: 11px;
        line-height: 13px;
    }
    @media screen and (min-width: 1100px){
        font-size: 24px;
        line-height: 30px;
    }
`
const Title = styled.p`
    font-size: 24px;
    line-height: 24px;
    font-weight: 600;
    margin-bottom: 3%;
    @media screen and (max-height: 700px) {
        font-size: 20px;
        line-height: 20px;
    }
    @media screen and (max-width: 350px) { 
        font-size: 16px;
        line-height: 16px;
        margin-bottom: 5%;
    }
    
    @media screen and (min-width: 1100px){
        font-size: 36px;
        margin-bottom: 25px;
        line-height: 36px;
    }
    
`
const PositionField = styled(TextHighlightField)`
    margin-left: -9vw;
    padding: 7px 9px 7px 0;
    width: 82vw;
    & div {
        min-height: 55px;
        padding-left: 9vw;
        @media screen and (max-width: 350px) { 
            min-height: 45px;
        }
        @media screen and (min-width: 1100px){
            min-height: 100px;
        }
    }
    
    @media screen and (max-width: 350px) { 
        font-size: 13px;
        line-height: 15px;
    }
    
     @media screen and (min-width: 1000px){
        min-width: 590px;
        width: 33vw;
        font-size: 24px;
        line-height: 30px;
    }
     
`

const PositionFullWidth = styled.div`
        max-height: 70px;
        padding: 14px 28px 14px 36px;
        margin-left: -9vw;
        background: rgb(129,8,198);
        background: linear-gradient(90deg, rgba(129,8,198,1) 0%, rgba(196,28,154,1) 50%, rgba(228,41,92,1) 100%);
        width: 100vw;        
        
`

const Description = styled.p`
    font-size: 14px;
    margin-top: 3%;
    position: relative;
    z-index: 2;
    @media screen and (max-height: 700px) {
        font-size: 12px;
        margin-top: 5%;
    }
    @media screen and (max-width: 350px) { 
        font-size: 10px;
    }
    
    @media screen and (min-width: 1000px){
        width: 36vw;
        margin-top: 20px;
        text-shadow: 0px 2px 1px black;
        font-size: 22px;
    }
    
`

const Skills = styled.div`
    @media screen and (min-width: 1000px){
        margin-top: -70px;
    }
`

const VKWrapper = styled.a`
    display: flex;
    font-size: 11px;
    position: relative;
    z-index: 2;
    font-weight: 300;
    color: white;
    text-decoration: none;
    margin-top: 2.5834%;
    & svg{
      width: 36px;
      height: 36px;
      margin-right: 12px;
        @media screen and (max-width: 350px) { 
          width: 32px;
          height: 32px;
        }
        @media screen and (min-width: 1100px){
            width: 62px;
            height: 62px;
        }
    }
    @media screen and (max-height: 700px) {
             margin-top: 5%;
    }
    
    @media screen and (max-width: 350px) { 
        font-size: 9px;
    }
    
   @media screen and (min-width: 1100px){
           font-size: 18px;
           margin-top: 35px;
   }
`

const Final = () => {
    const result = useResult();

    return (
        <Wrapper>
             <StyledP> ТВОЙ АВАТАР </StyledP>
            <Title>
                {result.title}
            </Title>
            <AvatarWrapper>
                <Skills>
                    {result.skills.map(x=>
                        <SkillData>
                            {x.icon()}
                            <p>{x.name}</p>
                        </SkillData>
                    )}
                </Skills>
                <ImageWrapper type={result.type}>
                    <img src={result.image}/>
                </ImageWrapper>
            </AvatarWrapper>
            {result.type === AnswerType.SalesF && (window.innerWidth < 1000) ?
                    <PositionFullWidth>
                        <p>
                            {result.position}
                        </p>
                    </PositionFullWidth>

                : <PositionField>
                    <p>
                        {result.position}
                    </p>
                </PositionField>
            }

            <Description>
                {result.description}
            </Description>
            <VKWrapper href={'https://vk.com/avon_careers'} target={'_blank'}>
                <VkIcon />
                {'Узнать больше о команде, которую\nне остановят никакие сложности,\nможно в группе VK'}
            </VKWrapper>

        </Wrapper>
    )
}

export default Final;