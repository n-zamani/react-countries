import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

class GoogleMap extends Component {

    render() {

        return <Map
                google={window.google}
                initialCenter={{
                    lat: this.props.lat,
                    lng: this.props.lng
                }}
                center={{
                    lat: this.props.lat,
                    lng: this.props.lng
                }}
                style={style}
                zoom={5}>
                <Marker position={{ lat: this.props.lat, lng: this.props.lng }} />
            </Map>
    }
}

const style = {
    width: '100%',
    borderRadius: '.25rem',
    boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)'
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCCYksb6wpNl2MbhiAGYNQZdYz2hFhH-kU'
})(GoogleMap)
