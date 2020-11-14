// TODO: display "Byes" for 5-6 player matchs..

export function generateBracket(playerList){
    // TODO : shuffle array
    switch(playerList.length){
        case 4:
            return fourPlayers(playerList)
        case 5:
            return fivePlayers(playerList)
        case 6:
            return sixPlayers(playerList)
        case 8:
            return eightPlayers(playerList)
        case 12:
            return twelvePlayers(playerList)
    }
}

function fourPlayers(playerArr){
    let rounds = []
    let players = [...playerArr]
    const teamA1 = 0
    , teamA2 = 2
    , teamB1 = 1
    , teamB2 = 3

    for (let i = 1; i <= 3; i++){
        let match = {
            mid: `${i}A`,
            match: 'A',
            teamA: {
                ids: [players[teamA1].id, players[teamA2].id],
                values: [players[teamA1].value, players[teamA2].value],
            },
            teamB: {
                ids: [players[teamB1].id, players[teamB2].id],
                values: [players[teamB1].value, players[teamB2].value],
            },
            selected: "none"
        }

        let currRound = {
            rid: i,
            matches: [match],
        }
        
        players = rotateArray(players, true)
        rounds.push(currRound)
    }
    return rounds
}

function fivePlayers(playerArr){
    let rounds = []
    let players = [...playerArr]
    const teamA1 = 2
    , teamA2 = 3
    , teamB1 = 4
    , teamB2 = 1

    for (let i = 1; i <= 5; i++){
        let match = {
            mid: `${i}A`,
            match: 'A',
            teamA: {
                ids: [players[teamA1].id, players[teamA2].id],
                values: [players[teamA1].value, players[teamA2].value],
            },
            teamB: {
                ids: [players[teamB1].id, players[teamB2].id],
                values: [players[teamB1].value, players[teamB2].value],
            },
            selected: "none"
        }

        let currRound = {
            rid: i,
            matches: [match],
        }

        players = rotateArray(players, false)
        rounds.push(currRound)
    }
    return rounds
}

function sixPlayers(){
    // TODO ... gonna be manual work
}

function eightPlayers(playerArr){
    let rounds = []
    let players = [...playerArr]
    const matchA_teamA1 = 2
        , matchA_teamA2 = 3
        , matchA_teamB1 = 4
        , matchA_teamB2 = 6
        , matchB_teamA1 = 5
        , matchB_teamA2 = 1
        , matchB_teamB1 = 7
        , matchB_teamB2 = 0

    for (let i = 1; i <= 7; i++){
        let matchA = {
            mid: `${i}A`,
            match: 'A',
            teamA: {
                ids: [players[matchA_teamA1].id, players[matchA_teamA2].id],
                values: [players[matchA_teamA1].value, players[matchA_teamA2].value]
            },
            teamB: {
                ids: [players[matchA_teamB1].id, players[matchA_teamB2].id],
                values: [players[matchA_teamB1].value, players[matchA_teamB2].value]
            },
            selected: "none"
        }

        let matchB = {
            mid: `${i}B`,
            match: 'B',
            teamA: {
                ids: [players[matchB_teamA1].id, players[matchB_teamA2].id],
                values: [players[matchB_teamA1].value, players[matchB_teamA2].value]
            },
            teamB: {
                ids: [players[matchB_teamB1].id, players[matchB_teamB2].id],
                values: [players[matchB_teamB1].value, players[matchB_teamB2].value]
            },
            selected: "none"
        }

        let currRound = {
            rid: i,
            matches: [matchA, matchB]
        }

        //rotate the player arr except last element
        players = rotateArray(players, true)
        rounds.push(currRound)
    }
    return rounds
}

function twelvePlayers(playerArr){
    let rounds = []
    let players = [...playerArr]
    const matchA_teamA1 = 2
        , matchA_teamA2 = 3
        , matchA_teamB1 = 1
        , matchA_teamB2 = 6
        , matchB_teamA1 = 8
        , matchB_teamA2 = 10
        , matchB_teamB1 = 4
        , matchB_teamB2 = 7
        , matchC_teamA1 = 5
        , matchC_teamA2 = 9
        , matchC_teamB1 = 11
        , matchC_teamB2 = 0

    for (let i = 1; i <= 11; i++){
        let matchA = {
            mid: `${i}A`,
            match: 'A',
            teamA: {
                ids: [players[matchA_teamA1].id, players[matchA_teamA2].id],
                values: [players[matchA_teamA1].value, players[matchA_teamA2].value]
            },
            teamB: {
                ids: [players[matchA_teamB1].id, players[matchA_teamB2].id],
                values: [players[matchA_teamB1].value, players[matchA_teamB2].value]
            },
            selected:"none"
        }

        let matchB = {
            mid: `${i}B`,
            match: 'B',
            teamA: {
                ids: [players[matchB_teamA1].id, players[matchB_teamA2].id],
                values: [players[matchB_teamA1].value, players[matchB_teamA2].value]
            },
            teamB: {
                ids: [players[matchB_teamB1].id, players[matchB_teamB2].id],
                values: [players[matchB_teamB1].value, players[matchB_teamB2].value]
            },
            selected: "none"
        }

        let matchC = {
            mid: `${i}C`,
            match: 'C',
            teamA: {
                ids: [players[matchC_teamA1].id, players[matchC_teamA2].id],
                values: [players[matchC_teamA1].value, players[matchC_teamA2].value]
            },
            teamB: {
                ids: [players[matchC_teamB1].id, players[matchC_teamB2].id],
                values: [players[matchC_teamB1].value, players[matchC_teamB2].value]
            },
            selected: "none"
        }

        let currRound = {
            rid: i,
            matches: [matchA, matchB, matchC]
        }

        //rotate the player arr except last element
        players = rotateArray(players, true)
        rounds.push(currRound)
    }
    return rounds
}

function rotateArray(array, exceptLast){
    let size = exceptLast ? array.length-1 : array.length
    let first = array[0]

    for (let i = 0; i < size; i++){
        array[i] = array[i+1]
    }
    array[size-1] = first 

    return array
}

function shuffleArray(array){
    // TODO
}
