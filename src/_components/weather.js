import React, { Component } from 'react';
import Axios from 'axios';
import '../css/owfont-regular.min.css';
import { Loader } from '../_components';
import '../css/bootstrap-grid.min.css';

class Weather extends Component {

    constructor(props) {
        super(props);
        Axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + props.city + ',' + props.country + '&APPID=YOUR_API_KEY').then(response => {
            this.setState({ ...response.data });
        })
    }

    render() {

        if (this.state) {
            if (this.props.country !== this.state.sys.country) {
                Axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.props.city + ',' + this.props.country + '&APPID=YOUR_API_KEY').then(response => {
                    this.setState({ ...response.data });
                })
            }
        }

        return <>
            {this.state ? <div className="weather-container row">

                <div className="col-12 col-md-4 d-flex justify-content-center align-items-center flex-column">
                    <i className={`w-icon owf owf-${this.state.weather[0].icon[this.state.weather[0].icon.length - 1] === 'n' ? this.state.weather[0].id + '-n' : this.state.weather[0].id + '-d'}`}></i>
                    <p>{this.state.weather[0].description}</p>
                </div>

                <div className="col-12 col-md-4 d-flex justify-content-center align-items-center flex-column">
                    <h1 className="w-city"><b>{this.state.name}</b></h1>
                    <h1>{new Date(this.state.dt * 1000).toLocaleString('en', { hour12: false, timeStyle: 'short' })}</h1>
                    <h5>{new Date(this.state.dt * 1000).toLocaleString('en', { dateStyle: 'medium' })}</h5>
                    <h6>{new Date(this.state.dt * 1000).toLocaleString('en', { weekday: 'long' })}</h6>
                </div>

                <div className="w-degree col-12 col-md-4 d-flex justify-content-center align-items-center flex-column">
                    <h1><b>{Math.round(this.state.main.temp - 273.15)}°C</b></h1>
                    <p><span>&darr;{Math.round(this.state.main.temp_min - 273.15)}°C</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&uarr;{Math.round(this.state.main.temp_max - 273.15)}°C</span></p>
                    <p>Humidity &nbsp;&nbsp;{this.state.main.humidity}%</p>
                    <p>Pressure &nbsp;&nbsp;{this.state.main.pressure}hPa</p>
                    <p>Wind &nbsp;&nbsp;{Math.round(this.state.wind.speed * 3.6)}km/h</p>
                </div>
            </div> : <Loader />}
        </>

    }
}

export { Weather };
