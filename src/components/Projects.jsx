import React from 'react';
import ProjectItem from './ProjectItem';
import Images from '../../assets/Images'

const Projects = () => {
  const projects = [
    {
      img: Images.jeopardyImg,
      title: 'Jeopardy App',
      link: 'https://github.com/uprighted-learners/jeopardy-project-1-RyanF8', 
    },
    {
      img: Images.reactChatImg,
      title: 'React Chat App',
      link: 'https://github.com/uprighted-learners/react-chat-supercoolteam', 
    },
    {
      img: Images.guessTheNumberImg,
      title: 'Guess The Number Game',
      link: 'https://github.com/RyanF8/Guess-The_Number-Game-RyanF8',
    },
    {
      img: Images.zorkingtonImg,
      title: 'Zorkington',
      link: 'https://github.com/RyanF8/Zorkington/tree/main',
    }
    // Add more projects as needed here
  ];

  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
<b>Jeopardy Game</b> | Developed a Jeopardy board game web application using HTML, CSS, and JavaScript. Implemented game logic, question display, player score tracking, and user interaction features.
features.
Highlight Skills: Javascript | CSS | HTML | Git | Agile | CI/CD
<br/>

<b>RW Chat App</b> | Web-based real-time chat application with user sign-up/ login and multiple chat rooms.
Developed a real-time chat application using React.js for the frontend and Node.js with Express.js for the backend.
Highlight Skills: Git | React | Reactstrap | Express| Postman | MongoDB | JavaScript | CSS3 | HTML5 | CI/CD | Agile
<br/>

<b>Guess The Number</b> | Console game where users can guess the computers number or they can pick a number and the computer tries to guess it.
Highlight skills:  JavaScript | Git | Agile | CI/CD
<br/>

<b>Zorkington</b> | A text-based adventure game in the console.
Highlight skills:  JavaScript | Git | Agile | CI/CD
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
