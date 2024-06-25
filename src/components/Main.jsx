import React from 'react'
import Images from '../assets/Images'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

function Main() {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover' src={Images.image1} alt="My Local Image" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/30'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Ryan Fish</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'> 
            <TypeAnimation
                sequence={[
                'Developer',//types one
                2000, 
                'Coder', //deletes one and types two
                2000,
                'Tech Enthusiast', //deletes two and types three
                2000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em', paddingLeft: '5px'}}
                />
            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <a href='https://x.com/wildFlounder8' target='_blank' rel='noreferrer'>
                <FaTwitter className='cursor-pointer' size={20} />
                </a>
                <a href='https://www.linkedin.com/in/ryan-fish-15791517b/' target='_blank' rel='noreferrer'>
                <FaLinkedin className='cursor-pointer' size={20} />
                </a>
                <a href='https://github.com/RyanF8' target='_blank' rel='noreferrer'>
                <FaGithub className='cursor-pointer' size={20} />
                </a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Main