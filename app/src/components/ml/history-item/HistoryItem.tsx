import React from 'react'
import { OutPredictionDto } from './../../../models/Ml';

const HistoryItem = ({output, probability, provider}: OutPredictionDto) => {
    return (
        <div>
            {`${provider}: ${output} | ${probability}`}
        </div>
    )
}

export default HistoryItem
