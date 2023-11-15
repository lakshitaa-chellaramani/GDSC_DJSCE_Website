import React, { useState } from 'react'
import TeamButton from '../components/teams-component/team-button'
import CoreTeam from '../components/teams-component/core-team'
import CocomTeam from '../components/teams-component/cocom-team'

const Team = () => {
    const [committee, setCommittee] = useState('core');

    const coreButtonHandler = () => {
        setCommittee('core')
    }

    const cocomButtonHandler = () => {
        setCommittee('cocom')
    }

    return (
        <div className="p-0 m-0">
            <div className="p-8 flex flex-col items-center sm:flex-row sm:justify-center">
                <TeamButton onClickHandler={coreButtonHandler}>Core Committee</TeamButton>
                <TeamButton onClickHandler={cocomButtonHandler}> Co-Committee </TeamButton>
            </div>
            {committee === 'core' ? <CoreTeam /> : <CocomTeam />}
        </div>
    )
}

export default Team;