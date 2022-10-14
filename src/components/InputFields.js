import React, {useState, useRef, useCallback} from "react";

const InputFields = ({city, isFetched, onCityChange}) => {
    const inputRef = useRef(null);

    const handleClick = useCallback(event => {
        city = inputRef.current.value;
        console.log(inputRef.current.value);
        isFetched(true);
    },[isFetched])

    
    // () => {
    //     city = (inputRef.current.value);
    //     console.log(inputRef.current.value);
    // }

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