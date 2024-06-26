import React from 'react';

// Example array of project objects
const projectsArray = [
  {
    id: 1,
    name: 'Project 1',
    description: 'This is a description of project 1.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://github.com/TeonaZ/BlackJack-Game',
    codeLink: 'https://github.com/TeonaZ/BlackJack-Game',
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'This is a description of project 2.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    demoLink: 'https://github.com/TeonaZ/BlackJack-Game',
    codeLink: 'http://github.com/project2',
  },
  {
    id: 3,
    name: 'Project 3',
    description: 'This is a description of project 3.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demoLink: 'http://demo.project1.com',
    codeLink: 'http://github.com/project3',
  },
  // Add more projects here
];

function Projects() {
  return (
    <div>
      <h2>My Projects</h2>
      <div>
        {projectsArray.map((project) => (
          <div key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>Technologies Used: {project.technologies.join(', ')}</p>
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
