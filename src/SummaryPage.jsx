import { useState } from 'react'


export default function App({setNewTitle, setNewTitle2}) {

    return (
        <>
            <div>Hello</div>
            <button onClick={()=>setNewTitle()}>Set Title</button>
            <button onClick={()=>setNewTitle2()}>Set Title</button>
        </>
    )

}
