import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />

    </Link>
    {/* <img className="logos" src='https://twitter.com/SCORFoodHub/photo' alt="" /> */}
    <div className='options'>
      
     <Link className='option' to='/shop'>
        MENU
      </Link>
      <Link className='option' to='/shop'>
        ABOUT
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      { 
        currentUser ?( 
          <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div> ) 
            : ( <Link className='option' to ='/signin'> SIGN IN </Link>) 
      }
      <CartIcon/> 
    </div>
    {hidden? null:<CartDropdown/>}
    
  </div>

);

// const mapStateToProps = ({user:{currentUser}, cart:{hidden}})=> ({
//   currentUser,
//   hidden
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);