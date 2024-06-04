import Image from "next/image"
import GDSC from "../../../public/project-covers/gdsc.png"
import ProjectTitle from "@/components/ProjectTitle"
import ProjectBody from "@/components/ProjectBody"
import ProjectDetails from "@/components/ProjectDetails"
import ProjectMedia from "@/components/ProjectMedia"
import Divider from "@/components/Divider"
import TechnicalTerm from "@/components/TechnicalTerm"
import ProjectHero from "@/components/ProjectHero"

// images
import IgniteERD from "../../../public/images/GDSC/ignite_erd.png"
import GDSCRequestsPage from "../../../public/images/GDSC/GDSC_requests_page.png"

function page() {
  return (
    <div>
      <ProjectHero image={GDSC} alt="gdsc hero" />
      <div className="grid grid-cols-12 grid-gap">
        <ProjectTitle
          company="Google Developer Student Clubs"
          description="#TechforGood"
        />
        <ProjectBody>
          During my stint at Google Developer Student Clubs NUS, I was part of
          the team working on Project Ignite. It was under the Social
          Entrepreneurship Wing which aimed to develop a centralised web
          platform which can integrate Non-Profit Organisations (NPOs) to
          external organisations and vice versa, empowering our stakeholders to
          work in a community. Project Ignite would allow NPOs to post requests
          for event spaces and manpower and external organisations can respond
          to these requests and chat with the NPOs to better understand their
          needs.
        </ProjectBody>
        <ProjectDetails
          role="Full Stack Software Developer"
          duration="Aug 2023 - May 2023"
          tools={["React", "PostgreSQL", "Express", "Node"]}
        />
        <Divider />
        <ProjectBody title="Backend">
          Given a product specification document, I created an ERD diagram using{" "}
          <TechnicalTerm>Draw.io</TechnicalTerm>. I then created the model
          schemas using <TechnicalTerm>Prisma</TechnicalTerm> and used{" "}
          <TechnicalTerm>Zod</TechnicalTerm> for schema validation. I also
          developed endpoints for the database to be accessed.{" "}
        </ProjectBody>
        <ProjectMedia image={IgniteERD} alt="Project Ignite ERD diagram">
          Designed ERD diagrams using Draw.io
        </ProjectMedia>
        <Divider />
        <ProjectBody title="Frontend">
          Using <TechnicalTerm>React</TechnicalTerm>, I developed a landing page
          for the requests and offers to be displayed. I used{" "}
          <TechnicalTerm>Tailwind</TechnicalTerm> for styling and{" "}
          <TechnicalTerm>Shadcn</TechnicalTerm> for UI components.
        </ProjectBody>
        <ProjectMedia image={GDSCRequestsPage} alt="GDSC Requests Page">
          Designed a landing page to display requests and offers
        </ProjectMedia>
        <ProjectMedia />
      </div>
    </div>
  )
}

export default page
