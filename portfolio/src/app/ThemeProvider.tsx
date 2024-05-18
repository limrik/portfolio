"use client"

import React, { useState, useEffect, ReactNode } from "react"
import ThemeContext from "./ThemeContext"

type ThemeProviderProps = {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("work")

  useEffect(() => {
    // Get the stored theme value when the component mounts
    const storedTheme =
      typeof window !== "undefined"
        ? window.localStorage.getItem("theme")
        : null
    if (storedTheme) {
      setTheme(JSON.parse(storedTheme))
    }
  }, [])

  const toggleTheme = () => {
    setTheme((prevTheme: any) => (prevTheme === "work" ? "life" : "work"))
  }

  useEffect(() => {
    // Store the theme value whenever it changes
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", JSON.stringify(theme))
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
