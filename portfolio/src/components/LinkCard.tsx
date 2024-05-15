import React from "react"

function LinkCard(props: any) {
  return (
    <a
      href={props.link}
      className="caption group text-white/80 flex items-center p-4 col-start-5 col-end-9 bg-white/[0.1] rounded-md hover:bg-white/[0.2] hover:text-white"
    >
      <p>{props.children}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="h-3 w-3 ml-auto stroke-[3px] stroke-white/30 group-hover:stroke-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </a>
  )
}

export default LinkCard
