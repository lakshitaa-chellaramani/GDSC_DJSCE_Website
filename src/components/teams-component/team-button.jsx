import React from 'react'
import './custom.css'

const TeamButton = ({ children, onClickHandler }) => {
    return (
        <button className='m-[8px] button-arounder' onClick={onClickHandler}>{children}</button>
    )
}

export default TeamButton