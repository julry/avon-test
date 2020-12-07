import {getQuestionById} from "../../../utils/getQuestionById";
import React from "react";
import {QuestionWrapper} from "../../QuestionWrapper";

const Question5 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('5')}
            {...props}
        />
    )
}

export default Question5;