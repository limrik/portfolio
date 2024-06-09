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
        <div className="relative h-[49vw] my-8 overflow-hidden">
          {" "}
          {/* Set a fixed height */}
          <article
            className={`w-full h-full transition duration-500 rounded-md ease-out ${
              isImageLoaded ? "opacity-1" : "opacity-0"
            }`}
          >
            <Image
              src={props.image}
              alt={props.alt}
              fill // Fill the container
              style={{ objectFit: "cover", objectPosition: "center" }} // Cover the container (cropping)
              onLoad={handleImageLoad}
              className="absolute inset-0" // Ensure the image absolutely covers the container
            />
          </article>
          <Preloader isContentLoaded={isImageLoaded}></Preloader>
        </div>
      </div>
    </>
  )
}

export default ProjectHero
