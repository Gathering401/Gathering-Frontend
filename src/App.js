import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home'
import Login from './components/LoginPage';
import Register from './components/auth/RegisterForm';

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
      </Switch>
    </div>
  );
}

export default App;
