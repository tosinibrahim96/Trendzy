import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import AuthPage from './pages/auth/authpage';
import { auth, createUser } from './firebase/firebase.utils';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unsubscribe = null;

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(async user => {
      //If a user is currently logged in
      if (user) {
        const userRef = await createUser(user);

        /*we want to get the latest user info returned from the function above
         remember the above function returns what's stored in the db (like a reference)
        We want to use that to update the current user property in state*/
        userRef.onSnapshot(snapshot => {
          /*snapshot returns only id property
          to get the remaining values returned from the db, we use .data()*/
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      } else {
        //Nobody is signed in, set currentUser to null
        this.setState({ currentUser: user });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signIn" component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
