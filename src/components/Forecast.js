import Charts from "./Charts";
import CurrentCards from "./CurrentCards";
import FutureCards from "./FutureCards";
import InputFields from "./InputFields";
import React, {useState, useRef} from 'react';

const Forecast = () => {
    const [city,setCity] = useState('');
    const handleChange = event => {
        setCity(event.target.value);
        console.log(event.target.value);
    };



    return (
        <div style={{
            margin: '20px'
        }}>
            <div style={{
                textAlign: 'center'
            }}>
                <h4>Future Weather Forecast</h4>
                <InputFields city={city}  onCityChange={handleChange}
                />
            </div>
           &nbsp;
           <div style={Container}>
                <Charts/>
            </div>
            <h5 style={{textAlign:'center'}}>Current</h5>
            <div style={Container}>
                <CurrentCards/>
            </div>
            <h5 style={{textAlign:'center'}}>Future Forecast</h5>
            <div style={Container}>
                <FutureCards city={city}/>
            </div>
        </div>
        


    )
}

export default Forecast;

const Container = {
    margin: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}