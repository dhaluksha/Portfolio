import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import yeeImg from '../public/assets/projects/yee.jpg';
import noteImg from '../public/assets/projects/note.png';
import hotelImg from '../public/assets/projects/hotel.png';
import posImg from '../public/assets/projects/pos.png';
import ecomImg from '../public/assets/projects/ecom.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (<div><br/><br/><br/><br/><br/>
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-2xl tracking-widest uppercase text-[#456676]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        
           <ProjectItem
            title='Restaurent POS System'
            backgroundImg={posImg}
            projectUrl='/pos'
            tech='.Net | C#'
          />
          <ProjectItem
            title='Thread-Safe Hotel Room Reservation Website'
            backgroundImg={hotelImg}
            projectUrl='/hotel'
            tech='Java EE | AJAX'
          />
          <ProjectItem
            title='To-Note Note Taking Mobile App'
            backgroundImg={noteImg}
            projectUrl='/note'
            tech='Kotlin | MVVM'
          />

          <ProjectItem
            title='Yee Yoga UI/UX'
            backgroundImg={yeeImg}
            projectUrl='/yee'
            tech='FIGMA'
          />
       
            <ProjectItem
            title='EcommerceWebsite'
            backgroundImg={ecomImg}
            projectUrl='/ecom'
            tech='PHP | HTML/CSS'
          />
         
        </div>
      </div>
    </div></div>
  );
};

export default Projects;
