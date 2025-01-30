import { useState } from 'react'


export default function App({ setNewTitle, setNewTitle2 }) {

    return (
        <>
            <div class='flex flex-col justify-center items-center'>
                <div >Hello</div>
                <button onClick={() => setNewTitle()}>Set Title1</button>
                <button onClick={() => setNewTitle2()}>Set Title2</button>
                <div>test</div>
            </div>
        </>
    )

}
