"use client"

import Link from "next/link"
import React, { useContext } from "react"
import * as Switch from "@radix-ui/react-switch"
import { BackpackIcon } from "@radix-ui/react-icons"
import ThemeContext from "@/app/ThemeContext"
import { useState, useEffect } from "react"

function Navbar() {
  const context = useContext(ThemeContext)
  const theme = context ? context.theme : "work"
  const toggleTheme = context ? context.toggleTheme : () => {}

  const backgroundColor = theme === "work" ? "bg-[#111111]" : "bg-white"

  const [isClient, setIsClient] = useState(false)
  const [currentPath, setCurrentPath] = useState("")

  useEffect(() => {
    setIsClient(true)
    setCurrentPath(window.location.pathname)

    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener("popstate", handleRouteChange)

    // Cleanup after component unmount
    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  return (
    <nav
      className={`text-white border-b py-2 items-center border-b-white border-opacity-50 text-[14px] grid-layout sticky top-0 z-50 ${backgroundColor}`}
    >
      <Link href="/" className="hover:text-yellow-300 col-span-4 col-start-1">
        <h1>Lim Rik</h1>
        <h2>{theme}</h2>
      </Link>

      <p className="col-span-2 col-start-7">Software Engineer</p>
      <p className="col-span-3">Singapore</p>
      {isClient && currentPath === "/" && (
        <Switch.Root
          className="SwitchRoot"
          id="airplane-mode"
          onCheckedChange={toggleTheme}
        >
          <Switch.Thumb className="SwitchThumb">
            <BackpackIcon className="BackpackIcon" />
          </Switch.Thumb>
        </Switch.Root>
      )}
    </nav>
  )
}

export default Navbar
