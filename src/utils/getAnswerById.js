import {getQuestionById} from "./getQuestionById";

export const getAnswerById = (questionId, answerId) => {
    return getQuestionById(questionId).answers.find(answer => answer.id === answerId);
};