import axios, { AxiosHeaders } from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';

const Cards = () => {

    // const url = 'https://api.weatherapi.com/v1/forecast.json?key=df858f61cf6141ab89403119222909&q=London&days=5&aqi=no&alerts=no';
    const url = "https://hwxez3ozxi.execute-api.us-east-1.amazonaws.com/default";
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
        // axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
        axios.get(url)
            .then((response)=>{
                setIsLoading(false);
                setData(JSON.parse(response.data));
                console.log(JSON.parse(response.data));
            })
    }

    useEffect(()=>fetchData(), [])
    
    return (
        Object.keys(data).length > 0 && 
        <Card style={{ width: '25rem', alignItems: 'center', justifyContent: 'center'}}>
            <Card.Img variant="top" src={"https://"+data.current.condition.icon} style={{width:"50%", height: "50%"}}/>
            <Card.Body >
                <Card.Title style={{textAlign: 'center', fontSize: '30px'}}>{data.current.current_temp_C}<strong>&#8451;</strong></Card.Title>
                <Card.Subtitle style={{textAlign: 'center', margin: '10px'}}>
                    {data.current.location[0] + ', ' + data.current.location[1]}
                </Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content. 
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default Cards;