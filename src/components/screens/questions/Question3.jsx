import {getQuestionById} from "../../../utils/getQuestionById";
import React from "react";
import {QuestionWrapper} from "../../QuestionWrapper";


const Question3 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('3')}
            {...props}
        />
    )
}

export default Question3;