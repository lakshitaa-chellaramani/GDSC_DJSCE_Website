import React from 'react'
import coreData from '../../lib/core-data';
import instaIcon from '../../assets/white-insta-icon.png'
import gitIcon from '../../assets/white-git-icon.png'
import linkedInIcon from '../../assets/white-linkedin-icon.png'
import CocomCard from './cocom-card';
import coreCardBg from '../../assets/core-card-bg.png'

const CoreTeam = () => {
  return (
    <div className='w-full h-full px-[20px] md:px-[40px] lg:md:px-[80px]'>

      <div className='flex flex-col items-center w-full h-full gap-8 lg:gap-12 md:flex-row'>
        <div>
          <div className='relative w-[300px] h-[200px] lg:w-[550px] lg:h-[350px] md:h-[260px] bg-center bg-no-repeat bg-cover shadow-2xl rounded-3xl' style={{ backgroundImage: `url(${coreData.lead.image})` }}>
            <div className='flex flex-col items-center justify-center w-full h-full gap-6 transition-all duration-500 group hover:bg-black/60 rounded-3xl'>
              <h2 className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100 group-hover:text-white font-bold text-[32px]'>{coreData.lead.name}</h2>
              <div className='flex gap-10'>
                <a className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100' href={coreData.lead.instagram}><img src={`${instaIcon}`} alt='instagram' /></a>
                <a className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100' href={coreData.lead.github}><img src={`${gitIcon}`} alt='github' /></a>
                <a className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100' href={coreData.lead.linkedIn}><img src={`${linkedInIcon}`} alt='linkedin' /></a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center md:items-start'>
          <h2 className='font-bold sm:text-[24px] md:text-[28px] lg:text-[32px]'>Our GDSC Lead</h2>
          <p className='font-semibold sm:text-[16px] md:text-[20px] lg:text-[24px] mt-4'>{coreData.secretary.description}</p>
        </div>
      </div>

      <div className='flex flex-col items-center w-full h-full gap-8 lg:gap-12 md:flex-row-reverse mt-[40px]'>
        <div>
          <div className='relative w-[300px] h-[200px] lg:w-[550px] lg:h-[350px] md:h-[260px] bg-center bg-no-repeat bg-cover shadow-2xl rounded-3xl' style={{ backgroundImage: `url(${coreData.secretary.image})` }}>
            <div className='flex flex-col items-center justify-center w-full h-full gap-6 transition-all duration-500 group hover:bg-black/60 rounded-3xl'>
              <h2 className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100 group-hover:text-white font-bold text-[32px]'>{coreData.secretary.name}</h2>
              <div className='flex gap-10 transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100'>
                <a className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100' href={coreData.secretary.instagram} target="_blank" rel="noopener noreferrer"><img src={`${instaIcon}`} alt='instagram' /></a>
                <a className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100' href={coreData.secretary.github} target="_blank" rel="noopener noreferrer"><img src={`${gitIcon}`} alt='github' /></a>
                <a className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100' href={coreData.secretary.linkedIn} target="_blank" rel="noopener noreferrer"><img src={`${linkedInIcon}`} alt='linkedin' /></a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center md:items-start'>
          <h2 className='font-bold sm:text-[24px] md:text-[28px] lg:text-[32px]'>Our GDSC Treasurer</h2>
          <p className='font-semibold sm:text-[16px] md:text-[20px] lg:text-[24px] mt-4'>{coreData.secretary.description}</p>
        </div>
      </div>

      <div className='flex flex-col items-center w-full h-full gap-8 lg:gap-12 md:flex-row mt-[40px]'>
        <div>
          <div className='relative w-[300px] h-[200px] lg:w-[550px] lg:h-[350px] md:h-[260px] bg-center bg-no-repeat bg-cover shadow-2xl rounded-3xl' style={{ backgroundImage: `url(${coreData.secretary.image})` }}>
            <div className='flex flex-col items-center justify-center w-full h-full gap-6 transition-all duration-500 group hover:bg-black/60 rounded-3xl'>
              <h2 className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100 group-hover:text-white font-bold text-[32px]'>{coreData.secretary.name}</h2>
              <div className='flex gap-10 transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100'>
                <a className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100' href={coreData.secretary.instagram} target="_blank" rel="noopener noreferrer"><img src={`${instaIcon}`} alt='instagram' /></a>
                <a className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100' href={coreData.secretary.github} target="_blank" rel="noopener noreferrer"><img src={`${gitIcon}`} alt='github' /></a>
                <a className='transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100' href={coreData.secretary.linkedIn} target="_blank" rel="noopener noreferrer"><img src={`${linkedInIcon}`} alt='linkedin' /></a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center md:items-start'>
          <h2 className='font-bold sm:text-[24px] md:text-[28px] lg:text-[32px]'>Our GDSC Secretary</h2>
          <p className='font-semibold sm:text-[16px] md:text-[20px] lg:text-[24px] mt-4'>{coreData.secretary.description}</p>
        </div>
      </div>

      <h2 className='text-center font-bold sm:text-[24px] md:text-[28px] lg:text-[32px] mt-[60px] mb-[40px]'>Other Core Members</h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {coreData.core.map((member) => <CocomCard key={member.id} data={member} isCore={true} coreCardBg={coreCardBg} cardColor={member.cardColor} />)}
      </div>
    </div>
  )
}

export default CoreTeam