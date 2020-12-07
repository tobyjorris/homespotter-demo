import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import './weatherForm.css';
import WeatherDisplay from "../WeatherDisplay/weatherDisplay";
import getWeatherInfo from "../../Helpers/getWeatherInfo/getWeatherInfo";

class WeatherForm extends Component {
    state = {
        weather: null,
        zipCode: '',
        unit: 'fahrenheit',
        noLocationFound: false
    }

    // used to detect stored state in localStorage, and update the UI if it finds it upon component Mount
    componentDidMount() {
        if (window.localStorage.getItem('state') !== null) {
            const localState = JSON.parse(localStorage.getItem('state'));
            this.setState(()=> ({
                weather: localState.weather,
                zipCode: localState.zipCode,
                unit: localState.unit,
                noLocationFound: localState.noLocationFound
            }))
        }
    }

    // handles form submission, triggers the call to WeatherAPI, sets most recent state to localStorage
    handleSubmit = event => {
        event.preventDefault();
        getWeatherInfo(this.state.zipCode).then(weatherData => {
            if (weatherData.error) {
                this.setState({noLocationFound: true})
            } else {
                this.setState({weather: weatherData, noLocationFound: false});
                const stateJSON = JSON.stringify(this.state)
                localStorage.setItem('state', stateJSON)
            }
        })
    }

    // handles capturing the input from the zip code input
    handleChange = event => this.setState({zipCode: event.target.value})

    // handles toggling the units from Fahrenheit to Celsius
    handleUnitChange = value => this.setState({unit: value})

    render() { return (
            <Container className="weatherForm" fluid>
                <Row className="weatherFormRow">
                    <Col className="d-flex justify-content-center align-content-center unit-opts-col" xs={12} sm={3}>
                        <ToggleButtonGroup  type="radio" name="options" defaultValue='fahrenheit' onChange={this.handleUnitChange}>
                            <ToggleButton variant="outline-info" value='fahrenheit'>Fahrenheit</ToggleButton>
                            <ToggleButton variant="outline-info" value='celsius'>Celsius</ToggleButton>
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
                                    <Button className="submitButton" variant="success" type="submit" >
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
