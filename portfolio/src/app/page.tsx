import ProjectCard from "@/components/ProjectCard"
import GDSC from "../../public/project-covers/gdsc.png"
import TravelBro from "../../public/project-covers/travelBro.png"
import H4G from "../../public/project-covers/h4g.png"
import JTC from "../../public/project-covers/jtc.png"

export default function Home() {
  return (
    <main>
      <section className="my-6 grid-layout text-white">
        {/* about me */}
        <div className="flex flex-col col-start-1 col-span-5 gap-3">
          <p className="caption">About me</p>
          <p className="body">
            Hey there, I am Rik. I am currently a second year Computer Science
            student at the National University of Singapore (NUS). My passion in
            Tech for Good drive me to build things that others benefit from.
          </p>
          <p className="body">
            I hope to remain grounded and grateful for the opportunities
            presented to me. My goal one day is to develop solutions that impact
            the lives of many and level the playing field in the world.
          </p>
        </div>

        {/* work experience */}
        <div className="grid grid-cols-6 gap-3 col-start-7 col-end-13">
          <p className="caption col-start-1 col-span-2">Work Experience</p>
          <p className="caption col-start-3">Role</p>
          <p className="caption col-start-5">Duration</p>
          <WorkExperience
            company="Jurong Town Corporation"
            role="Software Engineering Intern"
            duration="May 2024 - Aug 2024"
          />

          <WorkExperience
            company="Google Developer Student Club NUS"
            role="Full Stack Software Engineer"
            duration="Aug 2023 - May 2024"
          />
          <WorkExperience
            company="NUS School of Computing"
            role="Teaching Assistant"
            duration="Aug 2023 - May 2024"
          />
          <WorkExperience
            company="Gelatology Lab "
            role="Co-founder"
            duration="Jan 2022 - Jan 2024"
          />
        </div>
      </section>

      <div className="grid relative z-10 col-start-1 col-end-13 grid-cols-3 grid-gap">
        {/* column 1 */}
        <div className="flex flex-col gap-4">
          <ProjectCard
            link="jtc"
            image={JTC}
            title="Jurong Town Corporation"
            description="Smart District Division"
            alt="JTC cover image"
          ></ProjectCard>{" "}
        </div>

        {/* column 2 */}
        <div className="flex flex-col gap-4">
          <ProjectCard
            link="gdsc"
            image={GDSC}
            title="Google Developer Student Clubs"
            description="#TechforGood"
            alt="GDSC cover image"
          ></ProjectCard>

          <ProjectCard
            link="big-heart-bros"
            image={H4G}
            title="Hack4Good 2024"
            description="Creating solutions for Non-Profit Organisations"
            alt="Hack4Good cover image"
          ></ProjectCard>
        </div>

        <div className="flex flex-col gap-4">
          <ProjectCard
            link="travelBro"
            image={TravelBro}
            title="TravelBro"
            description="One-stop Travel Planner"
            alt="TravelBro cover image"
          ></ProjectCard>
        </div>
      </div>
    </main>
  )
}

function WorkExperience(props: any) {
  return (
    <>
      <h1 className="col-span-2 col-start-1 text-white body">
        {props.company}
      </h1>
      <h1 className="col-span-2 col-start-3 text-white body opacity-80">
        {props.role}
      </h1>
      <h1 className="col-span-2 col-start-5 text-white body opacity-80">
        {props.duration}
      </h1>
    </>
  )
}
