import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <h3>react sikh lo</h3>
    )
}

const AnotherElement = (<a href = 'http://google.com' target = '_blank' >google.com </a>);

// const ReactElement = {
//   type : 'a',
//   props : {
//       href : 'https://react.dev/learn',
//       target : '_blank'
//   },
//   children : 'click here to learn React'
// }

// ye kaam isliye nahi kr raha kyuki jo object h ReactElement uski key ka naam sahi nahi hoga
// jaise ki hum => Shubham : 'a', ye bhi likh sakte h 
// iska sahi syntax =>
  // key ka naam  nahi h
  // 1st property uska type
  // 2nd property uske object of attribute
  // 3rd property uska innerHTML
  // 4th variables
const lang = ' --react--'
const ReactElement = React.createElement(
  'a',
  {
    href : 'https://react.dev/learn',
    target : '_blank'
  },
  'click here to learn React',
  lang
)
ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    // MyApp()
    // <MyApp />
    // <ReactElement/>
    // AnotherElement
    // ReactElement
)
