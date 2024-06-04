"use client"

import Image from "next/image"
import React from "react"
import Preloader from "./Preloader"
import { useState } from "react"

function ProjectMedia(props: any) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const handleImageLoad = () => {
    setIsImageLoaded(true)
  }

  return (
    <>
      <div
        className={`grid overflow-hidden col-start-5 col-end-13 w-full bg-[#111111]
    ${
      props.pl ||
      props.pr ||
      props.pt ||
      props.pb ||
      (props.pAll && isImageLoaded)
        ? `border-solid border-neutral-800 border`
        : ""
    }
    ${props.pAll ? "p-4 md:p-10" : ""}
    ${props.pl ? "pl-4 md:pl-10" : ""}
    ${props.pr ? "pr-4 md:pr-10" : ""}
    ${props.pb ? "pb-4 md:pb-10" : ""}
    ${props.pt ? "pt-4 md:pt-10" : ""}
`}
      >
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
              className="w-full h-auto"
            />
          </article>
          <Preloader isContentLoaded={isImageLoaded}></Preloader>
        </div>
      </div>

      <p className="caption my-2 col-start-5 col-end-13">{props.children}</p>
    </>
  )
}

export default ProjectMedia
