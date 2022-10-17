import axios, { AxiosHeaders } from 'axios';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Label
} from 'recharts';

const Charts = () => {

    const url = 'https://i2w7t3w0b6.execute-api.us-east-1.amazonaws.com/weather?city=Parramatta';
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [city, setCity] = useState('');

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
        // console.log(setLoadingStatus);
        setIsLoading(true);
    }

    const url2 = (link) => {
        return 'https://i2w7t3w0b6.execute-api.us-east-1.amazonaws.com/weather?city=' + link;
    }

    useEffect(()=>fetchData(), [isLoading])
    
    return (
        Object.keys(data).length > 0 && 
        <>       
        <ResponsiveContainer width="100%" height='100%' aspect={3}>
            <LineChart data={data.forecast}  >
                <CartesianGrid />
                <XAxis dataKey="date" angle='-25' 
                    interval={'preserveStartEnd'} style={{fontSize: '12px'}}>
                </XAxis>
                <YAxis></YAxis>
                <Legend verticalAlign='top' />
                <Tooltip />
                <Line dataKey="avg_humidity"
                    stroke="green" activeDot={{ r: 8 }} />
                <Line dataKey="avg_temp_C"
                    stroke="red" activeDot={{ r: 8 }} />
                <Line dataKey="total_precip_mm"
                    stroke="blue" activeDot={{ r: 8 }} />  
            </LineChart>

        </ResponsiveContainer>
        <div style={{width:'21%'}}>
            <h5 style={{textAlign: 'center'}}>Location: {data.current.location[0] + ", " + data.current.location[1]}</h5>
            <br/>
            <div style={{justifyContent: 'center', alignItems: 'center', display:'flex'}}>
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
            </div>
        </>
    );
}

export default Charts;