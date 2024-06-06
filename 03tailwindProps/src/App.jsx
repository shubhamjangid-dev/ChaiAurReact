import './App.css'
import Card from './components/Card'

function App() {
  const someObj = {
    UserName : 'Shubham',
    PassWord : 'Shubham@123'
  }
  const myArray = [1,2,3]
  // pass them with {<Obj/Array>}
  return (
    <>
      <h1 className = 'bg-green-500 p-4 text-black rounded-2xl'>Tailwind</h1>
      <Card username = 'Shubham' user ={someObj}/>
      <Card username = 'Chai Aur Code' btnText='View Channel'/>
      <Card username = 'Hitesh Chaudary' btnText='Visit'/>
    </>
  )
}

export default App
