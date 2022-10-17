import axios, { AxiosHeaders } from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';

const Cards = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [city, setCity] = useState('');
    const url = 'https://i2w7t3w0b6.execute-api.us-east-1.amazonaws.com/weather?city=Parramatta';

    const fetchData = () => {
        if(city===''){
            axios.get(url)
            .then((response)=>{
                setIsLoading(false);
                setData(response.data);
                console.log((response.data));

            })
        } else{
            axios.get(url2(city))
            .then((response)=>{
                setIsLoading(false);
                setData(response.data);
                console.log((response.data));

            })
        }
    }

    const handleChange = event => {
        setCity(event.target.value);
        console.log(event.target.value);
    };

    const handleClick = event => {
        event.preventDefault();
        console.log(url2(city));
        setIsLoading(true);
        console.log(city);
    }

    const url2 = (link) => {
        return 'https://i2w7t3w0b6.execute-api.us-east-1.amazonaws.com/weather?city=' + link;
    }
    useEffect(()=>fetchData(), [isLoading])

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
                        >
                    </input>&nbsp; 
                    <button onClick={handleClick}>Show Forecast</button>
            </div>
            <br/>
        <Card style={{ width: '25rem', alignItems: 'center', justifyContent: 'center'}}>
            <Card.Title style={{textAlign: 'center', marginTop: '10px'}}>{data.current.current_temp_C}<strong>&#8451;</strong></Card.Title>
            <Card.Title>{data.current.condition.text}</Card.Title>
            <Card.Img variant="top" src={"https://"+data.current.condition.icon} style={{width:"40%", height: "40%"}}/>
            <Card.Body >
                {/* <Card.Title style={{textAlign: 'center'}}>{data.current.current_temp_C}<strong>&#8451;</strong> | {data.current.condition.text}</Card.Title> */}
                <Card.Title style={{textAlign: 'center', marginBottom: '20px'}}> {data.current.location[0] + ', ' + data.current.location[1]}</Card.Title>
                <Card.Subtitle style={Spacing}>
                    Current Time: {data.current.localtime}
                </Card.Subtitle>
                <Card.Subtitle style={Spacing}>
                    UV Index: {data.current.uv}
                </Card.Subtitle>
                <Card.Subtitle style={Spacing}>
                    Humidity: {data.current.humidity}%
                </Card.Subtitle>
                <Card.Subtitle style={Spacing}>
                    Percipitation: {data.current.precip_mm} mm
                </Card.Subtitle>    
                <Card.Subtitle style={Spacing}>
                    Wind Speed: {data.current.wind_kph} km/h
                </Card.Subtitle>
            </Card.Body>
            <Button variant="dark" style={{marginBottom: '10px'}} href='/Forecast'>Check Weather Forecast</Button>
        </Card>
        </div>
    );
}

export default Cards;

const Spacing = {
    marginTop: '8px',
    marginBottom: '8px'
}