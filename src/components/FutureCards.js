import axios, { AxiosHeaders } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

const FutureCards = (getCity, setLoadingStatus) => {

    const url = 'https://i2w7t3w0b6.execute-api.us-east-1.amazonaws.com/weather?city=Parramatta';

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [city, setCity] = useState('');

    // setLoadingStatus = false;
    const url2 = (link) => {
        return 'https://i2w7t3w0b6.execute-api.us-east-1.amazonaws.com/weather?city=' + link;
    }

    const handleChange = event => {
        setCity(event.target.value);
        console.log(event.target.value);
    };

    const handleClick = event => {
        event.preventDefault();
        console.log(url2(getCity.getCity));
        // console.log(setLoadingStatus);
        setIsLoading(true);
        console.log(getCity.getCity);
    }

    const handleClick2 = useCallback(event => {
        setLoadingStatus(true);
    },[setLoadingStatus])

    // const fetchData = () => {
    //     // axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    //     axios.get(url)
    //         .then((response)=>{
    //             setIsLoading(false);
    //             // setData(JSON.parse(response.data));
    //             setData(response.data);
    //             console.log((response.data));

    //         })
    // }

    const fetchData = () => {
        if(city===''){
            axios.get(url)
            .then((response)=>{
                // setLoadingStatus(isLoading);
                // setIsLoading(false);
                setIsLoading(false);
                // setData(JSON.parse(response.data));
                setData(response.data);
                console.log((response.data));

            })
        } else{
            axios.get(url2(getCity.getCity))
            .then((response)=>{
                // setIsLoading(false);
                setIsLoading(false);
                // setLoadingStatus(isLoading);



                // setData(JSON.parse(response.data));
                setData(response.data);
                console.log((response.data));

            })
        }
    }

    // useEffect(()=> fetchData(), [])
    useEffect(()=> fetchData(),[isLoading])

    return (
        Object.keys(data).length > 0 && 
            <div>
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
                <br/>
                <h4 style={{textAlign: 'center'}}>Location: {data.current.location[0] + ", " + data.current.location[1]}</h4>
                 <div className='container'>
                &nbsp;
                {
                Object.values(data.forecast).map((weather)=>{
                return (
                    <div className="card_item" key={weather.date}>
                        <div className="card_inner">
                            <div className="weatherDate">{weather.date}</div>
                            <img src={"https://" + weather.condition.icon} alt="" />
                            <div className="weatherStatus">{weather.condition.text}</div>
                            <div className="detail-box">
                                <div className="weatherDetail"><span>Avg. Temp</span>{weather.avg_temp_C}&#8451;</div>
                                <div className="weatherDetail"><span>Avg Humidity</span>{weather.avg_humidity}%</div>
                                <div className="weatherDetail"><span>Total Percp.</span>{weather.total_precip_mm}mm</div>
                            </div>
                        </div>

                    </div>
                    
                )
            })}
            </div>
            </div>
    );
}

export default FutureCards;

const Spacing = {
    marginTop: '8px',
    marginBottom: '8px'
}