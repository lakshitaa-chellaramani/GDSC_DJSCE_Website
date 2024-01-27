import React from 'react'
import coreData from '../../lib/core-data';
import instaIcon from '../../assets/white-insta-icon.png'
import gitIcon from '../../assets/white-git-icon.png'
import linkedInIcon from '../../assets/white-linkedin-icon.png'
import CocomCard from './profileCard';
import coreCardBg from '../../assets/core-card-bg.png'

const CoreTeam = () => {
  const colorSets = [
    { primaryColor: "#4286F5", accentColor: "#E3F2FD" },
    { primaryColor: "#34A853", accentColor: "#E3FDF4" },
    { primaryColor: "#FABC05", accentColor: "#FDFCE3" },
    { primaryColor: "#EA4235", accentColor: "#FDE3E5" }
  ];
  return (
    <div className='w-full h-full px-[20px] md:px-[40px] lg:md:px-[80px] mt-[60px] gap-[40px]'>
      <div className='flex flex-col items-center w-full h-full gap-8 mb-5 lg:gap-12 md:flex-row'>
        <div>
          <div className='relative w-[300px] h-[200px] lg:w-[500px] lg:h-[350px] md:h-[260px] bg-center bg-no-repeat bg-cover shadow-2xl rounded-3xl' style={{ backgroundImage: `url(${coreData.lead.image})` }}>
            <div className='w-full h-full gap-6 transition-all duration-500 group hover:bg-black/60 rounded-3xl'>
              <div className='flex flex-col items-center justify-center w-full h-full gap-6 transition-all duration-500 translate-y-4 hover:translate-y-0'>
                <h2 className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100 group-hover:text-white font-bold text-[32px]'>{coreData.lead.name}</h2>
                <div className='flex gap-10'>
                  <a className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100' href={coreData.lead.instagram}><img src={`${instaIcon}`} alt='instagram' className='w-[36px] hover:-translate-y-2  transition-all duration-500' /></a>
                  <a className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100' href={coreData.lead.github}><img className='w-[36px] hover:-translate-y-2  transition-all duration-500' src={`${gitIcon}`} alt='github' /></a>
                  <a className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100' href={coreData.lead.linkedIn}><img src={`${linkedInIcon}`} className='w-[36px] hover:-translate-y-2  transition-all duration-500' alt='linkedin' /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center md:items-start'>
          <h2 className='font-bold text-[24px] md:text-[28px] lg:text-[32px]'>Our GDSC Lead</h2>
          <p className='text-[16px] md:text-[18px] lg:text-[22px] mt-4 italic'>{coreData.lead.description}</p>
        </div>
      </div>

      <div className='flex flex-col mt-[40px] items-center w-full h-full gap-8 mb-5 lg:gap-12 md:flex-row-reverse'>
        <div>
          <div className='relative w-[300px] h-[200px] lg:w-[500px] lg:h-[350px] md:h-[260px] bg-center bg-no-repeat bg-cover shadow-2xl rounded-3xl' style={{ backgroundImage: `url(${coreData.secretary.image})` }}>
            <div className='w-full h-full gap-6 transition-all duration-500 group hover:bg-black/60 rounded-3xl'>
              <div className='flex flex-col items-center justify-center w-full h-full gap-6 transition-all duration-500 translate-y-4 hover:translate-y-0'>
                <h2 className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100 group-hover:text-white font-bold text-[32px]'>{coreData.secretary.name}</h2>
                <div className='flex gap-10'>
                  <a className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100' href={coreData.secretary.instagram}><img src={`${instaIcon}`} alt='instagram' className='w-[36px] hover:-translate-y-2  transition-all duration-500' /></a>
                  <a className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100' href={coreData.secretary.github}><img src={`${gitIcon}`} alt='github' className='w-[36px] hover:-translate-y-2  transition-all duration-500' /></a>
                  <a className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100' href={coreData.secretary.linkedIn}><img src={`${linkedInIcon}`} alt='linkedin' className='w-[36px] hover:-translate-y-2  transition-all duration-500' /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center md:items-start'>
          <h2 className='font-bold text-[24px] md:text-[28px] lg:text-[32px]'>Our GDSC Secretary</h2>
          <p className=' text-[16px] md:text-[20px] lg:text-[24px] mt-4 italic'>{coreData.secretary.description}</p>
        </div>
      </div>

      <div className='flex flex-col mt-[40px] items-center w-full h-full gap-8 mb-5 lg:gap-12 md:flex-row'>
        <div>
          <div className='relative w-[300px] h-[200px] lg:w-[500px] lg:h-[350px] md:h-[260px] bg-center bg-no-repeat bg-cover shadow-2xl rounded-3xl' style={{ backgroundImage: `url(${coreData.treasurer.image})` }}>
            <div className='w-full h-full gap-6 transition-all duration-500 group hover:bg-black/60 rounded-3xl'>
              <div className='flex flex-col items-center justify-center w-full h-full gap-6 transition-all duration-500 translate-y-4 hover:translate-y-0'>
                <h2 className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100 group-hover:text-white font-bold text-[32px]'>{coreData.treasurer.name}</h2>
                <div className='flex gap-10'>
                  <a className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100' href={coreData.treasurer.instagram}><img src={`${instaIcon}`} alt='instagram' className='w-[36px] hover:-translate-y-2  transition-all duration-500' /></a>
                  <a className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100' href={coreData.treasurer.github}><img src={`${gitIcon}`} alt='github' className='w-[36px] hover:-translate-y-2  transition-all duration-500' /></a>
                  <a className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100' href={coreData.treasurer.linkedIn}><img src={`${linkedInIcon}`} alt='linkedin' className='w-[36px] hover:-translate-y-2  transition-all duration-500' /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center md:items-start'>
          <h2 className='font-bold text-[24px] md:text-[28px] lg:text-[32px]'>Our GDSC Treasurer</h2>
          <p className='text-[16px] md:text-[20px] lg:text-[24px] mt-4 italic'>{coreData.treasurer.description}</p>
        </div>
      </div>

      <h2 className='text-center font-bold text-[24px] md:text-[28px] lg:text-[32px] mt-[60px] mb-[54px]'>Other Core Members</h2>
      <div className='grid grid-cols-1 gap-[56px] sm:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {coreData.core.map((member, id) => <CocomCard key={id} data={member} isCore={true} coreCardBg={coreCardBg} primaryColor={colorSets[id % 4].primaryColor} accentColor={colorSets[id % 4].accentColor} />)}
      </div>
    </div>
  )
}

export default CoreTeam

/**
    primaryColor: "#4286F5",
    accentColor: "#E3F2FD"

    primaryColor: "#34A853",
    accentColor: "#E3FDF4"
    primaryColor: "#FABC05",
    accentColor: "#FDFCE3"

    primaryColor: "#EA4235",
    accentColor: "#FDE3E5"
 */