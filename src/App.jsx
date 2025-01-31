import { useState } from 'react'

import './App.css'

import Summary from './SummaryPage.jsx'
import Goals from './GoalsPage.jsx'
import Success from './SuccessPage.jsx'
import Result from './ResultPage.jsx'

function App() {

  const [title, setTitle] = useState("Passing state example")


  return (

    <div class='mainDiv bg-regal-blue w-full h-screen'>
      <p class="p-10 text-6xl font-bold tracking-tight bg-transparent flex flex-row text-center justify-center">
         <p class="pl-4 bg-transparent font-extrabold bg-gradient-to-bl  from-blue-600 via-teal-500 to-amber-400  bg-clip-text text-transparent ">Create PRD Templates using GenAI</p>
      </p>
      <div class='titleDiv flex flex-row justify-center items-center '>
        <p>{title}</p>
      </div>
      <br />
      <div class="flex flex-row justify-center">
        <div class="w-5/6 flex relative flex flex-row gap-1 px-1.5 py-1 list-none rounded-md bg-slate-500">
          <button
            class="tabButton duration-300 transition-all ease-in-out w-5/6 p-4 text-center font-medium text-gray-700  rounded-lg focus:outline-none focus:bg-blue-200 hover:bg-slate-400"
            onClick={e => openTab(e, 'tab1')}>Tab 1</button>
          <br />
          <button class="tabButton duration-300 transition-all ease-in-out w-5/6 p-4 text-center font-medium text-gray-700  rounded-lg focus:outline-none focus:bg-blue-200 hover:bg-slate-400"
            onClick={e => openTab(e, 'tab2')}>Tab 2</button>
          <button class="tabButton duration-300 transition-all ease-in-out w-5/6 p-4 text-center font-medium text-gray-700  rounded-lg focus:outline-none focus:bg-blue-200 hover:bg-slate-400"
            onClick={e => openTab(e, 'tab3')}>Tab 3</button>
          <button class="tabButton duration-300 transition-all ease-in-out w-5/6 p-4 text-center font-medium text-gray-700  rounded-lg focus:outline-none focus:bg-blue-200 hover:bg-slate-400"
            onClick={e => openTab(e, 'tab4')}>Tab 4</button>
        </div>
      </div>
      <div id="tab1" class="tabcontent p-4 w-full grid grid-cols-1 gap-4 justify-center items-center">
        <Summary setNewTitle={replaceTitle} setNewTitle2={replacetwo} />
      </div>
      <div id="tab2" class="tabcontent p-4 w-full flex flex-row justify-center items-center hidden">
        <Goals />
      </div>
      <div id="tab3" class="tabcontent p-4 w-full flex flex-row justify-center items-center hidden">
        <Success />
      </div>
      <div id="tab4" class="tabcontent p-4 w-full flex flex-row justify-center items-center hidden">
        <Result />
      </div>
    </div>

  )

  function replaceTitle() {
    console.log("button clicked")
    setTitle("first prop")
  }
  function replacetwo() {
    setTitle("second clicked")
  }

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
