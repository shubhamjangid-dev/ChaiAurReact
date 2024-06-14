import { useState } from 'react'
import './App.css'
import InputBox from './InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [currencyTo, setCurrencyTo] = useState("inr")
  const [currencyFrom, setCurrencyFrom] = useState("usd")
  const [amountFrom, setAmountFrom] = useState(0)
  const [amountTo, setAmountTo] = useState(0)

  const currencyInfo = useCurrencyInfo(currencyFrom);

  const options = Object.keys(currencyInfo)
  
  const convert = function(){
    const rates = currencyInfo[currencyTo]
    setAmountTo(amountFrom*rates)
  }

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{
                backgroundImage: `url('https://img.freepik.com/premium-vector/global-currency-background_115579-405.jpg')`,
            }}>
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/70">
          
          <form onSubmit={(e)=>{e.preventDefault()}}>
            
            <InputBox 
              label="From" 
              amount={amountFrom} 
              onAmountChange={setAmountFrom} 
              selectCurrency={currencyFrom} 
              onCurrencyChange={setCurrencyFrom}
              currencyOptions={options}
            />
            
            <div className="relative w-full h-0.5">
              <button onClick={()=>{
                 let temp = currencyTo; 
                 setCurrencyTo(currencyFrom);
                 setCurrencyFrom(temp);
                 temp = amountTo;
                 setAmountTo(amountFrom);
                 setAmountFrom(temp);
                 }}
                 type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
                swap
              </button>
            </div>
            
            <InputBox 
              label="To" 
              amount={amountTo} 
              onAmountChange={setAmountTo} 
              selectCurrency={currencyTo} 
              onCurrencyChange={setCurrencyTo}
              currencyOptions={options}
              amountDisabled={true}
            />
            
            <button type="submit" onClick={convert} className="w-full bg-blue-600 text-white px-4 py-3 my-1 rounded-lg">
              Convert {currencyFrom.toUpperCase()} to {currencyTo.toUpperCase()}
            </button>

          </form>
        </div>
      </div>
    </>
  )
}

export default App
