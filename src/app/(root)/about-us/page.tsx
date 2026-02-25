import React from 'react'
import Hero from '@/components/aboutusv2/Hero'
import VisionMission from '@/components/aboutusv2/VisionMission'
import Team from '@/components/aboutusv2/Team'
import PartnerCTA from '@/components/aboutusv2/PartnerCTA'

const page = () => {
  return (
    <div className="min-h-screen bg-[#FFF5F0] relative overflow-hidden font-sans text-slate-800 selection:bg-[#F28B82] selection:text-white">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F28B82 1px, transparent 1px), linear-gradient(90deg, #F28B82 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Creative Background Effects (Blurred Circles) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#F28B82] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#2B59C3] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-[40%] right-[40%] w-[300px] h-[300px] bg-[#F2C94C] rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-blob"
        style={{ animationDelay: "4s" }}
      ></div>

      <Hero />
      <VisionMission />
      <Team />
      <PartnerCTA />
    </div>
  )
}

export default page
