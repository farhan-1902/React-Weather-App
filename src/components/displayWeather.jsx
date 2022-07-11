import React from 'react';

function Weather (props) {
    const city = props.details[0];
    const temp = props.details[1];
    const url = props.details[2];
  
    return (
      <>
      <p>The current temperature in {city} is {temp} degrees Celsius.</p>
      <img src={url} alt="weather-type"/>
      </>
    );
}

export default Weather;