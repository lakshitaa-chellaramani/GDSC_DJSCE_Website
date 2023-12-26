import React from 'react'
import lightInstaIcon from '../../assets/white-insta-icon.png'
import lightGitIcon from '../../assets/white-git-icon.png'
import lightLinkedInIcon from '../../assets/white-linkedin-icon.png'

const CocomCard = ({ data: { name, description, image, instagram, github, linkedIn, department }, primaryColor,  accentColor }) => {
    return (
        <div className={`mt-10 relative shadow-2xl w-[290px] h-[500px] transition-all  duration-500 ease-in-out hover:scale-105 group group-hover:scale-95 rounded`} style={{backgroundColor: accentColor}}>
            <div className={`relative flex flex-col items-center w-[290px] h-[500px] p-[20px] group pt-[112px] rounded`}>
                <p className={`font-bold text-[24px] text-center mb-2 translate-y-6 group-hover:translate-y-0 delay-500 transition-all duration-500`} style={{color: primaryColor}}>{name}</p>
                <p className='text-[20px] text-center'>{department}</p>
                <div className={`w-[64px] h-[1px] bg- m-[12px]`} style={{backgroundColor: primaryColor, opacity: 0.4}} />
                <p className='text-[14px] italic'>“{description}”</p>
                <div className='absolute top-0 bottom-0 w-full h-full bg-center bg-no-repeat bg-cover group-hover:w-[150px] group-hover:h-[150px] group-hover:rounded-[75px] group-hover:top-[-50px] transition-all delay-100 duration-700 ease-in-out rounded' style={{ backgroundImage: `url(${image})` }}/>
                <div className={`flex justify-center gap-[48px] p-[12px] absolute bottom-0 right-0 left-0`} style={{backgroundColor: primaryColor}}>
                    <a href={instagram}><img src={lightInstaIcon} alt='insta' className='w-[32px] hover:-translate-y-2  transition-all duration-500'/></a>
                    <a href={github}><img src={lightGitIcon} alt='git' className='w-[32px] hover:-translate-y-2  transition-all duration-500' /></a>
                    <a href={linkedIn}><img src={lightLinkedInIcon} alt='link' className='w-[32px] hover:-translate-y-2  transition-all duration-500' /></a>
                </div>
            </div>
        </div>
    )
}

export default CocomCard

// <div className={`bg-transparent cursor-pointer w-72 h-96 group group-hover:scale-[0.85] hover:!scale-100 transition-all delay-100 ease-in-out duration-1000 ${textColor}`}>
//     <div className={`relative duration-1000 shadow-2xl w-72 h-96 preserve-3d hover:my-rotate-y-180 preserve `}>
//         <div className={`absolute w-full h-full backface-hidden ${cardColor}`}>
//             <img src={`${image}`} alt='' className='w-full h-[300px]' />
//             <h2 className='mt-4 font-bold text-[24px] text-center '>{name}</h2>
//         </div>
            //         <div className={`absolute w-full h-full my-rotate-y-180 backface-hidden  ${cardColor}`} >
            //             <div className='flex flex-row items-center gap-2 mx-4 mt-6'>
            //                 <div style={{ backgroundImage: `url(${image})` }} className='w-20 h-20 bg-center bg-no-repeat bg-cover rounded-full' />
            //                 <div className='flex flex-col'>
            //                     <p className='font-bold text-8'>{name}</p>
            //                     {isCore ? `${department}` : ''}
            //                 </div>
            //             </div>
            //             <p className='m-4 font-semibold text-4'>{description}</p>
            //             <div className='absolute bottom-0 flex flex-row w-full gap-4 mb-4 justify-evenly'>
            //                 <a href={instagram} target="_blank" rel="noopener noreferrer"><img src={`${isCore ? darkInstaIcon : lightInstaIcon}`} alt='instagram' className='w-[32px] h-[32px]' /></a>
            //                 <a href={github} target="_blank" rel="noopener noreferrer"><img src={`${isCore ? darkGitIcon : lightGitIcon}`} alt='github' className='w-[32px] h-[32px]' /></a>
            //                 <a href={linkedIn} target="_blank" rel="noopener noreferrer"><img src={`${isCore ? darkLinkedInIcon : lightLinkedInIcon}`} alt='linkedin' className='w-[32px] h-[32px]' /></a>
            //             </div>
            //         </div>
            
            //     </div>
            /*  
                    <div className='h-96 w-72 my-4 flex flex-col items-center bg-[#E9E9E9] shadow-xl hover:shadow-2xl transition-all delay-100 ease-in-out duration-500 sm:group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer'>
                    <div className='w-full h-2 bg-gradient-to-r from-[#00F260] to-[#0575E6]' />
                    <div className='flex flex-col items-center px-12'>
                            <div className='w-40 h-40 mt-12 mb-4 bg-center bg-no-repeat bg-cover rounded-full' style={{ backgroundImage: `url(${image})` }} />
                            <h2 className='text-2xl font-bold text-center'>{name}</h2>
                            <p className='mt-2 text-center'>{description}</p>
                        </div>
                    </div>
                    
                     <div className='bg-transparent cursor-pointer w-72 h-96'>
                     <div className='relative w-full h-full duration-1000 shadow-2xl preserve-3d hover:my-rotate-y-180 preserve'>
                            <div className='absolute w-full h-full backface-hidden '>
                                <img src={`${image}`} alt='' className='w-full h-[300px]' />
                                <h2 className='font-bold text-[24px] text-center'>{name}</h2>
                            </div>
                            <div className='absolute w-full h-full bg-gray-300 my-rotate-y-180 backface-hidden'></div>
                        </div>
                        </div>
                        */