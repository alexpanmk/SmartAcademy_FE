import React, { useState, useEffect } from 'react'

function QuestionList(props) {

    const { questions, handleQuestionsChange } = props;
    const [questions, setQuestions] = useState();

    //Propagate up the changes
    useEffect(() => {


    }, [questions])

    return (
        <div>QuestionList</div>
    )
}

export default QuestionList