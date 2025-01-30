import { useState } from 'react'

import './App.css'

function App() {


  return (

    <div class='mainDiv bg-gray-500 w-full h-screen'>
      <div class='titleDiv flex flex-row justify-center items-center '>
        <p>Title Goes Here</p>
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
      </div>
      <div id="tab1" class="tabcontent w-full">
        <h2 class="text-lg font-bold text-gray-800">Tab 1 Content</h2>
        <p class="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel enim euismod,
          imperdiet felis vel, ultrices risus. Sed nec quam id elit fringilla blandit a a risus.</p>
      </div>
      <div id="tab2" class="tabcontent p-4 w-full hidden">
        <h2 class="text-lg font-bold text-gray-800">Tab 2 Content</h2>
        <p class="mt-2 text-gray-700">Duis lobortis velit tellus, eget luctus tellus facilisis eget. Maecenas non massa
          varius, molestie lorem eget, molestie nisi. Suspendisse potenti.</p>
      </div>
      <div id="tab3" class="tabcontent p-4 w-full hidden">
        <h2 class="text-lg font-bold text-gray-800">Tab 3 Content</h2>
        <p class="mt-2 text-gray-700">We're in tab 3 boy</p>
      </div>
    </div>

  )
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

export default App
