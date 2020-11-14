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
            setPlayerCount(value)
            initPlayerList(value)
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
            <div class="jumbotron">
                <h1 className="container-sm">Player Signup Sheet</h1>
                <br></br>
                <div className="container-sm justify-content-center">
                    <h3>Number of Players:</h3>
                    <FormRadio handleChange={handleChange} name={"playerCount"} value={4} />
                    <FormRadio handleChange={handleChange} name={"playerCount"} value={5} />
                    <FormRadio handleChange={handleChange} name={"playerCount"} value={6} />
                    <FormRadio handleChange={handleChange} name={"playerCount"} value={8} />
                    <FormRadio handleChange={handleChange} name={"playerCount"} value={12} />
                </div>
                
                <br></br>
                {playerCount > 0 ?  
                <div className="container-md">
                    <h3>Enter Player Names</h3>
                    <form className="input-group mb-3" onSubmit={handleSubmit}>
                        {displayPlayerList()}
                        <button disabled={!submitEnabled}>Generate Bracket!</button>
                    </form>
                </div>
                : null}
            </div>
        </div>
    );
}

export default Form