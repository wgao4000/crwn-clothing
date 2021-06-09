import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../Assests/svgs/crown.svg';
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const header = ({currentUser, hiddenCart}) => (
	<div className="header">
	    <div className="logo-container">
			<Link to="/"><Logo className="logo" /></Link>
		</div>
		<div className="options">
			<Link className = "option" to = "/shop">SHOP</Link>
			<Link className = "option" to = "/contact">CONTACT</Link>
			{currentUser? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className = "option" to = "/signinandup">SIGN IN AND UP</Link>}
		    <CartIcon />
		</div>
		{hiddenCart? <CartDropdown /> : null}
	</div>
);

const mapStateToProp = createStructuredSelector ({
	currentUser: selectCurrentUser,
	hiddenCart: selectCartHidden
})

export default connect(mapStateToProp)(header);