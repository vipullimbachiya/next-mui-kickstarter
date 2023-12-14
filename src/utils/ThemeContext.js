// ThemeContext.js
'use client'
import { createContext, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { darkTheme, lightTheme } from '@/assets/style/theme'

const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
})

const ThemeProviderContext = ({ children }) => {
  const defaultTheme = () => {
    let theme = lightTheme
    if (typeof window !== 'undefined') {
      console.log('You are on the browser')
      // 👉️ can use localStorage here
      theme = localStorage.getItem('mode') === 'dark' ? darkTheme : lightTheme
    } else {
      console.log('You are on the server')
    }
    return theme
  }
  const [currentTheme, setCurrentTheme] = useState(defaultTheme)
  const {
    palette: { mode },
  } = currentTheme

  const toggleTheme = () => {
    if (mode === 'light') {
      localStorage.setItem('mode', 'dark')
      setCurrentTheme(darkTheme)
    } else {
      localStorage.setItem('mode', 'light')
      setCurrentTheme(lightTheme)
    }
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export { ThemeContext, ThemeProviderContext }
