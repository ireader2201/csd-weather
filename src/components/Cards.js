import axios, { AxiosHeaders } from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';

const Cards = () => {

    const url = 'https://api.weatherapi.com/v1/forecast.json?key=df858f61cf6141ab89403119222909&q=London&days=5&aqi=no&alerts=no';
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
        axios.get(url)
            .then((response)=>{
                setIsLoading(false);
                setData(response.data);
                console.log(response.data);
            })
    }

    // const fetchData = async ()  => {
    //     try {
    //         const response = await axios.get(url);
    //         console.log(response);
    //         const data = response.data;
    //         setData(data);
    //     } catch(error) {
    //         console.log(error);
    //     }
    // }

    useEffect(()=>fetchData(), [])
    
    return (
        Object.keys(data).length > 0 && 
        <Card style={{ width: '50rem', alignItems: 'center', justifyContent: 'center'}}>
            <Card.Img variant="top" src={"https://"+data.current.condition.icon}/>
            <Card.Body>
                {/* <Card.Title>{data.current.humidity}</Card.Title> */}
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