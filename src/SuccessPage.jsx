import { useState } from 'react'
import getAIResponse from './AIHandler'

export default function App({ currSuccess,setSuccess }) {

    const [successIndicators, setSuccessIndicators] = useState("");

    const UpdateSuccess = (newSuccess) => {
        setSuccess(newSuccess)
    }

    return (
        <div className='w-5/6 justify-center text-center items-center flex flex-col '>
            <p>Using your goals, along with what you think is your key success indicator, we'll generate a fuller set of success indicators.</p>
            <input
                type="text"
                onChange={e => setSuccessIndicators(e.target.value)}
                placeholder='Enter your main goal'
                className="text-center w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
                onClick={() => getAIResponse(
                    "Expand on the following success indicator",
                    successIndicators,
                    UpdateSuccess
                )}
                className="m-3 relative overflow-hidden rounded-md bg-gray-50 dark:bg-gray-700 px-5 py-2.5 text-white duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90"
            
            >Generate</button>
             <div className="w-2/3">
                    <textarea
                        value={currSuccess}
                        readOnly
                        className="h-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
        </div>
    )

}
