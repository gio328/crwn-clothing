import React from "react";
import './header.style.scss';
import { ReactComponent as Logo } from '../../imgs/crown.svg';//react's special syntax for importing svg file
import {Link} from "react-router-dom";

const Header = () => (
    <header className='header'>
        <Link className='logo-container' to="/"><Logo className='logo'/></Link>
        <div className='options'>
           <Link to='/shop'><div className='option'>SHOP</div></Link>
           <Link to='/contact'><div className='option'>CONTACT</div></Link>
           <Link to='/signin'><div className='option'>SIGN IN</div></Link>
        </div>
    </header>
);
    

export default Header;