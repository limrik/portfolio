import Image from "next/image"
import React from "react"

function ProjectMedia(props: any) {
  return (
    <div className="col-start-5 col-end-13 w-full">
      <Image src={props.image} alt={props.alt} />
      <p className="caption my-2">{props.children}</p>
    </div>
  )
}

export default ProjectMedia
