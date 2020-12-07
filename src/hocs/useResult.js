import React, { useContext } from 'react';
import { ProgressContext } from '../contexts/ProgressContext';
import { getAnswerById } from '../utils/getAnswerById';
import { AnswerType, answerTypes } from '../answerTypes.config';

const DEFAULT_RESULT = AnswerType.SalesF;

const IMPORTANT_QUESTIONS_IDS = ['5', '6'];

export const useResult = () => {
    const { answers } = useContext(ProgressContext);
    const results = IMPORTANT_QUESTIONS_IDS.map((questionId)=>{
        return getAnswerById(questionId,answers[questionId])?.type ;
    })
    const result = results[0]?.filter(type=>answerTypes[type].sex===results[1]);

    let finalResult;

    if (result?.length > 1) {
        finalResult = result[Math.round(Math.random())];
    }
    else {
        finalResult = result&&result[0];
    }
    return answerTypes[finalResult || DEFAULT_RESULT];
};