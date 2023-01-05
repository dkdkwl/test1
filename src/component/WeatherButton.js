import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,setCity,city}) => {
  return (
    <div>
        <Button onClick={()=>{setCity('')}} variant="warning" >current Location</Button>
        {cities.map((items,i)=>{
            return(<Button onClick={()=>{
                 setCity(items);
                 console.log(cities[i]);
                 }} className={ cities[i] == city ? 'active' : '' } key={i} variant="warning">
            {items}
            </Button>
            )
        })}
    </div>
  )
}

export default WeatherButton