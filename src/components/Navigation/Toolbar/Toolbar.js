import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import DrawerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle'
const Toolbar  = (props)=>(
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <Logo height="80%"/>
        <nav className="DesktopOnly">
            <NavItems/>
        </nav>
    </header>
);

export default Toolbar;