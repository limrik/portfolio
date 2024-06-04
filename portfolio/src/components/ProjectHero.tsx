"use client"

import Image from "next/image"
import React from "react"
import Preloader from "./Preloader"
import { useState } from "react"

function ProjectHero(props: any) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const handleImageLoad = () => {
    setIsImageLoaded(true)
  }

  return (
    <>
      <div className="col-start-1 col-end-13 w-full bg-[#cac9c9]">
        <div className="relative">
          <article
            className={`w-full h-auto transition duration-500 rounded-md ease-out
              ${isImageLoaded ? "opacity-1" : "opacity-0"}`}
          >
            <Image
              src={props.image}
              alt={props.alt}
              layout="responsive"
              onLoadingComplete={() => {
                handleImageLoad()
              }}
              className="relative overflow-hidden w-full h-[49vw] my-8 object-contain"
            />
          </article>
          <Preloader isContentLoaded={isImageLoaded}></Preloader>
        </div>
      </div>

      <p className="caption mb-2 col-start-1 md:col-start-5 col-end-13">
        {props.children}
      </p>
    </>
  )
}

export default ProjectHero
