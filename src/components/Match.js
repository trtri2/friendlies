import React from 'react'

function Match(props) {
    return (
        <div>
            {props.match !== undefined ? <h6>{`Match ${props.match}`}</h6> : ''}
            <div className="row">
                    <div className="col-5">
                        {`${props.teamA.values[0]} & ${props.teamA.values[1]}`}
                    </div>
                    <div className="col-2">
                        VS
                    </div>
                    <div className="col-5">
                        {`${props.teamB.values[0]} & ${props.teamB.values[1]}`}
                    </div>
                </div>
                <div className="row">
                    <div className="form-check inline col-5">
                        <input 
                            className="form-check-input"
                            name={props.mid}
                            type="radio"
                            value="teamA"
                            checked={props.selected === "teamA"}
                            onChange={(event) => props.handleChange(event, props.teamA.ids, props.teamB.ids, props.selected, props.rid)}
                        />
                    </div>
                    <div className="col-2">
                    </div>
                    <div className="form-check inline col-5">
                        <input 
                            className="form-check-input"
                            name={props.mid}
                            type="radio"
                            value="teamB"
                            checked={props.selected === "teamB"}
                            onChange={(event) => props.handleChange(event, props.teamB.ids, props.teamA.ids, props.selected, props.rid)}
                        />
                    </div>
                </div>
                <br/>
        </div>
    );
}

export default Match