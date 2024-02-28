//Learner view for attempting quiz
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function LearnerView() {

    const { courseId } = useParams()


    return (
        <div>LearnerView: {courseId}</div>
    )

}

export default LearnerView