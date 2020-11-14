import React from 'react'

function Scoreboard(props) {

    function calculatePercentage(wins, losses){
        if (wins == 0 && losses == 0){
            return ''
        }
        if (losses < 1){
            losses = wins
        }
       
        return Math.round(wins / (wins+losses) * 100)
    }

    return (
        <div>
            <h3 className="text-center text-white"><strong>Scoreboard</strong></h3>
            <table className="table table-striped table-borderless text-white" style={{backgroundColor: "#ef838b"}}>
                <thead>
                    <tr>
                        <th scope="col">Player</th>
                        <th scope="col">Wins</th>
                        <th scope="col">Losses</th>
                        {/* <th scope="col">WR</th> */}
                    </tr>
                </thead>
                <tbody>
                    {props.playerList.map(player => {
                        return (
                            <tr>
                                <th scope="row">{player.value}</th>
                                <td>{player.wins}</td>
                                <td>{player.losses}</td>
                                {/* <td>{`${calculatePercentage(player.wins, player.losses)}%`}</td> */}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
                {/* TO DO: RAFFLE BRO */}
        </div>
    );
}

export default Scoreboard