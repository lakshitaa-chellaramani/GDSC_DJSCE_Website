import React from 'react'
import CoreTeam from './core-team'
import CocomTeam from './cocom-team'
import TeamButton from './team-button'

import { useState } from 'react'

const TeamComponent = () => {
    const [committee, setCommittee] = useState('core');

    const coreButtonHandler = () => {
        setCommittee('core')
    }

    const cocomButtonHandler = () => {
        setCommittee('cocom')
    }

    return (
        <div className="p-0 m-0">
            <div className="flex flex-col items-center p-8 sm:flex-row sm:justify-center">
                <TeamButton onClickHandler={coreButtonHandler}>Core Committee</TeamButton>
                <TeamButton onClickHandler={cocomButtonHandler}> Co-Committee </TeamButton>
            </div>
            {committee === 'core' ? <CoreTeam /> : <CocomTeam />}
        </div>
    )
}

export default TeamComponent;