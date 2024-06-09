import React from "react"
import FooterLink from "./FooterLink"

function Footer() {
  return (
    <footer className="w-full sticky bottom-0 body bg-[#1C1C1C] text-white grid-layout z-[1]">
      <div className="col-start-7 col-end-12 md:col-end-9 md:py-8">
        <h1 className="pb-4">Let's Connect</h1>
        <FooterLink link="https://www.linkedin.com/in/lim-rik/">
          LinkedIn
        </FooterLink>
        <FooterLink link="https://github.com/limrik">Github </FooterLink>
      </div>

      <div className="col-start-7 col-end-12 md:col-start-9 md:col-end-11 py-8">
        <h1 className="pb-4">Download my resume here</h1>
        <FooterLink link="/Lim_Rik_resume.pdf" resume>
          Resume
        </FooterLink>
      </div>
    </footer>
  )
}

export default Footer
