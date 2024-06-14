import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((result)=>result.json())
        .then((res)=>{
            setData(res[currency])
            // console.log('responce',res);
        })
        .catch((err)=>{console.log('errorrrr ',err);})
        },[currency])
    return data;
}

export default useCurrencyInfo;