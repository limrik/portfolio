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
        className={`grid overflow-hidden col-start-5 col-end-13 w-full bg-gray-300
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
          <Image
            src={props.image}
            alt={props.alt}
            layout={props.fill ? "fill" : "responsive"}
            onLoadingComplete={() => {
              handleImageLoad()
            }}
            className={`${props.pAll ? "rounded md:rounded-md" : ""}
            ${props.pt && props.pl ? "rounded-tl md:rounded-tl-xl" : ""}
            ${props.pt && props.pr ? "rounded-tr md:rounded-tr-xl" : ""}
            ${props.pb && props.pl ? "rounded-bl md:rounded-bl-xl" : ""}
            ${
              props.pb && props.pr ? "rounded-br-md md:rounded-br-xl" : ""
            } w-full h-auto `}
          />
        </div>
      </div>

      <p className="caption my-2 col-start-5 col-end-13">{props.children}</p>
    </>
  )
}

export default ProjectMedia
