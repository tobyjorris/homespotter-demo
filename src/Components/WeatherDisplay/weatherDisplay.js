import React from 'react';
import './weatherDisplay.css';
import { Container, Row, Col } from "react-bootstrap";
import ConvertDate from '../../Helpers/dateConvertor';

const WeatherDisplay = (props) => {
    return (
        <Container fluid>
            <Row>
                <Col className="d-flex justify-content-center">
                    <h2 className="weatherLocation">{props.weather.location.name} {props.weather.location.region}, {props.weather.location.country}</h2>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <h3 className="detailsTitle">Current Conditions</h3>
                </Col>
            </Row>
            <Row className="currentConditionsDetails">
                {props.unit === 'fahrenheit' &&
                    <React.Fragment>
                        <Col className="d-flex justify-content-end currentCol">
                            <div>Temperature: {props.weather.current.temp_f}&#8457;</div>
                        </Col>
                        <Col className="d-flex justify-content-start currentCol">
                            <div>Feels Like: {props.weather.current.feelslike_f}&#8457;</div>
                        </Col>
                    </React.Fragment>
                }
                {props.unit === 'celsius' &&
                    <React.Fragment>
                        <Col className="d-flex justify-content-end currentCol">
                            <div>Temperature: {props.weather.current.temp_c}&#8451;</div>
                        </Col>
                        <Col className="d-flex justify-content-start currentCol">
                            <div>Feels Like: {props.weather.current.feelslike_c}&#8451;</div>
                        </Col>
                    </React.Fragment>
                }
            </Row>
            <hr />
            <Row>
                <Col className="d-flex justify-content-center">
                    <h3 className="detailsTitle">Forecast</h3>
                </Col>
            </Row>
            {props.weather.forecast.forecastday.map(day =>
                <Row key={day.date}>
                    <Col className="d-flex justify-content-center forecastCol">
                        <h4 className="date">{ConvertDate(day.date)}</h4>
                    </Col>
                    {props.unit === 'fahrenheit' &&
                    <React.Fragment>
                        <Col className="d-flex justify-content-center forecastDetails forecastCol">
                            <span><strong>{day.day.maxtemp_f}&#8457;</strong> /</span>
                            <span> {day.day.mintemp_f}&#8457;</span>
                        </Col>
                        <Col className="d-flex justify-content-center forecastDetails forecastCol">
                            <span>Average: {day.day.avgtemp_f}&#8457;</span>
                        </Col>
                    </React.Fragment>
                    }
                    {props.unit === 'celsius' &&
                    <React.Fragment>
                        <Col className="d-flex justify-content-center forecastDetails forecastCol">
                            <span><strong>{day.day.maxtemp_c}&#8451;</strong> / </span>
                            <span>{day.day.mintemp_c}&#8451;</span>
                        </Col>
                        <Col className="d-flex justify-content-center forecastDetails forecastCol">
                            <span>Average: {day.day.avgtemp_c}&#8451;</span>
                        </Col>
                    </React.Fragment>
                    }
                </Row>
            )}
        </Container>
    )
}

export default WeatherDisplay;
