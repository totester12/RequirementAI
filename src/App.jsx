import { useState } from 'react'

import './App.css'

import Summary from './SummaryPage.jsx'
import Goals from './GoalsPage.jsx'
import Success from './SuccessPage.jsx'
import Result from './ResultPage.jsx'

function App() {
  

  const [summary, setSummary] = useState("Result Here")


  return (

    <div class='mainDiv absolute top-0 z-[-2] h-full w-screen bg-neutral-950 bg-[radial-gradient(ellipse_70%_80%_at_50%_-10%,rgba(10,119,198,0.3),rgba(255,255,255,0))]  '>
      <div >
        <p class="pt-8 pb-3 text-6xl font-bold tracking-tight bg-transparent flex flex-row text-center justify-center">
          <p class=" bg-transparent font-extrabold bg-gradient-to-bl  from-blue-600 via-teal-500 to-amber-400  bg-clip-text text-transparent ">Create PRD Templates with GenAI</p>
        </p>
      </div>
      <br />
      <div class="flex flex-row justify-center">
        <div class="w-5/6 flex relative flex flex-row gap-1 px-1.5 py-1 list-none rounded-md bg-slate-500">
          <button
            class="tabButton duration-400 transition-all ease-in-out w-5/6 p-4 text-center font-medium text-gray-700  rounded-lg focus:outline-none focus:bg-blue-200 hover:bg-slate-400"
            onClick={e => openTab(e, 'tab1')}>Summary</button>
          <br />
          <button class="tabButton duration-400 transition-all ease-in-out w-5/6 p-4 text-center font-medium text-gray-700  rounded-lg focus:outline-none focus:bg-blue-200 hover:bg-slate-400"
            onClick={e => openTab(e, 'tab2')}>Goals</button>
          <button class="tabButton duration-400 transition-all ease-in-out w-5/6 p-4 text-center font-medium text-gray-700  rounded-lg focus:outline-none focus:bg-blue-200 hover:bg-slate-400"
            onClick={e => openTab(e, 'tab3')}>Success</button>
          <button class="tabButton duration-400 transition-all ease-in-out w-5/6 p-4 text-center font-medium text-gray-700  rounded-lg focus:outline-none focus:bg-blue-200 hover:bg-slate-400"
            onClick={e => openTab(e, 'tab4')}>Result</button>
        </div>
      </div>
      <div id="tab1" class="tabcontent flex flex-col  items-center">
        <Summary setNewSummary={setSummary} currSummary = {summary}/>
      </div>
      <div id="tab2" class="tabcontent p-4 w-full flex flex-row justify-center items-center hidden">
        <Goals />
      </div>
      <div id="tab3" class="tabcontent p-4 w-full flex flex-row justify-center items-center hidden">
        <Success />
      </div>
      <div id="tab4" class="tabcontent p-4 w-full flex flex-row justify-center items-center hidden">
        <Result summ={summary} />
      </div>
    </div>

  )



  function openTab(evt, tabName) {

    console.log("opentab")
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.add("hidden");
    }
    tablinks = document.getElementsByClassName("tabButton");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("bg-gray-200");
    }
    document.getElementById(tabName).classList.remove("hidden");
    evt.currentTarget.classList.add("bg-gray-200");
  }


}



export default App
