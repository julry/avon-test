import { questions } from "../questions.config";

export const getQuestionById = (id) => {
    return questions.find(question => question.id === id);
};