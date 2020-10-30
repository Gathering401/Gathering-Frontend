import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/LoginPage';
import Event from './components/Event';
import Auth from './components/auth';
import NotAuth from './components/auth/NotAuth';
import EventDetail from './components/EventDetail';
import Group from './components/Group'
import Header from './components/Header'
import {Container,Col} from 'react-bootstrap';
import User from './components/User'

function App() {

  return (
    <div className="App">
      <Header />
      <Container>
        <Col>
          <User />
        </Col>
        <Col>
        <Switch>
        <Route path="/" exact>
          <NotAuth>
            <Login />
          </NotAuth>
          <Auth>
            <Home />
          </Auth>
        </Route>
        <Route path="/Event" exact>
          {/* <Auth> */}
            <Event />
          {/* </Auth> */}
        </Route>
        <Route path="/Group/:groupId" component={(routerProps) => <Group groupId={routerProps.match.params.groupId}/>} exact/>
        <Route path="/EventDetail" exact>
          <EventDetail />
        </Route>
       
      </Switch>
        </Col>

      </Container>
      
      <Footer />
    </div>
  );
}

function Footer() {
  return <footer>&copy; 2020</footer>;
}

export default App;
