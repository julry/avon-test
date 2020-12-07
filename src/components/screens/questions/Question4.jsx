import {getQuestionById} from "../../../utils/getQuestionById";
import React from "react";
import {QuestionWrapper} from "../../QuestionWrapper";


const Question4 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('4')}
            {...props}
        />
    )
}

export default Question4;