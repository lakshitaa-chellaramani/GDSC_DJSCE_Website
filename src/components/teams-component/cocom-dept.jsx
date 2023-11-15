import React from 'react'
import CocomCard from './cocom-card';

const CocomDept = ({ header, data, cardColor, textColor }) => {
    return (
        <div className='flex flex-col items-center p-4 md:p-8'>
            <h1 className='text-xl font-bold text-center sm:text-4xl'>{header}</h1>
            <div className='flex flex-row flex-shrink-0 w-full gap-8 py-4 overflow-x-auto overflow-y-scroll md:justify-center group no-scrollbar md:flex-wrap'>
                {data.map((member) => <CocomCard key={member.id} data={member} cardColor={cardColor} textColor={textColor} isCore={false} />)}
            </div>
        </div>
    )
}

export default CocomDept;