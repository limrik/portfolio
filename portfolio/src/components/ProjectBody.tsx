import React from "react"

function ProjectBody(props: any) {
  return (
    <div className="grid-gap col-start-1 md:col-start-5 col-end-13 mb-2 text-white">
      {props.title !== undefined && (
        <h2 className="mt-4 mb-2 h2">✶ {props.title}</h2>
      )}
      <p className="body">{props.children}</p>
    </div>
  )
}

export default ProjectBody
