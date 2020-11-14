import React, {useEffect, useState} from 'react'

import { generateBracket } from '../js/brackGenerator'
import Scoreboard from './Scoreboard'
import Round from './Round'

function Bracket(props) {
    const [validBracket, setValidBracket] = useState(false)
    const [playerList, setPlayerList] = useState([])
    const [rounds, setRounds] = useState([])

    // EVENT DRIVEN FUNCTIONS

    // not use effect?... when unmounting and "remounting" it resets the things.
    useEffect(() => {
        if (typeof(props.location.state) !== 'undefined' && !validBracket){
            // setup vars..
            setValidBracket(true)
            setPlayerList([...props.location.state])
            setRounds(generateBracket(props.location.state))
        }
    }, []);

    // handles match results to update scoreboard and state
    function handleChange(event, winner, loser, prevSelected, roundID){
        // set rounds checkboxes, given the RID, find the round that has the corresponding match to update
        const {name, value} = event.target
        const newRoundList = rounds.map(round => {
            if (round.rid === roundID) {
                return {
                    ...round,
                    matches: round.matches.map(match => {
                        if (match.mid === name){
                            return {
                                ...match,
                                selected: value
                            }
                        } else {
                            return match
                        }
                    })
                }
            } else {
                return round
            }
        })

        // set player list scores. Use previously selected to offset intitial selection for scores.
        // i.e. first time a radio button is entered, we should not decrement the 'wins' on the losing team.
        const newPlayerList = playerList.map(player => {
            if (player.id === winner[0] || player.id === winner[1]){
                return {
                    ...player,
                    wins: player.wins + 1,
                    losses: prevSelected === 'none' ? player.losses : player.losses - 1,
                }
            } else if (player.id === loser[0] || player.id === loser[1]){
                return {
                    ...player,
                    wins: prevSelected === 'none' ? player.wins : player.wins - 1,
                    losses: player.losses + 1,
                }
            } else {
                return player
            }
        })
        setRounds(newRoundList)
        setPlayerList(newPlayerList)
    }

    // END OF EVENT DRIVEN FUNCTIONS

    // HELPER FUNCTIONS

    function displayRounds(){
        return rounds.map(round => 
            <Round
                key={round.rid}
                rid={round.rid}
                matches={round.matches}
                handleChange={handleChange}
            />
        )
    }


    // END OF HELPER FUNCTIONS

    return (
        <div className="">
            {validBracket ?
                <div className="container">
                    <h3 className="text-center text-white"><strong>Bracket</strong></h3>
                    {displayRounds()}
                    <hr/>
                    <Scoreboard playerList={playerList} numRounds={rounds.length}/>
                </div>             
            :<h1>You need to create a new game first!</h1>}
        </div>
    );
}

export default Bracket