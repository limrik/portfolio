"use client"

import Link from "next/link"
import Image from "next/image"
import React from "react"
import { useState } from "react"
import Preloader from "./Preloader"

function ProjectCard(props: any) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const handleImageLoad = () => {
    setIsImageLoaded(true)
  }

  return (
    <Link href={`${props.link}`} className="text-white ">
      <div className="relative w-full ">
        <article
          className={`w-full h-auto transition duration-500 rounded-md ease-out
              ${isImageLoaded ? "opacity-1" : "opacity-0"}`}
        >
          <Image
            src={props.image}
            alt={props.alt}
            className="w-full z-[10]"
            onLoad={() => {
              handleImageLoad()
            }}
          />
        </article>

        <Preloader isContentLoaded={isImageLoaded}></Preloader>
      </div>
      <div className="mt-3">
        <h1 className={`text-[12px] font-mono uppercase opacity-80`}>
          {props.title}
        </h1>
        <p className="text-[12px] font-mono uppercase opacity-50">
          {props.description}
        </p>
      </div>
    </Link>
  )
}

export default ProjectCard
