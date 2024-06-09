"use client"

import Link from "next/link"
import React from "react"
import { useState, useEffect } from "react"

function Navbar() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav className="text-white border-b py-4 border-b-white/30 border-opacity-50 text-[14px] grid-layout sticky top-0 z-50 bg-[#111111]">
      <Link href="/" className="hover:text-yellow-300 col-span-4 col-start-1">
        <h1>Lim Rik</h1>
      </Link>

      <p className="col-span-6 md:col-start-7 md:col-span-3 lg:col-start-7 lg:col-span-2">
        Software Engineer
      </p>
      <p className="hidden col-span-2 lg:inline lg:col-start-9">Singapore</p>
    </nav>
  )
}

export default Navbar
