import React from "react"

function TechnicalTerm(props: any) {
  return (
    <text className="border-dotted border-white/50 border-b-2">
      {props.children}
    </text>
  )
}

export default TechnicalTerm
