import React from "react"

function ProjectDetails(props: any) {
  const tools = props.tools
    .slice(0, props.tools.length / 2)
    .map((tool: string, index: number) => (
      <p className="text-white/80 body" key={index}>
        {tool}
      </p>
    ))

  const tools2 = props.tools
    .slice(props.tools.length / 2)
    .map((tool: string, index: number) => (
      <p className="text-white/80 body" key={index}>
        {tool}
      </p>
    ))

  return (
    <>
      <div className="col-start-5 col-end-8 mb-8">
        <p className="text-white caption">Role</p>
        <p className="text-white/80 body">{props.role}</p>
      </div>
      <div className="col-start-8 col-end-10 mb-8">
        <p className="text-white caption">Duration</p>
        <p className="text-white/80 body">{props.duration}</p>
      </div>
      <div className="col-start-10 col-end-11 mb-8">
        <p className="text-white caption">Tools</p>
        {tools}
      </div>
      <div className="col-start-11 col-end-12 mb-8">
        <p className="text-white caption">&nbsp;</p>
        {tools2}
      </div>
    </>
  )
}

export default ProjectDetails
