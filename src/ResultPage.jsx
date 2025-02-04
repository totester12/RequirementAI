import { useState } from 'react'


export default function App({ summ, goals,succ }) {

    return (
        <div class='w-5/6 justify-center text-center items-center flex flex-col '>
            <p class='p-2'>Your Overall Summary</p>
            <div className="flex justify-center w-full">

                <textarea
                    value={summ}
                    readOnly
                    className="h-50 w-5/6  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <p class='p-2'>Your High Level Goals</p>
            <div className="flex justify-center w-full">

                <textarea
                    value={goals}
                    readOnly
                    className="h-50 w-5/6  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <p class='p-2'>Your Success Criteria</p>
            <div className="flex justify-center w-full">

                <textarea
                    value={succ}
                    readOnly
                    className="h-50 w-5/6  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
        </div>
    )

}
