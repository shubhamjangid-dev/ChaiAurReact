import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    Theme : 'light',
    setThemeDark : ()=>{},
    setThemeLight : ()=>{}
})

export const ThemeContestProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}