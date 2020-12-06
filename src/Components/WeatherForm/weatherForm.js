import React, {Component} from 'react';
import { Form, Button } from "react-bootstrap";
import './weatherForm.css';

class WeatherForm extends Component {
    state = {
        weather: {},
        zipCode: ''
    }
    baseURL = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=`

    getWeatherInfo = async (zipCode) => {
        const request = await fetch(this.baseURL + zipCode)
        try {
            return request.json();
        } catch (error) {
            console.log('error getting weather info', error)
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.getWeatherInfo(this.state.zipCode).then(weatherData => {
            this.setState({weather: weatherData});
            console.log('this.state.weather', this.state.weather)
        })
    }

    handleChange = (event) => {
        const zipCode = event.target.value;
        this.setState({zipCode: zipCode})
    }

    render() { return (
        <div>
            <Form className="form" onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Form.Group controlId="formGridZip">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control type="text" placeholder="Enter zip code..." name="zip" onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="dark" type="submit" >
                        Submit
                    </Button>
                </Form.Row>
            </Form>
        </div>
    )}
}

export default WeatherForm;
