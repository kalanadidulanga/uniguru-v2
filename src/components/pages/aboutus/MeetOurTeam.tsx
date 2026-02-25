import { TEAM_MEMBERS } from '@/constants/data'
import React from 'react'
import './about.css'
import Image from 'next/image'

const MeetOurTeam = () => {
    return (
        <div className="my-container pb-24 team-container">
            <h2 className="text-4xl font-bold text-center text-my-blue">Meet our Team</h2>
            <div className="w-full flex flex-wrap justify-center">
                {TEAM_MEMBERS.map((member, index) => (
                    <div
                        key={index}
                        className="team-member text-center p-4 w-full sm:w-1/2 lg:w-1/3 flex-shrink-0"
                    >
                        <Image src={member.image} width={300} height={300} alt={member.name} className="rounded-full w-32 md:w-36 lg:w-40 h-32 md:h-36 lg:h-40 mx-auto mb-4 object-cover object-center" />
                        <h3 className="text-xl font-semibold text-my-orange">{member.name}</h3>
                        <p className="text-sm text-my-gray2 mt-2">{member.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MeetOurTeam