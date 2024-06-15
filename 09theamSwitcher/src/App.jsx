import {useState } from 'react'
import './App.css'
import { ThemeContestProvider } from './context/ThemeContext'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [Theme, setTheme] = useState("light")

  const setThemeLight = () => {
    setTheme("light")
  }

  const setThemeDark = () => {
    setTheme("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(Theme)
  }, [Theme])
  
  return (
    <ThemeContestProvider value={{Theme, setThemeLight, setThemeDark}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>

          </div>
      </div>
    </ThemeContestProvider>
  )
}

export default App