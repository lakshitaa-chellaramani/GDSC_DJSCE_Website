import React from 'react'
import CocomCard from './profileCard';

const CocomDept = ({ header, data, primaryColor, accentColor }) => {
    return (
        <div className='flex flex-col items-center p-4 md:p-8'>
            <h1 className='sm:text-[32px] text-[24px] font-bold text-center'>{header}</h1>
            <div className='flex flex-row flex-shrink-0 w-full px-[28px] py-[64px] overflow-y-scroll gap-[44px] md:justify-center no-scrollbar md:flex-wrap'>
                {data.map((member) => <CocomCard key={member.id} data={member} primaryColor={primaryColor} accentColor={accentColor} isCore={false} />)}
            </div>
        </div>
    )
}

export default CocomDept;