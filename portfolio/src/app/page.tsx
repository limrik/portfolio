'use client';

import ProjectCard from '@/components/ProjectCard';
import GDSC from '../../public/project-covers/gdsc.png';
import TravelBro from '../../public/project-covers/travelBro.png';
import H4G from '../../public/project-covers/h4g.png';
import JTC from '../../public/project-covers/jtc.png';
import Mavennet from '../../public/project-covers/mavennet.png';
import Hoshi from '../../public/project-covers/hoshi.png';
import ForesThree from '../../public/project-covers/foresthree.png';
import Tok2Me from '../../public/project-covers/tok2me.png';
import { useState } from 'react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = {
    work: 'Work Experiences',
    hackathon: 'Hackathons',
    personal: 'Personal Projects',
  };

  const projects = [
    {
      link: 'foresthree',
      image: ForesThree,
      title: 'ForesThree',
      alt: 'ForesThree cover image',
      category: 'personal',
    },
    {
      link: 'hoshi',
      image: Hoshi,
      title: 'Hoshi',
      alt: 'Hoshi cover image',
      category: 'hackathon',
    },
    {
      link: 'mavennet',
      image: Mavennet,
      title: 'Mavennet',
      alt: 'Mavennet cover image',
      category: 'work',
    },
    {
      link: 'tok2me',
      image: Tok2Me,
      title: 'Tok2Me',
      alt: 'Tok2Me cover image',
      category: 'hackathon',
    },
    {
      link: 'jtc',
      image: JTC,
      title: 'Jurong Town Corporation',
      alt: 'JTC cover image',
      category: 'work',
    },
    {
      link: 'big-heart-bros',
      image: H4G,
      title: 'Hack4Good 2024',
      alt: 'Hack4Good cover image',
      category: 'hackathon',
    },
    {
      link: 'gdsc',
      image: GDSC,
      title: 'Google Developer Student Clubs',
      alt: 'GDSC cover image',
      category: 'work',
    },
    {
      link: 'travelBro',
      image: TravelBro,
      title: 'TravelBro',
      alt: 'TravelBro cover image',
      category: 'hackathon',
    },
  ];

  const filterProjects = (category: string) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return true;
    if (selectedCategory === 'all') return true;
    return category === selectedCategory;
  };

  return (
    <main>
      <section className='my-6 grid-layout text-white'>
        {/* about me */}
        <div className='flex flex-col col-start-1 col-end-13 gap-3 md:col-span-5 '>
          <p className='caption'>About me</p>
          <p className='body'>
            I am currently a third year Computer Science student at the National
            University of Singapore (NUS). I am currently in Toronto, Canada as
            part of the NUS Overseas Colleges (NOC) program.
          </p>
          <p className='body'></p>
        </div>

        {/* work experience */}
        {/* <div className='grid grid-cols-6 gap-3 col-start-1 col-end-13 md:col-start-7'>
          <p className='caption col-start-1 col-span-2'>Work Experience</p>
          <p className='caption col-start-4 col-span-2 md:hidden'>
            Role & Duration
          </p>
          <p className='hidden md:inline caption col-start-4 md:col-start-3'>
            Role
          </p>
          <p className='hidden md:inline caption col-start-5'>Duration</p>
          <WorkExperience
            company='Jurong Town Corporation'
            role='Software Engineering Intern'
            duration='May 2024 - Aug 2024'
          />

          <WorkExperience
            company='Google Developer Student Club NUS'
            role='Software Engineer'
            duration='Aug 2023 - May 2024'
          />
          <WorkExperience
            company='NUS School of Computing'
            role='Teaching Assistant'
            duration='Aug 2023 - May 2024'
          />
          <WorkExperience
            company='Gelatology Lab '
            role='Co-founder'
            duration='Jan 2022 - Jan 2024'
          />
        </div> */}
      </section>

      <div className='hidden lg:grid grid-cols-4 gap-4'>
        <div className='hidden lg:flex flex-col gap-2 p-2 bg-neutral-800 rounded-3xl aspect-square'>
          {Object.entries(categories).map(([key, label]) => {
            const count = projects.filter(
              (project) => project.category === key
            ).length;
            return (
              <button
                key={key}
                onClick={() =>
                  setSelectedCategory((prev) => (prev === key ? 'all' : key))
                }
                className={`font-mono text-sm text-left bg-neutral-700 px-3 py-3 rounded-3xl transition-colors flex justify-between items-center ${
                  selectedCategory === key
                    ? 'bg-white text-white'
                    : 'text-white/70 hover:bg-white/10'
                }`}
              >
                <span>{label}</span>
                <span className='ml-2'>{count}</span>
              </button>
            );
          })}
        </div>

        {projects
          .filter((project) => filterProjects(project.category))
          .map((project) => (
            <ProjectCard key={project.link} {...project} />
          ))}
      </div>

      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:hidden'>
        {projects.map((project) => (
          <ProjectCard key={project.link} {...project} />
        ))}
      </div>
    </main>
  );
}

function WorkExperience(props: any) {
  return (
    <>
      <h1 className='col-span-3 col-start-1 md:col-span-2 text-white body'>
        {props.company}
      </h1>
      <h1 className='col-span-3 col-start-4 md:col-start-3 md:col-span-2 text-white body opacity-80'>
        {props.role}
        <p className='md:hidden'>{props.duration}</p>
      </h1>
      <h1 className='hidden md:inline col-span-2 col-start-5 md: text-white body opacity-80'>
        {props.duration}
      </h1>
    </>
  );
}
