import React from 'react'

function FormInput(props){
    return(
        <div className="form-group col">
                <input 
                    className="form-control" 
                    type="text"
                    id={props.id}
                    name= {props.name}
                    value = {props.value}
                    placeholder = {props.placeholder}
                    onChange = {props.handleChange}
                />
        </div>
    );
}

export default FormInput