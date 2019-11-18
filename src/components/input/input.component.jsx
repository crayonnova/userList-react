import React from 'react'
import './input.style.css'

export const SearchBox = (props) => {
    return (
        <input
        type='text'
        placeholder={props.placeholder}
        onChange={props.handleChange}
        />
    )
}