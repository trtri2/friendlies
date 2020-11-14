import React from 'react'

function FormInput(props){
    return(
        <div className="form-check form-check-inline">
            <label className="form-check-label">
                <input 
                    className="form-check-input" 
                    type="text"
                    id={props.id}
                    name= {props.name}
                    value = {props.value}
                    placeholder = {props.placeholder}
                    onChange = {props.handleChange}
                />
            </label>
        </div>
    );
}

export default FormInput