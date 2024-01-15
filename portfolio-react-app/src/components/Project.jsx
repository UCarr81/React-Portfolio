import React from 'react';
import SkinScoreImage from '../assets/SkinScore.png';
import FilmPulse from '../assets/FilmPulse.png';
import Weather from '../assets/Weather.png';
import ETracker from '../assets/EmployeeTracker.png';
import './Work.css';

const Project = () => {
  const projects = [
    {
      image: SkinScoreImage,
      demoLink: '/',
      title: 'SkinScore',
    },
    {
      image: FilmPulse,
      demoLink: '/',
      title: 'FilmPulse',
    },
    {
      image: Weather,
      demoLink: '/',
      title: 'Weather',
    },
    {
      image: ETracker,
      demoLink: '/',
      title: 'Emp. Tracker',
    },
  ];

  return (
    <div className="w-full mx-auto p-8 bg-gray-800 md:-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="mb-4 relative group overflow-hidden transition-all duration-300 hover:bg-transparent">
            <div className="image-overlay"></div>
            <img src={project.image} alt={project.title} className="w-full h-[200px] transition-transform duration-300 transform group-hover:scale-105" />
            <a
              href={project.demoLink}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-110"
            >
              <span className="text-2xl font-bold text-white items-center flex" style={{ WebkitTextStroke: '1px black' }}>
                {project.title}
              </span>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>
                Demo
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
