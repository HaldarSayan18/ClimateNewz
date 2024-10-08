import React, { useState } from 'react'
import '../assets/styles/HomePage.css'
import axios from 'axios'

const HomePage = () => {
    const [city, setCity] = useState('');
    const fetchWeather = async () => {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'45c015afdb2f6a20f47f7f18733c6e92'}`)
            console.log(res);
            
        } catch (error) {
            console.log("Error occured\n ",error);
            alert("Error occured\n ",error);
        }
    }
    const handleCity = (event) => {
        setCity(event.target.value)
    }
    const handleClick = () => {
        fetchWeather()
    }
    return (
        <>
            <div className='home-container'>
                <div className='home-sub-container'>
                    <input type='text' placeholder='Enter City Name' value={city} onChange={handleCity} />
                    <button onClick={handleClick} >Fetch Weather</button>
                </div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officia tempora, consectetur perferendis at recusandae quia totam facilis fugiat magni atque dignissimos rem deleniti laborum illo veritatis unde ipsum! Culpa!
                Optio exercitationem ullam iure illum neque sunt aut voluptatem natus perferendis eveniet quae expedita harum tenetur, iste omnis earum labore nisi dolor sit quam saepe dolore et sapiente. Vitae, placeat?
            </div>
        </>
    )
}

export default HomePage
