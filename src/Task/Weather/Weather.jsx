import React, { useEffect, useState } from 'react';
import "./Weather.scss";
import { CgSearch } from 'react-icons/cg';
import { TbWind } from 'react-icons/tb';
import { LuWaves } from 'react-icons/lu';
import axios from 'axios';

const WEATHER_APIKEY = "82546e5fc26d8e0be967d986d2801b67";

const Weather = () => {
  const [city, setCity] = useState("chennai");
  const [weatherData, setWeatherData] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const fetchData = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_APIKEY}`;
      const response = await axios.get(url);
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching the weather data:", error);
    }
  };

  useEffect(() => {
    fetchData(city);
  }, [city]);

  const handleSearch = () => {
    if (inputValue.trim()) {
      setCity(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className='weather'>
      <div className="card">
        <div className="card_top">
          <input
            type="text"
            value={inputValue}
            placeholder='Search The City'
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          <button onClick={handleSearch}>
            <CgSearch />
          </button>
        </div>
        {weatherData && (
          <>
            <div className="card_middle">
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt={weatherData.weather[0].description}
              />
              <p className="temperature">
                {weatherData.main.temp}°C
              </p>
              <p className='city'>{weatherData.name} - {weatherData.weather[0].main}</p>
            </div>
            <div className="card_footer">
              <div className="left">
                <LuWaves className='Icon' />
                <div className="humidity">
                  <p>{weatherData.main.humidity}%</p>
                  <h6>Humidity</h6>
                </div>
              </div>
              <div className="left">
                <TbWind className='Icon' />
                <div className="humidity">
                  <p>{weatherData.wind.speed} Km/h</p>
                  <h6>Wind Speed</h6>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Weather