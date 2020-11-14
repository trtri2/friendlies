import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'

import FormRadio from './FormRadio'
import FormInput from './FormInput'

function Form() {
    // STATES
    const [playerCount, setPlayerCount] = useState(0)
    const [playerList, setPlayerList] = useState([])
    const [submitEnabled, setSubmitEnabled] = useState(false)

    let history = useHistory()

    // EVENT DRIVEN FUNCTIONS

    function handleChange(event){
        const {type, value} = event.target
        if (type === "text") {
            const {id} = event.target
            setPlayerList(prev => {
                const newPlayerList = prev.map(player => {
                    if (player.id == id){
                        return{
                            ...player,
                            value: value
                        }
                    }
                    return player
                })
                return newPlayerList
            })
        } else {
            // dont overwrite current fields if the same button was clicked
            if (playerCount !== value){
                setPlayerCount(value)
                initPlayerList(value)
            }
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        history.push("/bracket", playerList)
    }

    useEffect(() => {
        // check if all items in list is populated
        for (var i = 0; i < playerCount; i++){
            if (playerList[i].value === ''){
                setSubmitEnabled(false)
                return
            }
        }
        setSubmitEnabled(true)
    }, [playerList, playerCount]);

    // END OF EVENT DRIVEN FUNCTIONS

    // HELPER FUNCTIONS 

    function initPlayerList(numPlayers){
        var playerArr = []
        for (let i = 0; i < numPlayers; i++){
            const playerObj = {
                id: i,
                placeholder: `Player ${i+1}`,
                name: 'playerName',
                value: '',
                wins: 0,
                losses: 0,
            }
            playerArr.push(playerObj)
        }
        setPlayerList(playerArr)
    }

    function displayPlayerList(){
        return playerList.map(player => 
            <FormInput 
                key={player.id} 
                placeholder={player.placeholder} 
                name={player.name} 
                value={player.value}
                id = {player.id}
                handleChange={handleChange}  
            />)
    }
    
    // END OF HELPER FUNCTIONS

    return (
        <div>
            <div class="jumbotron container-sm" align="center">
                <h1 className="display-4">Friendlies</h1>
                <p className="lead">A round-robin bracket generator for rotating doubles</p>
                <hr className="my-4"/>
                <div>
                    <h5>Select Number of Players</h5>
                    <div className="btn-group" role="group">
                    <FormRadio handleChange={handleChange} name={"playerCount"} value={4} />
                    <FormRadio handleChange={handleChange} name={"playerCount"} value={5} />
                    {/* <FormRadio handleChange={handleChange} name={"playerCount"} value={6} /> */}
                    <FormRadio handleChange={handleChange} name={"playerCount"} value={8} />
                    <FormRadio handleChange={handleChange} name={"playerCount"} value={12} />
                    </div>
                </div>
                
                <br></br>
                {playerCount > 0 ?  
                <div>
                    <h5>Enter Player Names</h5>
                    <form onSubmit={handleSubmit}>
                        {displayPlayerList()}
                        <button className="btn" style={!submitEnabled ? {backgroundColor: "grey"} : {color:"white",backgroundColor: "#ef838b"}} disabled={!submitEnabled}>Generate Bracket!</button>
                    </form>
                </div>
                : null}
            </div>
        </div>
    );
}

export default Form