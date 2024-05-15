import Link from "next/link"
import Image from "next/image"
import React from "react"

function ProjectCard(props: any) {
  return (
    <Link href={`${props.link}`} className="text-white">
      <Image src={props.image} alt={props.alt} className="w-full z-[10]" />
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
