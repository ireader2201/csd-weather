import Charts from "./Charts";
import CurrentCards from "./CurrentCards";
import FutureCards from "./FutureCards";
import InputFields from "./InputFields";
import React, {useState, useRef, useCallback} from 'react';

const Forecast = () => {
    const [city,setCity] = useState('');
    // const [fetch, setFetch] = useState(false);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const handleChange = event => {
        setCity(event.target.value);
        console.log(event.target.value);
    };

    const handleClick = useCallback(event => {
        // event.preventDefault();
        setIsLoading(true);
        console.log(isLoading)
    },[isLoading])

    // const handleClick = event => {
    //     event.preventDefault();
    //     // console.log(url2(city));
    //     // !isLoading ? setIsLoading(true) : setIsLoading(false)
    //     setIsLoading(true);
    //     console.log(isLoading);
    // }

    
    return (
        <div style={{
            margin: '20px'
        }}>
            <div style={{
                textAlign: 'center'
            }}>
                <h4>Future Forecast</h4>
                {/* <InputFields city={city} isFetched={setFetch}  onCityChange={handleChange}  */}
                <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <span>Enter city name: </span>
                    <input
                        type='text'
                        id='cityname'
                        name='cityname'
                        onChange= {handleChange}
                        value = {city}
                        // ref={inputRef}
                        >
                    </input>&nbsp; 
                    <button onClick={handleClick}>Show Forecast</button>
                </div>
                
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
                <FutureCards getCity={city} setLoadingStatus={setIsLoading}/>
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