import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home'
import Login from './components/LoginPage';

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
      </Switch>
    </div>
  );
}

export default App;
