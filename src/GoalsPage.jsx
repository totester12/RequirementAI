import { useState } from 'react'
import getAIResponse from './AIHandler'


export default function App({setGoals, currGoals,currSummary}) {

    const [mainGoal, setMainGoal] = useState("");
    const [addGoal1, setAddGoal1] = useState("");
    const [addGoal2, setAddGoal2] = useState("");
    const [addGoal3, setAddGoal3] = useState("");
    const [addGoal4, setAddGoal4] = useState("");


    const UpdateGoals = (newSummary) => {
        setGoals(newSummary)
    }

    return (
        <div className='w-5/6 justify-center text-center items-center flex flex-col '>
            <p>Build a set of high level goals, we'll expand and add extras for you to refine.</p>
            <div className="flex flex-row w-full p-4 gap-4">
                <div className="flex flex-col w-1/3 gap-4">
                    <input
                        type="text"
                        onChange={e => setMainGoal(e.target.value)}
                        placeholder='Enter your main goal'
                        className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <input
                        type="text"
                        onChange={e => setAddGoal1(e.target.value)}
                        placeholder='Enter additional goal'
                        className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <input
                        type="text"
                        onChange={e => setAddGoal2(e.target.value)}
                        placeholder='Enter additional goal'
                        className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <input
                        type="text"
                        onChange={e => setAddGoal3(e.target.value)}
                        placeholder='Enter additional goal'
                        className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <input
                        type="text"
                        onChange={e => setAddGoal4(e.target.value)}
                        placeholder='Enter additional goal'
                        className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    
                    <button
                        onClick={() => getAIResponse(
                            "Youre an assistant to a product manager, they're writing a PRD and are going to pass you five goals for the product. You need to expand on these goals and flesh out the goal and why it could be important. For context here is a summary of the new product "+ currSummary +". The goals are contained in the following prompt.",
                            mainGoal + " " + addGoal1 + " " + addGoal2 + " " + addGoal3 + " " + addGoal4,
                            UpdateGoals
                        )}
                        className="m-3 relative overflow-hidden rounded-md bg-gray-50 dark:bg-gray-700 px-5 py-2.5 text-white duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90"
                    >
                        Generate
                    </button>
                </div>
                <div className="w-2/3">
                    <textarea
                        value={currGoals}
                        readOnly
                        className="h-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
            </div>
        </div>
    )
    /* look at nested flex containers to handle layout*/

}
