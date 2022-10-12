import React from "react";
import CurrentCards from "./CurrentCards";

const Forecast = () => {
    return (
        <div style={{
            margin: '20px'
        }}>
            <div style={{
                textAlign: 'center'
            }}>
                <h4>Future Weather Forecast</h4>
            </div>
           &nbsp;
            <h5 style={{textAlign:'center'}}>Current</h5>
            <div style={Container}>
                
                <CurrentCards/>
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