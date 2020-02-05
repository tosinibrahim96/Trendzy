import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import Header from "./components/Header/Header";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import AuthPage from "./pages/auth/authpage";
import CheckoutPage from "./pages/checkout/checkout";
import { auth, createUser } from "./firebase/firebase.utils";
import { selectCurrentUser } from "./redux/selectors/userSelectors";
import setCurrentUser from "./redux/actions/userActions";
import "./App.css";

class App extends Component {
  unsubscribe = null;
  //hello

  componentDidMount() {
    const { setCurrentUser } = this.props;
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
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        //Nobody is signed in, set currentUser to null
        setCurrentUser(user);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            path="/signIn"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <AuthPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

/**
 * mapStateToProps receives state as parameter
 * Here, we are destructuring the user objet from the state
 *
 */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const setDispatchFunctionAsProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, setDispatchFunctionAsProps)(App);
