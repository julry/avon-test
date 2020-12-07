import {getQuestionById} from "../../../utils/getQuestionById";
import React from "react";
import {QuestionWrapper} from "../../QuestionWrapper";

const Question2 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('2')}
            {...props}
        />
    )
}

export default Question2;