import React from 'react'

const TeamButton = ({ children, onClickHandler }) => {
    return (
        <div className='w-64 p-1 m-4 cursor-pointer border-1 bg-[#4286F5]' onClick={onClickHandler}>
            <div className='px-3 py-2 text-xl bg-white hover:text-white hover:bg-transparent hover:transition-all hover:ease-in-out hover:delay-150'>
                <p className='text-center'>{children}</p>
            </div>
        </div>
    )
}

export default TeamButton