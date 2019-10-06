import React, { Component } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import '../css/bootstrap-grid.min.css';
import { Weather, Loader, Info } from '../_components';
import GoogleMap from '../_components/googleMap';

class Country extends Component {

    constructor(props) {
        super(props);
        Axios.get('https://restcountries.eu/rest/v2/alpha/' + props.match.params.code).then(response => {
            this.setState({ ...response.data });
        })
    }

    goBack = () => {
        this.props.history.push('/');
    }

    gotoCountry = country => () => {
        this.props.history.push('/country/' + country);
        Axios.get('https://restcountries.eu/rest/v2/alpha/' + country).then(response => {
            this.setState({ ...response.data });
        })
    }

    render() {

        if (this.state) {
            if (this.props.match.params.code !== this.state.alpha3Code && this.props.match.params.code !== this.state.alpha2Code) {
                Axios.get('https://restcountries.eu/rest/v2/alpha/' + this.props.match.params.code).then(response => {
                    this.setState({ ...response.data });
                })
            }
        }

        const { state } = this;
        return <div className="country-page container-fluid p-0">
            {!state ? <Loader /> : <div className="container-fluid row m-0">
                <div className="info col-12 col-lg-5">
                    <div>
                        <Info data={state} gotoCountry={this.gotoCountry} goBack={this.goBack} />
                    </div>
                </div>

                <div className="map-weather col-12 col-lg-7">
                    <div>
                        <div>
                            <div className="map">
                                <GoogleMap lat={state.latlng[0]} lng={state.latlng[1]} />
                            </div>
                        </div>
                        <div className="weather">
                            <Weather city={state.capital} country={state.alpha2Code} />
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    }
}

const countrywithRouter = withRouter(Country);

export { countrywithRouter as Country };