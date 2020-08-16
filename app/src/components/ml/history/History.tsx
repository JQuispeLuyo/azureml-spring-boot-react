import React from 'react'
import { History } from '../../../models/Ml'
import { HistoryItem } from '../history-item'

const HistoryC = ({ predicts }: History) => {
    console.log("log predic", predicts);
    return <>
        <h1>History</h1>
        {
            
            
            predicts.map(({ output, probability }, index) =>
                <HistoryItem
                    key={index}
                    output={output}
                    probability={probability}
                />
            )
        }
    </>
}

export default HistoryC
