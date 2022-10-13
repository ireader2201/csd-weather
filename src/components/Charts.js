import axios, { AxiosHeaders } from 'axios';
import { useEffect, useState } from 'react';
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

const Charts = () => {

    // const url = 'https://api.weatherapi.com/v1/forecast.json?key=df858f61cf6141ab89403119222909&q=London&days=5&aqi=no&alerts=no';
    // const url = "https://hwxez3ozxi.execute-api.us-east-1.amazonaws.com/default";
    const url = 'https://i2w7t3w0b6.execute-api.us-east-1.amazonaws.com/weather?city=Parramatta';
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
        // axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
        axios.get(url)
            .then((response)=>{
                setIsLoading(false);
                setData((response.data));
                console.log((response.data));
            })
    }

    useEffect(()=>fetchData(), [])
    
    return (
        Object.keys(data).length > 0 && 
        <>
        <ResponsiveContainer width="75%" aspect={3}>
            <LineChart data={data.forecast} >
                <CartesianGrid />
                <XAxis dataKey="date" 
                    interval={'preserveStartEnd'}/>
                <YAxis></YAxis>
                <Legend />
                <Tooltip />
                <Line dataKey="avg_humidity"
                    stroke="green" activeDot={{ r: 8 }} />
                <Line dataKey="avg_temp_C"
                    stroke="red" activeDot={{ r: 8 }} />
                <Line dataKey="total_precip_mm"
                    stroke="blue" activeDot={{ r: 8 }} />
                
                
            </LineChart>
        </ResponsiveContainer>
        </>

        // <Card style={{ width: '25rem', alignItems: 'center', justifyContent: 'center'}}>
        //     <Card.Title style={{textAlign: 'center', marginTop: '10px'}}>{data.current.current_temp_C}<strong>&#8451;</strong></Card.Title>
        //     <Card.Title>{data.current.condition.text}</Card.Title>
        //     <Card.Img variant="top" src={"https://"+data.current.condition.icon} style={{width:"40%", height: "40%"}}/>
        //     <Card.Body >
        //         {/* <Card.Title style={{textAlign: 'center'}}>{data.current.current_temp_C}<strong>&#8451;</strong> | {data.current.condition.text}</Card.Title> */}
        //         <Card.Title style={{textAlign: 'center', marginBottom: '20px'}}> {data.current.location[0] + ', ' + data.current.location[1]}</Card.Title>
        //         <Card.Subtitle style={Spacing}>
        //             Current Time: {data.current.localtime}
        //         </Card.Subtitle>
        //         <Card.Subtitle style={Spacing}>
        //             UV Index: {data.current.uv}
        //         </Card.Subtitle>
        //         <Card.Subtitle style={Spacing}>
        //             Humidity: {data.current.humidity}%
        //         </Card.Subtitle>
        //         <Card.Subtitle style={Spacing}>
        //             Percipitation: {data.current.precip_mm} mm
        //         </Card.Subtitle>    
        //         <Card.Subtitle style={Spacing}>
        //             Wind Speed: {data.current.wind_kph} km/h
        //         </Card.Subtitle>
                
        //         {/* <Card.Text>
        //         Some quick example text to build on the card title and make up the
        //         bulk of the card's content. 
        //         </Card.Text> */}
        //     </Card.Body>
        //     {/* <Button variant="dark" style={{marginBottom: '10px'}}>Check Weather Forecast</Button> */}
        // </Card>
    );
}

export default Charts;

const Spacing = {
    marginTop: '8px',
    marginBottom: '8px'
}