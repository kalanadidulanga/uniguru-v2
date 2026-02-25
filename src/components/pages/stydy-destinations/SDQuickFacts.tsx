import React from 'react'

interface SDQuickFactsProps {
    dataSet: {
        title: string
        facts: string[]
    }
}

const SDQuickFacts = ({dataSet}: SDQuickFactsProps) => {
  return (
    <div className=' flex flex-col gap-5 items-center lg:items-start'>
        <h3 className="text-3xl font-bold text-my-blue text-center lg:text-start">{dataSet?.title}</h3>
        <ul className='flex flex-col gap-3 list-disc ml-5'>
        {dataSet?.facts.map((fact, index) => (
            <li className="text-my-gray2 text-sm md:text-base w-full max-w-xl" key={index}>{fact}</li>
        ))}
        </ul>
    </div>
  )
}

export default SDQuickFacts