function InputBox({
    label,
    amount,
    selectCurrency,
    onAmountChange, 
    onCurrencyChange, 
    currencyOptions = [],
    amountDisabled = false,
}) {

    return (
      <>
        <div className="bg-white p-3 rounded-lg text-sm flex my-1 ">
            <div className="w-1/2">
                <label className="text-black/40 ">{label}</label>
                <input type="number" onChange={(e)=>{onAmountChange && onAmountChange(e.target.value)}} placeholder="Amount" value={amount} disabled = {amountDisabled} className="outline-none w-full bg-transparent py-1.5"/>
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}} value={selectCurrency} className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">
                    {currencyOptions.map(val =>{
                        return (
                            <option key={val}value={val}>{val}</option>
                        )
                    })}
                </select>
            </div>
        </div>
      </>
    )
  }
  
  export default InputBox