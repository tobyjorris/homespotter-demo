import React from 'react';
import './App.css';
import WeatherForm from './Components/WeatherForm/weatherForm'
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
        <Container className="App">
            <Row className="justify-content-center">
                <Col className="d-flex align-items-center justify-content-center">
                    <h1 className="appTitle">Weather Demo</h1>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="d-flex align-items-center justify-content-center">
                    <h2 className="weatherAPI">Powered by
                        <a rel="noopener noreferrer" target="_blank" href="https://www.weatherapi.com/" title="Weather API"> WeatherAPI.com</a>
                    </h2>
                </Col>
            </Row>
            <WeatherForm />
        </Container>

  );
}

export default App;
