import React from 'react';
import './NavItems.css';
import NavItem from './NavItem/NavItem'

const NavItems = (props)=> (
<ul className="NavItems">
    <NavItem link="/" active>Burger Builder</NavItem>
    <NavItem link="/">Checkout</NavItem>
</ul>
);

export default NavItems;