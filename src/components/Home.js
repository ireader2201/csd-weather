import React from "react";
import Cards from "./Cards";

const Home = () => {
    return (
        <div style={{
            margin: '20px'
        }}>
            <div style={{
                textAlign: 'center'
            }}>
                <h4>Current</h4>
            </div>
           
            <div style={Container}>
                <Cards/>
            </div>
        </div>
        


    )
}

export default Home;

const Container = {
    margin: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}