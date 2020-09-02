import React from 'react'
import { History } from '../../../models/Ml'
import { HistoryItem } from '../history-item'

const HistoryC = ({ historyItem }: History) => {
    console.log("log predic", historyItem);
    return (
        <div>
            <h1>History</h1>
            {
                historyItem.map(({ predicts }, index1) => {
                    return (
                        <div key={index1}>
                            {
                                predicts.map(({ output, probability, provider }, index2) => {
                                    return  <HistoryItem
                                                key={index2}
                                                output={output}
                                                probability={probability}
                                                provider={provider}
                                            />
                                })
                            }
                            <hr />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default HistoryC
