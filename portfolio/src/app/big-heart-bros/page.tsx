import Image from "next/image"
import H4G from "../../../public/project-covers/h4g.png"
import ProjectTitle from "@/components/ProjectTitle"
import ProjectBody from "@/components/ProjectBody"
import ProjectDetails from "@/components/ProjectDetails"
import ProjectMedia from "@/components/ProjectMedia"
import Divider from "@/components/Divider"
import TechnicalTerm from "@/components/TechnicalTerm"

// images
import SystemDesign from "../../../public/images/H4G/system-design.png"
import UpcomingEvents from "../../../public/images/H4G/upcoming-events.jpg"
import GenerateTestimonial from "../../../public/images/H4G/generate-testimonial.png"
import ExampleTestimonial from "../../../public/images/H4G/example-testimonial.png"
import LinkCard from "@/components/LinkCard"

function page() {
  return (
    <div>
      <Image
        src={H4G}
        alt="Hack4Good hero"
        className="relative overflow-hidden w-full h-[49vw] my-8 object-contain"
      />
      <div className="grid grid-cols-12 grid-gap">
        <ProjectTitle
          company="Hack4Good 2024"
          description="Creating solutions for Non-Profit Organisations"
        />
        <ProjectBody>
          Hack4Good is an annual flagship hackathon organised by Google
          Developer Student Clubs NUS. My team chose the problem statement
          defined by Big At Heart - "Develop a cost-effective system for
          volunteers to enroll, manage activities, and request certificates,
          while enabling nonprofit administrators to efficiently handle forms,
          attendance, and generate detailed reports". I am proud that we made it
          to the finals of the hackathon (top 10 out of 100 teams).
        </ProjectBody>
        <ProjectDetails
          role="Full Stack Software Developer"
          duration="2 weeks"
          tools={["React", "NextAuth.js", "Supabase", "OpenAI API"]}
        />
        <LinkCard link="https://docs.google.com/presentation/d/1Vt3Wvl5koyhArwzo2danmHEAl0Fc2dzFw8pnTal1iZU/edit#slide=id.g1f0c53ac0ea_0_10">
          Pitch Deck
        </LinkCard>
        <LinkCard link="https://github.com/limrik/big-heart-bros" col="1">
          Github
        </LinkCard>

        <Divider />
        <ProjectBody title="System Design">
          We created a web application suited for 3 stakeholders - Big At Heart
          admin, Volunteers and Organisers.
        </ProjectBody>
        <ProjectMedia image={SystemDesign} alt="System Design">
          Overview of application
        </ProjectMedia>

        <Divider />
        <ProjectBody title="User Dashboard">
          I mainly worked on the features that were available to the users.
          Creating a page that was similar to a social media feed enabled users
          to view their upcoming events. I also experimented with the{" "}
          <TechnicalTerm>OpenAI API</TechnicalTerm> for the first time, allowing
          users to select feedback given to them and generating a testimonial
          from that feedback, saving Big At Heart time while giving recognition
          to volunteers.
        </ProjectBody>
        <ProjectMedia image={UpcomingEvents} alt="Upcoming Events">
          Users can view their upcoming events they enrolled for
        </ProjectMedia>
        <ProjectMedia image={GenerateTestimonial} alt="Generate Testimonial">
          Users can select feedback given to them to be used to generate a
          testimonial
        </ProjectMedia>
        <ProjectMedia image={ExampleTestimonial} alt="Example Testimonial">
          Example Testimonial can be saved as PDF
        </ProjectMedia>
      </div>
    </div>
  )
}

export default page
