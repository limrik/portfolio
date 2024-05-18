"use client"

import { createContext } from "react"

type ThemeContextType = {
  theme: string
  toggleTheme: () => void
}

const defaultContextData: ThemeContextType = {
  theme: "work",
  toggleTheme: () => {},
}

export const ThemeContext = createContext<ThemeContextType | null>(
  defaultContextData
)

export default ThemeContext
