import Image from 'next/image'
import React from 'react'

interface PopulatCoursesProps {
    dataSet: {
        title: string
        courses: string[]
    }
}

const PopulatCourses = ({ dataSet }: PopulatCoursesProps) => {
    return (
        <div className='my-container flex flex-col gap-8 items-center mb-24'>
            <h3 className="text-3xl font-bold text-my-blue text-center lg:text-start">{dataSet?.title}</h3>
            <div className=' flex items-center flex-col lg:flex-row w-full gap-8 lg:gap-10'>
                <div className='w-full max-w-xl lg:w-1/2 flex items-center justify-center rounded-lg overflow-hidden'>
                    <Image src={'/images/study_destinations/popularcourses.jpg'} alt='Popular Courses' width={300} height={300} className=' w-full h-full object-cover object-center' />
                </div>
                <div className='w-full lg:w-1/2 flex flex-col items-center justify-center gap-3'>
                    {dataSet?.courses.map((course, index) => (
                        <div key={index} className="w-full border-2 rounded-lg px-5 py-3 lg:px-8 lg:py-4 hover:bg-slate-100 duration-300">
                            <p>{course}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PopulatCourses