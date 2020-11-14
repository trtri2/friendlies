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
            <h3>Scoreboard</h3>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Player</th>
                        <th scope="col">Wins</th>
                        <th scope="col">Losses</th>
                        <th scope="col">WR %</th>
                    </tr>
                </thead>
                <tbody>
                    {props.playerList.map(player => {
                        return (
                            <tr>
                                <th scope="row">{player.value}</th>
                                <td>{player.wins}</td>
                                <td>{player.losses}</td>
                                <td>{`${calculatePercentage(player.wins, player.losses)}%`}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button type="button" className="btn btn-md btn-block" style={{backgroundColor: "#85DCB"}}>Raffle</button>
        </div>
    );
}

export default Scoreboard