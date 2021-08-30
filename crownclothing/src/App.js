import { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user.selector";
import Header from "./components/header/header";
import Home from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInAndSignUpPage from "./pages/signIn-signUp/signIn-signUp";
import {
  auth,
  createUserrofileDocument,
} from "./components/firebase/firebase.utils";
import { setCurrentUser } from "./redux/action/user.action";
import Checkout from "./pages/checkout/checkout";

class App extends Component {
  unsubscribedFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribedFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserrofileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribedFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
