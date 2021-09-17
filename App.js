import './App.css';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Login from './Login';
import Signin from './Signin';

function App() {
  return (
    <Router> 
    <div className="App">
      <Switch>
    <Route path="/" exact component={Login}/>
    <Route path="/Signin" component={Signin}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
