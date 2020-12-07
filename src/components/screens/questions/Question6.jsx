import {getQuestionById} from "../../../utils/getQuestionById";
import React from "react";
import {QuestionWrapper} from "../../QuestionWrapper";

const Question6 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('6')}
            {...props}
        />
    )
}

export default Question6;