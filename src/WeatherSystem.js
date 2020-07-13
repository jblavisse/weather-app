import React, { Component } from 'react';
import axios from 'axios';

import "./WeatherSystem.css";

import Period from "./Period";
import CityForm from "./CityForm";

class WeatherSystem extends Component {
    state = {
        periods: [],
        city: "Hazebrouck"
     }

    componentDidMount() {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&lang=fr&units=metric&appid=8c3a54c385c9c9d874d88f2cd6b3dda8`)
        .then(res => {
            console.log(res.data);
            this.setState({
                periods: res.data.list
            })
        })
    }

    changeCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    getWeather = (e) => {
        e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&lang=fr&units=metric&appid=8c3a54c385c9c9d874d88f2cd6b3dda8`)
        .then(res => {
            console.log(res.data);
            this.setState({
                periods: res.data.list
            })
        })
    }

    render() { 
        let periodsList = this.state.periods.map(period => {
            return <Period period={period} />
        })

        return ( 
            <div className="weathersystem">   
                <h1>{this.state.city}</h1>
                <CityForm city={this.state.city} 
                    changeCity={this.changeCity}
                    getWeather={this.getWeather}
                />  
                {periodsList}
            </div>
         );
    }
}
 
export default WeatherSystem;