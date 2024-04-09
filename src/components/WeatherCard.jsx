import React, { useState } from 'react';

const WeatherCard = ({ weather, temp }) => {
    // console.log(weather);
    
    const [isCel, setIsCel] = useState(true);
    const [buttonText, setButtonText] = useState("Cambiar a °F");

    const handleTemp = () => {
        setIsCel(!isCel);
        setButtonText(isCel ? "Cambiar a °C" : "Cambiar a °F");
    };
 
    const changeTemp = () => {
        if (isCel) {
            return `${temp?.celcius} °C`;
        } else {
            return `${temp?.farenheit} °F`;
        }
    };

    return (
        <div className='container container--wc'>

            <h2 className='ciudad'>{weather?.name}, {weather?.sys?.country}</h2>

            <div className='weather__info'>
                <figure className='info__img'>
                    <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} 
                        alt="icon weather" />
                </figure>
                <div className='info__text'>
                    <h3>{`${weather?.weather[0].description}`}</h3>
                    <ul>
                        <li><strong>Wind Speed: </strong>{weather?.wind.speed} m/s</li>
                        <li><strong>Clouds: </strong>{weather?.clouds.all} %</li>
                        <li><strong>Pressure: </strong>{weather?.main.pressure} hPa </li>
                    </ul>
                </div>
            </div>

            <h3 className='temp'>{changeTemp()}</h3>
            <button onClick={handleTemp}>{buttonText}</button>
        </div>
    );
};

export default WeatherCard;
