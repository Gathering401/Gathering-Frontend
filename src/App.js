import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/LoginPage';
import Event from './components/Event';
import Auth from './components/auth';
import NotAuth from './components/auth/NotAuth';
import EventDetail from './components/EventDetail';

function App() {

  return (
    <div className="App">
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
          <Auth>
            <Event />
          </Auth>
        </Route>
        <Route path="/EventDetail" exact>
          <EventDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
