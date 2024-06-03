import React from "react"

function Preloader(props: any) {
  return (
    <div
      className={`absolute top-0 w-full h-full overflow-hidden z-10 rounded-md ${
        props.isContentLoaded
          ? "opacity-0 bg-[rgba(255,255,255,0)]"
          : "opacity-100 animate-pulse bg-[rgba(255,255,255,.03)]"
      }`}
    >
      {props.hideText ? null : (
        <p
          className={`${
            props.dark ? `text-white` : `text-zinc-500`
          } caption flex h-full justify-center items-center`}
        >
          Generating content
          <span className="inline animate-bounce_1s_ease-in-out_infinite">
            .
          </span>
          <span className="inline animate-bounce_1s_ease-in-out_.1s_infinite">
            .
          </span>
          <span className="inline animate-bounce_1s_ease-in-out_.2s_infinite">
            .
          </span>
        </p>
      )}
    </div>
  )
}

export default Preloader
