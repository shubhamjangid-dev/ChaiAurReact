import React,{useState, useEffect} from 'react'
import ThemeContext from './ThemeContext'

function ThemeContextProvider({children}) {
    const [Theme, setTheme] = useState('light')
    
    const setDarkTheme = ()=>{
        setTheme("dark");
    }
    const setLightTheme = ()=>{
        setTheme("Light");
    }
    useEffect(() => {
      document.querySelector('html').classList.remove("light", "dark")
      document.querySelector('html').classList.add(Theme)
    }, [Theme])
    
  return (
    <ThemeContext.Provider value = {{Theme, setDarkTheme, setLightTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider