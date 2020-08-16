import React from 'react'
import { OutPredictionDto } from './../../../models/Ml';

const HistoryItem = ({output, probability}: OutPredictionDto) => {
    return (
        <div>
            {`${output} - ${probability}`}
        </div>
    )
}

export default HistoryItem
