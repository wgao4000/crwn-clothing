import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage/HomePage.component';
import {Route, Switch} from 'react-router-dom';

const shopPage = () => (<h1>Shopping Page</h1>);
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component = {HomePage} />
        <Route exact path="/shop" component = {shopPage} />
      </Switch>
    </div>
  );
}

export default App;
