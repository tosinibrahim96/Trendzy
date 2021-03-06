import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils.js";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/selectors/userSelectors";
import { selectCartDropdownState } from "../../redux/selectors/cartSelectors";
import "./Header.scss";

const Header = ({ currentUser, hideCartDropdown }) => {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo-container" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hideCartDropdown ? "" : <CartDropdown />}
    </div>
  );
};

/**
 * mapStateToProps receives state as parameter
 * Here, we are destructuring the user objet from the state
 *
 */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hideCartDropdown: selectCartDropdownState
});

export default connect(mapStateToProps)(Header);
