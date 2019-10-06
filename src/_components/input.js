import React, { Component } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

class Input extends Component {

    state = {
        name: '',
        suggest: []
    }

    changeHandler = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value, suggest: [] });
        if (value.length > 2) {
            Axios.get('https://restcountries.eu/rest/v2/name/' + value).then(response => {
                this.setState({ suggest: response.data });
            })
        }
    }

    countrySelect = countryCode => () => {
        this.props.history.push('/country/' + countryCode);
    }

    render() {
        return <div>
            <input type='text' autoComplete='off' value={this.state.name} name='name' onChange={this.changeHandler} />
            <button>GO</button>
            {this.state.suggest.length > 0 && <ul>
                {this.state.suggest.map(country => <li onClick={this.countrySelect(country.alpha2Code)} key={country.alpha2Code}>
                    <img src={country.flag} alt='flag'></img>
                    {country.name}
                </li>)}
            </ul>}
        </div>
    }
}

const inputWithRouter = withRouter(Input);

export { inputWithRouter as Input };