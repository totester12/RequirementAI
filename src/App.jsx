import { useState } from 'react'

import './App.css'

import Summary from './SummaryPage.jsx'
import Goals from './GoalsPage.jsx'
import Success from './SuccessPage.jsx'
import Result from './ResultPage.jsx'



function App() {

  const [title, setTitle] = useState("This is the title")


  return (

    <div class='mainDiv bg-gray-500 w-full h-screen'>
      <div class='titleDiv flex flex-row justify-center items-center '>
        <p>{title}</p>
      </div>
      <br />
      <div class="w-full flex">
        <button
          class="tabButton w-full py-4 text-center font-medium text-gray-700 bg-gray-100 rounded-lg focus:outline-none active:bg-gray-200 hover:bg-gray-400"
          onClick={e => openTab(e, 'tab1')}>Tab 1</button>
        <br />
        <button class="tabButton  w-full py-4 text-center font-medium text-gray-700 bg-gray-100 rounded-lg focus:outline-none hover:bg-gray-400"
          onClick={e => openTab(e, 'tab2')}>Tab 2</button>
        <button class="tabButton  w-full py-4 text-center font-medium text-gray-700 bg-gray-100 rounded-lg focus:outline-none hover:bg-gray-400"
          onClick={e => openTab(e, 'tab3')}>Tab 3</button>
          <button class="tabButton  w-full py-4 text-center font-medium text-gray-700 bg-gray-100 rounded-lg focus:outline-none hover:bg-gray-400"
          onClick={e => openTab(e, 'tab4')}>Tab 4</button>
      </div>
      <div id="tab1" class="tabcontent p-4 w-full flex flex-row justify-center items-center">
        <Summary />
      </div>
      <div id="tab2" class="tabcontent p-4 w-full flex flex-row justify-center items-center">
        <Goals/>
      </div>
      <div id="tab3" class="tabcontent p-4 w-full flex flex-row justify-center items-center">
        <Success/>
      </div>
      <div id="tab4" class="tabcontent p-4 w-full flex flex-row justify-center items-center">
        <Result/>
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
