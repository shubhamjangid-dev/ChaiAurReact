import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState('red')

  return (
    <>
      <div className="w-full h-full duration-200 " style = {{backgroundColor: color}}>
      <div className="bg-white rounded-xl fixed flex flex-wrap bottom-12 justify-center m-20 p-3" >
        <button onClick = {() => {setColor('#ef4444')}} className="bg-red-500 m-1 text-white">red</button>
        <button onClick = {() => {setColor('#22c55e')}} className="bg-green-500 m-1 text-white">green</button>
        <button onClick = {() => {setColor('#3b82f6')}} className="bg-blue-500 m-1 text-white">blue</button>
        <button onClick = {() => {setColor('#f97316')}} className="bg-orange-500 m-1 text-white">orange</button>
        <button onClick = {() => {setColor('#9ca3af')}} className="bg-gray-400 m-1 text-white">gray</button>
        <button onClick = {() => {setColor('#fde047')}} className="bg-yellow-300 m-1">yellow</button>
        <button onClick = {() => {setColor('#ec4899')}} className="bg-pink-500 m-1">pink</button>
        <button onClick = {() => {setColor('#a855f7')}} className="bg-purple-500 m-1 text-white">purple</button>
        <button onClick = {() => {setColor('#ddd6fe')}} className="bg-violet-200 m-1">lavender</button>
        <button onClick = {() => {setColor('white')}} className="bg-white m-1">white</button>
        <button onClick = {() => {setColor('black')}} className="bg-black m-1 text-white">black</button>
      </div>
      </div>
    </>
  )
}

export default App
