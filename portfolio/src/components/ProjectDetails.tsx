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

  const smTools = props.tools.map((tool: string, index: number) => (
    <p className="text-white/80 body" key={index}>
      {tool}
    </p>
  ))

  return (
    <>
      <div className="col-start-1 col-end-7 md:col-start-5 md:col-end-8 mb-8">
        <p className="text-white caption">Role</p>
        <p className="text-white/80 body">{props.role}</p>

        {/* small screens */}
        <p className="md:hidden mt-8 text-white caption">Duration</p>
        <p className="md:hidden text-white/80 body">{props.duration}</p>
      </div>
      <div className="md:hidden col-start-8">
        <p className="text-white caption">Tools</p>
        <p className="text-white/80 body">{smTools}</p>
      </div>
      {/* middle and large screens */}
      <div className="hidden md:inline col-start-8 col-end-10 mb-8">
        <p className="text-white caption">Duration</p>
        <p className="text-white/80 body">{props.duration}</p>
      </div>
      <div className="hidden md:inline col-start-8 md:col-start-10 md:col-end-11 mb-8">
        <p className="text-white caption">Tools</p>
        {tools}
      </div>
      <div className="hidden md:inline col-start-10 md:col-start-11 md:col-end-12 mb-8">
        <p className="text-white caption">&nbsp;</p>
        {tools2}
      </div>
    </>
  )
}

export default ProjectDetails
