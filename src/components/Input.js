import React from 'react'

export default function Input(props) {
    return (
        <div>
            <div className="form-group">
                <label htmlFor={props.name} className="form-label">{props.title}</label>
                <input
                    className="form-input"
                    id={props.name}
                    name={props.name}
                    type={props.type}
                    value={props.value}
                    onChange={props.handleChange}
                    placeholder={props.placeholder}
                />
            </div>
        </div>
    )
}
