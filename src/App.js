// import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage/HomePage.component';
import {Route, Switch} from 'react-router-dom';
import Shop from './Pages/Shop/Shop.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component = {HomePage} />
        <Route exact path="/shop" component = {Shop} />
      </Switch>
    </div>
  );
}

export default App;
