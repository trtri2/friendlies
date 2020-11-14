import React from 'react'

function FormRadio(props){
    return(
        <div className="form-check form-check-inline">
                <input 
                    className="btn btn-secondary" 
                    type="button"
                    name= {props.name}
                    value = {props.value}
                    onClick = {props.handleChange}
                />
        </div>
    );
}

export default FormRadio