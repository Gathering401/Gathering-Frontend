import './App.css';
import LoginPage from './components/LoginPage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Event from './components/Event';

function App() {
  return (
    <div className="justify-content-center  align-items-center">
        <Container>
      <Row>
      <Col lg={5}></Col>
        <Col lg={2}>
        <LoginPage />
        </Col>
        <Col lg={5}></Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
