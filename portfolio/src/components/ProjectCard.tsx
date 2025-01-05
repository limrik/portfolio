'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import Preloader from './Preloader';

function ProjectCard(props: any) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <Link href={`${props.link}`} className='text-white '>
      <div className='relative w-full group'>
        <article
          className={`w-full h-auto transition duration-500 rounded-md ease-out relative
              ${isImageLoaded ? 'opacity-1' : 'opacity-0'}`}
        >
          <Image
            src={props.image}
            alt={props.alt}
            priority={false}
            loading='lazy'
            className='w-full z-[10] aspect-square object-cover rounded-3xl'
            onLoad={() => {
              handleImageLoad();
            }}
          />
          <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 p-2 opacity-0 bg-black text-white group-hover:opacity-100 w-[80%] rounded-lg duration-200 ease-in'>
            <h1
              className={`text-[12px] font-mono uppercase text-white text-center`}
            >
              {props.title}
            </h1>
          </div>
        </article>

        <Preloader isContentLoaded={isImageLoaded}></Preloader>
      </div>
    </Link>
  );
}

export default ProjectCard;
