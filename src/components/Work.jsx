import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2024,
        title: 'Software Development Certification - Upright Education',
        duration: '6 months',
        details: 'Community College of Vermont Full stack technical boot camp focusing on front end web development technologies',
    }
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx) => (
            <WorkItem 
            key={idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration}
            details={item.details} /> 
        ))}
    </div>
  )
}

export default Work