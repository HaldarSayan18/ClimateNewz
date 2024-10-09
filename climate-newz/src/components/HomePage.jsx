import React, { useState } from 'react'
import '../assets/styles/HomePage.css'
import axios from 'axios'
import { FaCaretRight } from "react-icons/fa";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
// import { ToastContainer, toast } from 'react-toastify';

const api = {
    key: "5dfa8368c3accc79bbf9f5d72591315c",
    base: "https://api.openweathermap.org/data/2.5/",
};

const HomePage = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState();
    const [show, setShow] = useState(false)
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
    const handleToggle = () => {
        setShow(!show)
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
                        {/* <Dropdown as={ButtonGroup} style={{ display: "flex" }} show={show} onToggle={handleToggle} >
                            {/* <Button variant="success">Split Button</Button> 
                            <div className='h3'>Coordinates:</div>

                            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" style={{marginLeft:"15px", background:"transparent", border:"none"}}><FaCaretRight /></Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item style={{ textDecoration: "none", color:"black" }}>latitude - {weather.data.coord.lat}</Dropdown.Item>
                                <br/>
                                <Dropdown.Item style={{ textDecoration: "none", color:"black" }}>longitude - {weather.data.coord.lon}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}
                        <div className='h3'>Coordinates:</div>
                        <p>latitude - {weather.data.coord.lat}</p>
                        <p>longitude - {weather.data.coord.lon}</p>
                        <div className='h3'>Tempareture: {weather.data.main.temp}</div>
                        <p>Maximum - {weather.data.main.temp_max}</p>
                        <p>Minimum - {weather.data.main.temp_min}</p>
                        <div className='h3'>Feels like: {weather.data.main.feels_like}</div>
                        <div className='h3'>Wind Speed: {weather.data.wind.speed}</div>
                        {/* <div className='h3'>Wind Speed: {weather.data.name}</div> */}
                    </div>
                }
            </div>
        </>
    )
}

export default HomePage
