import './App.css';
import { Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import Login from './components/LoginPage';
import Register from './components/auth/RegisterForm';
import Event from './components/Event';
import EventDetail from './components/EventDetail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Login" exact>
          <Login />
        </Route>
        <Route path="/Register" exact>
          <Register />
        </Route>
        <Route path="/Event" exact>
          <Event />
        </Route>
        <Route path="/EventDetail" exact>
          <EventDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
