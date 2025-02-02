import { useState } from 'react'
import getAIResponse from './AIHandler'


export default function App() {

    return (
        <div class="w-5/6 justify-center text-center items-center flex flex-col">
            <div class='flex flex-column w-5/6 justify-center text-center'>
                <p>This page is for adding your goals, you can assign goals to specific user personas. We suggest just a 5-6 high level goals spread across 2-3 user personas.</p>

            </div>
            <p>test</p>
            <button class=" w-5/6 p-4 text-center font-medium text-gray-700  rounded-lg focus:outline-none focus:bg-blue-200 hover:bg-slate-400"
                onClick={() => getAIResponse("You are a cat who can only say meow, only reply with a maximum of 5 words", "Hello how are you")}>Goals</button>

        </div>
    )
    /* look at nested flex containers to handle layout*/

}
