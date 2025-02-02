import { useState } from 'react'
import getAIResponse from './AIHandler'


export default function App({ setNewSummary, currSummary }) {

    const UpdateSummary = (newSummary) => {
        setNewSummary(newSummary)
    }
    const [summaryPrompt, setSummaryPrompt] = useState("")
    const [userAreaPrompt, setUserAreaPrompt] = useState("")

    return (
        <>
            <div class='w-5/6 justify-center text-center items-center flex flex-col p-5'>

                <p>Set a high level summary, followed by a target user group, you don't need to specify personas at this level just product area.</p>
                <div class="flex flex-row w-5/6 p-4 gap-4">
                    <input type="text" onChange={e => setSummaryPrompt(e.target.value)} placeholder='Enter a high level summary' class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                    <input type="text" onChange={e => setUserAreaPrompt(e.target.value)} placeholder='Target user group' class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <button onClick={()=>getAIResponse("You're an assistant to a product manager, they're going to provide you a high level overview of a new product you're building a PRD for. Expand to a maximum of 80 words, be concise and technical where necessary. The last line can have a small amount of flourish. You should further consider the product is aimed at the following target user group "+userAreaPrompt +" and amend the response as such."
                    ,summaryPrompt
                    ,UpdateSummary)} 
                    class="m-3 relative overflow-hidden rounded-md bg-gray-50 dark:bg-gray-700 px-5 py-2.5 text-white duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90">
                        Generate</button>
                
                <textarea value={currSummary} class="h-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>


            </div>
        </>
    )



}
