import React from "react"

function ProjectTitle(props: any) {
  return (
    <div className="col-span-full col-end-4 sticky top-[5em] text-zinc-100">
      <h1 className="h1">{props.company}</h1>
      <p className="font-mono uppercase opacity-80 text-[12px]">
        {props.description}
      </p>
    </div>
  )
}

export default ProjectTitle
