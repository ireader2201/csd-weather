import React, {useState, useRef} from "react";

const InputFields = ({city, onCityClick, onCityChange}) => {
    const inputRef = useRef(null);
    const handleClick = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
    }
    return(
        <div>
            <span>Enter city name: </span>
            <input
                type='text'
                id='cityname'
                name='cityname'
                onChange= {onCityChange}
                value = {city}
                ref={inputRef}
                >
            </input>&nbsp; 
            <button onClick={handleClick}>Show Forecast</button>
        </div>
    )
}

export default InputFields;