import Image from "next/image"
import TravelBro from "../../../public/images/TravelBro/TravelBro_Logo_Horizontal.png"
import ProjectTitle from "@/components/ProjectTitle"
import ProjectBody from "@/components/ProjectBody"
import ProjectDetails from "@/components/ProjectDetails"
import ProjectMedia from "@/components/ProjectMedia"
import Divider from "@/components/Divider"
import TechnicalTerm from "@/components/TechnicalTerm"

// images
import Diagrams from "../../../public/images/TravelBro/diagrams.png"
import LoginPage from "../../../public/images/TravelBro/TravelBro_login_page.png"
import TravelPreferences from "../../../public/images/TravelBro/TravelBro_travel_preferences.png"
import SelectActivities from "../../../public/images/TravelBro/TravelBro_select_activities.png"
import ItinerarySummary from "../../../public/images/TravelBro/itinerary_summary.png"
import Itinerary from "../../../public/images/TravelBro/itinerary.png"
import FoodSuggestions from "../../../public/images/TravelBro/food_suggestions.png"
import LinkCard from "@/components/LinkCard"

function page() {
  return (
    <div>
      <Image
        src={TravelBro}
        alt="gdsc hero"
        className="relative overflow-hidden w-full h-[49vw] my-8 object-cover"
      />
      <div className="grid grid-cols-12 grid-gap">
        <ProjectTitle
          company="TravelBro"
          description="One-stop Travel Planner"
        />
        <ProjectBody>
          TravelBro was built by me and my good friend Dayn as part of an NUS
          module, CP2106 Independent Software Development Project (Orbital). We
          created a one-stop travel planner web application capable to
          generating an itinerary based on a person's travel dates and
          preferences. This project is my very first venture into web
          development and I acquired the necessary skills thorugh reading
          documentation and watching Youtube tutorials.
        </ProjectBody>
        <ProjectDetails
          role="Full Stack Software Developer"
          duration="May 2023 - Aug 2023"
          tools={["React", "MongoDB", "Express", "Node", "Zustand", "Jest"]}
        />
        <LinkCard link="https://docs.google.com/document/d/1dKfQuokaTJD5GQxjExhXxoMNdGP47wFoLKb9-EAvfIY/edit?usp=embed_facebook">
          Project Documentation
        </LinkCard>
        <LinkCard link="https://github.com/limrik/travelBro" col="1">
          Github
        </LinkCard>

        <Divider />
        <ProjectBody title="System Design"></ProjectBody>
        <ProjectMedia
          image={Diagrams}
          alt="TravelBro Flow and Sequence Diagrams"
        >
          Flow and Sequence Diagrams
        </ProjectMedia>

        <Divider />
        <ProjectBody title="User Authentication">
          We provided two ways in which the user could be authenticated - either
          by email and password or via Google Single Sign-On service. We were
          able to do this by making use of{" "}
          <TechnicalTerm>Google's OAuth 2.0 API</TechnicalTerm>.
        </ProjectBody>
        <ProjectMedia image={LoginPage} alt="TravelBro login page">
          Login via email and password or Google SSO service
        </ProjectMedia>

        <Divider />
        <ProjectBody title="Input of preferences">
          To generate the itinerary based on user preference, we required the
          user to provide the location and duration of travel. We also allowed
          the user to specify their preferred pace of travel.
          <br />
          <br />
          Users are then presented with a plethora of activities with details
          retrieved from the <TechnicalTerm>Google Places API</TechnicalTerm>.
        </ProjectBody>
        <ProjectMedia
          image={TravelPreferences}
          alt="TravelBro travel preferences"
        >
          Users input their trip details and pace preference
        </ProjectMedia>
        <ProjectMedia
          image={SelectActivities}
          alt="TravelBro select activities"
        >
          Users select activities they want to engage in
        </ProjectMedia>

        <Divider />
        <ProjectBody title="Itinerary Generation">
          The selected activities pass through our{" "}
          <TechnicalTerm>Travelling Salesperson Algorithm</TechnicalTerm> which
          minimises the travel distance between activities and a summary of the
          itinerary is presented to the user. Travel information are retrieved
          from the <TechnicalTerm>Google Maps API</TechnicalTerm>.
          <br />
          <br />
          The user can then manually adjust the itinerary and include notes and
          other events. They can also receive suggestions of new activities or
          nearby food places. Users are also warned if they have placed an
          activity at a timeslot beyond the operating hours of the activity.
        </ProjectBody>
        <ProjectMedia
          image={ItinerarySummary}
          alt="TravelBro Itinerary Summary"
        >
          user receives a summary of itinerary
        </ProjectMedia>
        <ProjectMedia image={Itinerary} alt="TravelBro Generated Itinerary">
          user is able to manually adjust itinerary
        </ProjectMedia>
        <ProjectMedia image={FoodSuggestions} alt="TravelBro Food Suggestions">
          Example of food suggestions provided to user
        </ProjectMedia>
      </div>
    </div>
  )
}

export default page
