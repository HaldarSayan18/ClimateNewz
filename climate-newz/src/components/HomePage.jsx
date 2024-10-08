import React, { useState } from 'react'
import '../assets/styles/HomePage.css'
import axios from 'axios'
// import { ToastContainer, toast } from 'react-toastify';

const api = {
    key: "5dfa8368c3accc79bbf9f5d72591315c",
    base: "https://api.openweathermap.org/data/2.5/",
};

const HomePage = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState();
    const fetchWeather = async () => {
        try {
            // const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'45c015afdb2f6a20f47f7f18733c6e92'}`)
            const res = await axios.get(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
            setWeather(res)
            console.log(res);

        } catch (error) {
            console.log("Error occured\n ", error);
            // alert("Error occured\n ", error);
        }
    }
    const handleCity = (event) => {
        setCity(event.target.value)
    }
    const handleClick = () => {
        fetchWeather()
        // weather ?
        //     toast.info("City fetched !", {
        //         position: "top-center"
        //     })
        //     :
        //     toast.error("Enter city name correctly", {
        //         position: "top-center"
        //     })
    }
    return (
        <>
            <div className='home-container'>
                {/* <ToastContainer /> */}
                <div className='home-sub-container'>
                    <input type='text' placeholder='Enter City Name' value={city} onChange={handleCity} />
                    <button onClick={handleClick} >Fetch Weather</button>
                </div>
                {weather &&
                    <div className='weather-info'>
                        <h3>Coordinates:</h3>
                            <p>latitude - {weather.data.coord.lat}</p>
                            <p>longitude - {weather.data.coord.lon}</p>
                        <h3>Wind Speed: {weather.data.wind.speed}</h3>
                    </div>
                }
            </div>
        </>
    )
}

export default HomePage
