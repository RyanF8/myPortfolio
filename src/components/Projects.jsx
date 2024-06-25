import React from 'react';
import ProjectItem from './ProjectItem';
import JeopardyImg from '../assets/jeopardy screenshot.png';
import ReactImg from '../assets/react chat screenshot.png';

const Projects = () => {
  const projects = [
    {
      img: JeopardyImg,
      title: 'Jeopardy App',
      link: 'https://github.com/uprighted-learners/jeopardy-project-1-RyanF8', 
    },
    {
      img: ReactImg,
      title: 'React Chat App',
      link: 'https://github.com/uprighted-learners/react-chat-supercoolteam', 
    },
    // Add more projects as needed here
  ];

  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
      Jeopardy Board | Web-based interactive jeopardy game that utilizes Javascript for functionality and CSS3
Purpose: Developed a Jeopardy board game web application using HTML, CSS, and JavaScript. Implemented game logic, question display, player score tracking, and user interaction features.
Key Components and Technologies:
Developed HTML, CSS, and JavaScript components for game logic, player score tracking, and user interaction features.
Created popup modals for displaying questions and implemented user interaction functionalities such as answer submission and guess/pass options.
Maintained version control using Git and optimized code for performance and usability.
Highlight Skills: Javascript | CSS | HTML | Git | Agile | CI/CD
<br/>

RW Chat App | Web-based real-time chat application with user sign-up/ login and multiple chat rooms.
Purpose: Developed a real-time chat application using React.js for the frontend and Node.js with Express.js for the backend. Implemented user authentication, message persistence, and real-time updates.
Key Components and Technologies:
Developed frontend chat interface components and authentication forms using React.js and backend APIs with Node.js and Express.js.
Implemented user authentication with JWT, real-time communication using WebSocket, and room management features, enhancing user experience and engagement.
Utilized MongoDB for message persistence and database interaction, ensuring data reliability and scalability.
Highlight Skills: Git | React | Reactstrap | Express| Postman | MongoDB | JavaScript | CSS3 | HTML5 | CI/CD | Agile
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            img={project.img}
            title={project.title}
            link={project.link} 
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
