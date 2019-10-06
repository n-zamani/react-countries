import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from "mdbreact";
import back from '../_icons/arrow-left.svg';

class Info extends Component {

    render() {
        const { data } = this.props;
        return <div className="info-container">
            <MDBCarousel
                activeItem={1}
                length={7}
                showControls={true}
                showIndicators={true}
                style={{ height: '100%' }}>
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <div className="info-banner" style={{ backgroundColor: '#fc3e3e' }}></div>
                            <div>
                                <h3>{data.name}</h3>
                                <p>{data.nativeName}</p>
                                <p>{data.altSpellings.map((spell, index, array) => index !== array.length - 1 ? <span>{spell} - </span> : <span>{spell}</span>)}</p>
                            </div>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <div className="info-banner" style={{ backgroundColor: '#FF922B' }}></div>
                            <div>
                                <h3>Region</h3>
                                <p>{data.subregion}</p>
                                <h3>Capital</h3>
                                <p>{data.capital}</p>
                                <h3>Calling Code</h3>
                                <p>{data.callingCodes.map((code, index, array) => index !== array.length - 1 ? <span>+{code} - </span> : <span>+{code}</span>)}</p>
                            </div>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <div className="info-banner" style={{ backgroundColor: '#fff334' }}></div>
                            <div>
                                <h3>Languages</h3>
                                <p>{data.languages.map((language, index, array) => index !== array.length - 1 ? <span>{language.name} ({language.nativeName}) - </span> : <span>{language.name} ({language.nativeName})</span>)}</p>
                                <h3>Demonym</h3>
                                <p>{data.demonym}</p>
                            </div>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="4">
                        <MDBView>
                            <div className="info-banner" style={{ backgroundColor: '#4fe768' }}></div>
                            <div>
                                <h3>Neighboring Countries</h3>
                                <p>{data.borders.map((border, index, array) => index !== array.length - 1 ? <span><span className="hover-neighbors" onClick={this.props.gotoCountry(border)}>{border}</span><span> - </span></span> : <span className="hover-neighbors" onClick={this.props.gotoCountry(border)}>{border}</span>)}</p>
                            </div>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="5">
                        <MDBView>
                            <div className="info-banner" style={{ backgroundColor: '#14BEF0' }}></div>
                            <div>
                                <h3>Currencies</h3>
                                <p>{data.currencies.map((currency, index, array) => index !== array.length - 1 ? <span>{currency.name} ({currency.code}) ({currency.symbol}) - </span> : <span>{currency.name} ({currency.code}) ({currency.symbol})</span>)}</p>
                                <h3>Population</h3>
                                <p>{data.population}</p>
                            </div>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="6">
                        <MDBView>
                            <div className="info-banner" style={{ backgroundColor: '#c06ed3' }}></div>
                            <div>
                                <h3>Time Zones</h3>
                                <p>{data.timezones.map((timezone, index, array) => index !== array.length - 1 ? <span>{timezone} - </span> : <span>{timezone}</span>)}</p>
                            </div>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="7">
                        <MDBView>
                            <div className="info-banner" style={{ backgroundColor: '#ff8bb3' }}></div>
                            <div>
                                <h3>Geographical Location</h3>
                                <p>{data.latlng[0]}, {data.latlng[1]}</p>
                                <h3>Internet TLD</h3>
                                <p>{data.topLevelDomain.map((domain, index, array) => index !== array.length - 1 ? <span>{domain} - </span> : <span>{domain}</span>)}</p>
                            </div>
                        </MDBView>
                    </MDBCarouselItem>
                </MDBCarouselInner>
                <div className="back">
                    <button onClick={this.props.goBack}><img src={back} alt='Back' /></button>
                </div>
                <div className="flag">
                    <img src={data.flag} alt="flag" />
                </div>
            </MDBCarousel>
        </div>
    }
}

export { Info };