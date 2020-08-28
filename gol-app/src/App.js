import React from 'react';
import './App.css';

// Layout UI components
import { Container, Row, Col } from 'react-bootstrap'

// Page components
import About from './Components/About'
import Rules from './Components/Rules'
import Viz from './Components/Viz';

function App() {
  return (
    <div className="App">
      <h1>Abhit's Conway's Game of Life</h1>

      <Container>
        <Row>
          <Col sm={8}><Viz /></Col>
          <Col sm={4}><Rules /></Col>
        </Row>
        <Row>
        <Col sm={12}><About /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
