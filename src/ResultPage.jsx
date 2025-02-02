import { useState } from 'react'


export default function App({ summ }) {

    return (
        <div className="flex justify-center w-full">
            <textarea
                value={summ}
                readOnly
                className="h-96 w-5/6  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
    )

}
