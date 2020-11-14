import React from 'react'

import Match from './Match'

function Round(props) {
    const displayMatches = props.matches.map(match =>
        <div>
            <Match 
                key={match.mid}
                mid={match.mid}
                rid={props.rid}
                selected={match.selected}
                match={match.match} 
                teamA={match.teamA} 
                teamB={match.teamB} 
                handleChange={props.handleChange} />
        </div>
    )
    return (
        <div>
            <div className="card text-center bg-dark">
                <div className="card-header">
                    <h5>{`Round ${props.rid}`}</h5>
                </div>
                <br/>
                {displayMatches}
                <br/>
            </div>
            <br/>
        </div>
    );
}

export default Round