import Image from "next/image"
import JTC from "../../../public/images/JTC/pdd-hero.jpeg"
import ProjectTitle from "@/components/ProjectTitle"
import ProjectBody from "@/components/ProjectBody"
import ProjectDetails from "@/components/ProjectDetails"
import ProjectMedia from "@/components/ProjectMedia"
import Divider from "@/components/Divider"
import TechnicalTerm from "@/components/TechnicalTerm"
import LinkCard from "@/components/LinkCard"
import ProjectHero from "@/components/ProjectHero"

function page() {
  return (
    <div>
      <ProjectHero image={JTC} alt="gdsc hero" />
      <div className="grid grid-cols-12 grid-gap">
        <ProjectTitle
          company="Jurong Town Corporation"
          description="Punggol Digital District"
        />
        <ProjectBody>Current Internship</ProjectBody>
        <ProjectDetails
          role="Software Engineering Intern"
          duration="May 2024 - Aug 2024"
          tools={[]}
        />
        <LinkCard link="https://estates.jtc.gov.sg/pdd/sustainable?utm_source=Google&utm_medium=PDDBrandB&utm_term=Branded&utm_campaign=JTCEstates&gad_source=1#sustainable">
          Punggol Digital District
        </LinkCard>

        <Divider />

        <ProjectBody>More to come!</ProjectBody>
      </div>
    </div>
  )
}

export default page
