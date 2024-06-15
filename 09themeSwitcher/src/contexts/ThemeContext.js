import { createContext } from 'react'

const ThemeContext = createContext({
    Theme : "light",
    setDarkTheme : ()=>{},
    setLightTheme : ()=>{}
});

export default ThemeContext