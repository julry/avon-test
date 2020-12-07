import {RadioButton} from "./RadioButton";
import React, {useCallback, useContext, useState} from "react";
import styled from 'styled-components';
import Button from "./shared/Button";
import {ProgressContext} from '../contexts/ProgressContext';
import TextHighlightField from "./shared/TextHighlightField";
import {questions} from "../questions.config";
import {questionImage} from "../constants/images";

const Wrapper = styled.div`
  padding: 5.8% 0  0 43px;
  @media screen and (max-width: 330px){
        padding: 36px 0  0 23px;
  }
  
  @media screen and (min-width: 1100px){
       padding: 62px 0  0 82px;
   }
`

const Question = styled(TextHighlightField)`
  margin-left: -43px;
  font-size: 24px;
  & > div {
      padding-left: 43px;
  }
  
  @media screen and (max-height: 750px){
          font-size: 18px;
          width: 75vw;
          & > div {
              min-height: 62px;
          }
  } 

  @media screen and (max-width: 350px) { 
       & > div {
              min-height: 50px;
      }
  }
   
   @media screen and (min-width: 1100px){
        font-size: 28px;
        margin-left: -82px;

        & > div {
          padding-left: 82px;
          min-height: 142px;
        }
   }
`;


const AnswersBoxStyled = styled.div`
  margin: 40px 0;
  display: ${props => props.last ? 'flex' : 'block'};
  align-items: baseline;
  
  @media screen and (max-height: 750px){
            margin: 20px 0;
  } 
  
`;

const RadioButtonStyled = styled(RadioButton)`
    margin-left: ${props => +props.name===questions.length ? '60px' : ''};
    height: ${props => +props.name===questions.length ? '140px' : ''};

   & label {
     flex-direction: ${props => +props.name===questions.length ? 'column-reverse' : ''};
   }
   
  & svg {
      margin-right: ${props => +props.name===questions.length ? '0' : ''};
      left: ${props => +props.name===questions.length ? '5px' : ''};
      top: ${props => +props.name===questions.length ? '-5px' : ''};
  }
   
   & + & {
      margin-left: ${props => +props.name===questions.length ? '100px' : ''};
   }
   
   @media screen and (max-height: 750px){
        & p{ 
          line-height: 20px;
          font-size: 16px;
        }
    }   
  
  @media screen and (max-width: 350px) { 
       & p{ 
          line-height: 16px;
          font-size: 14px;
        }
  }
  
  @media screen and (min-width: 1100px){
        & p{        
            line-height: 30px;
            font-size: 24px;
        }
  }
   
`

const NextButton = styled(Button)`
  background-color: #9939C1;
  margin-top: 3%;

    @media screen and (max-width: 350px){
         line-height: 16px;
         font-size: 13px;
    } 

    @media screen and (min-width: 1100px){
        line-height: 30px;
        font-size: 24px;
    }
`;



const ImageWrapper = styled.div`
  height: 44%;
  position: fixed;
  display: flex;
  justify-content: flex-start;
  bottom: 0;
  left: -25%;
  right: 0;
  overflow: hidden;
  
  @media screen and (min-width: 640px){
        bottom: 8vh;
        left: auto;
        height: 50vh;
  }
  @media screen and (min-width: 1100px){
        bottom: 11vh;
        height: 72vh;
  }
 
`

const Image = styled.img`
    transform: scale(-1, 1);
    height: 115%;
    @media screen and (min-width: 640px){
        transform: none;
        height: 100%;
    }
    
    
`

export const QuestionWrapper = props => {
    const {question} = props;
    const [questionAnswers, setQuestionAnswers] = useState(question.answers);
    const [isNextAvailable, setIsNextAvailable] = useState(false);
    const {answers, setAnswer, setNext} = useContext(ProgressContext);
    const isLastQuestion = +question.id===questions.length;


    const onNext = () => {
        setNext();
    };

    const handleAnswerChange = useCallback((answerId) => {
        setAnswer(question.id, answerId);
        setIsNextAvailable(true);
    }, [question, setAnswer]);

    return (
        <Wrapper>
            <Question> {question.text} </Question>
            <AnswersBoxStyled last={isLastQuestion}>
                {questionAnswers.map(answer => (
                    <RadioButtonStyled
                        key={answer.id}
                        name={question.id}
                        value={answer.id}
                        checked={answers[question.id]===answer.id}
                        onChange={handleAnswerChange}
                    >
                        {answer.text}
                    </RadioButtonStyled>
                ))}
            </AnswersBoxStyled>
            {isNextAvailable && <NextButton text={'Далее'} onClick={onNext}/>}

            <ImageWrapper>
                <Image src={questionImage} alt={''}/>
            </ImageWrapper>
        </Wrapper>
    );
};
