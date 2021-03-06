// import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage/HomePage.component';
import {Route, Switch, Redirect} from 'react-router-dom';
import Shop from './Pages/Shop/Shop.component';
import Header from './Components/header/header.component';
import checkout from './Pages/checkout/checkout.component';
import Signinandup from './Pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {Component} from 'react';
import {connect} from 'react-redux';
import setCurrentUser from './redux/user/user-action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
class App extends Component {
  unsubscribe = null;
  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({id: snapShot.id, ...snapShot.data()});
        })
      } 
      else {
        setCurrentUser(userAuth);
      }
    });
  }  

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component = {HomePage} />
          <Route path="/shop" component = {Shop} />
          <Route exact path="/signinandup" render= {() => this.props.currentUser ? <Redirect to="/" />: <Signinandup />} />
          <Route exact path="/checkout" component = {checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProp = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))  
})  

export default connect(mapStateToProp, mapDispatchToProps)(App);
