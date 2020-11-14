import React from 'react'

function FormRadio(props){
    return(
        <div className="form-check form-check-inline">
            <label className="form-check-label">
                <input 
                    className="form-check-input" 
                    type="radio"
                    name= {props.name}
                    value = {props.value}
                    onClick = {props.handleChange}
                />{props.value}
            </label>
        </div>
    );
}

export default FormRadio