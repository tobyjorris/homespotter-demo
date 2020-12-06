import React, {Component} from 'react';
import { Container, Row, Col, Form, Button, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import './weatherForm.css';
import WeatherDisplay from "../WeatherDisplay/weatherDisplay";

class WeatherForm extends Component {
    state = {
        weather: null,
        location: '',
        unit: 'fahrenheit',
        noLocationFound: false
    }
    baseURL = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&days=4&q=`

    getWeatherInfo = async (location) => {
        const request = await fetch(this.baseURL + location)
        try {
            return request.json();
        } catch (error) {
            console.log(error)
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.getWeatherInfo(this.state.zipCode).then(weatherData => {
            if (weatherData.error) {
                this.setState({noLocationFound: true})
            } else {
                this.setState({weather: weatherData, noLocationFound: false});
            }
        })
    }

    handleChange = (event) => {
        const zipCode = event.target.value;
        this.setState({zipCode: zipCode})
    }

    handleUnitChange = value => this.setState({unit: value})

    render() { return (
            <Container className="weatherForm" fluid>
                <Row className="weatherFormRow">
                    <Col className="d-flex justify-content-center align-content-center unit-opts-col" xs={12} sm={3}>
                        <ToggleButtonGroup  type="radio" name="options" defaultValue='fahrenheit' onChange={this.handleUnitChange}>
                            <ToggleButton variant="info" value='fahrenheit'>Fahrenheit</ToggleButton>
                            <ToggleButton variant="info" value='celsius'>Celsius</ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                    <Col className="d-flex justify-content-center form-col" xs={12} sm={8}>
                        <Form className="form" onSubmit={this.handleSubmit}>
                            <Form.Row className="d-flex justify-content-center">
                                <Col xs={8}>
                                    <Form.Group controlId="formGridZip">
                                        <Form.Control type="text" placeholder="Enter zip code..." name="zip" onChange={this.handleChange}/>
                                    </Form.Group>
                                </Col>
                                <Col xs={4}>
                                    <Button className="submitButton" variant="primary" type="submit" >
                                        Submit
                                    </Button>
                                </Col>
                            </Form.Row>
                        </Form>
                    </Col>
                    {this.state.noLocationFound &&
                        <Col className="d-flex justify-content-center" xs={12}>
                            <p className="locationAlert">Sorry, we couldn't find that location. Please Try Again.</p>
                        </Col>
                    }
                </Row>
                <Row className="weatherDisplayRow">
                    {this.state.weather &&
                    <WeatherDisplay
                        weather={this.state.weather}
                        unit={this.state.unit}
                    />
                    }
                </Row>
            </Container>
    )}
}

export default WeatherForm;
