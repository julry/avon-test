import {getQuestionById} from "../../utils/getQuestionById";
import React from "react";
import {QuestionWrapper} from "../QuestionWrapper";

const Question1 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('1')}
            {...props}
        />
    )
}

export default Question1;