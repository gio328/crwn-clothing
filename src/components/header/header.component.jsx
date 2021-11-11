import React from "react";
import './header.style.scss';
import { ReactComponent as Logo } from '../../imgs/crown.svg';//react's special syntax for importing svg file
import {Link} from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

const Header = ({currentUser}) => (
    <header className='header'>
        <Link className='logo-container' to="/"><Logo className='logo'/></Link>
        <div className='options'>
           <Link to='/shop'><div className='option'>SHOP</div></Link>
           <Link to='/contact'><div className='option'>CONTACT</div></Link>
           {currentUser ? <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div> : 
           <Link to='/signIn'><div className='option'>SIGN IN</div></Link>
           }
        </div>
    </header>
);
    

export default Header;