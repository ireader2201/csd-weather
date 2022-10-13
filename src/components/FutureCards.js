import axios, { AxiosHeaders } from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

const FutureCards = () => {

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
                // setData(JSON.parse(response.data));
                setData(response.data);
                console.log((response.data));
            })
    }

    useEffect(()=>fetchData(), [])
    
    return (
        Object.keys(data).length > 0 && 
            <div>
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
           
            

        // <div className='container'>
        //     {data.map((weather) => {
        //     return (
        //         <div>
                    
        //         </div>
        //     )
        // })}
        // </div>
        
        // <>
        // <ResponsiveContainer width="100%" aspect={3}>
        //     <LineChart data={data.forecast} >
        //         <CartesianGrid />
        //         <XAxis dataKey="date" 
        //             interval={'preserveStartEnd'} />
        //         <YAxis></YAxis>
        //         <Legend />
        //         <Tooltip />
        //         <Line dataKey="avg_temp_C"
        //             stroke="black" activeDot={{ r: 8 }} />
        //         <Line dataKey="avg_humidity"
        //             stroke="red" activeDot={{ r: 8 }} />
        //     </LineChart>
        // </ResponsiveContainer>
        // </>
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

export default FutureCards;

const Spacing = {
    marginTop: '8px',
    marginBottom: '8px'
}