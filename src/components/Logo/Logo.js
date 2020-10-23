import React from 'react';
import logo from '../../assets/images/burger-logo.png';
import './Logo.css';

const Logo =(props)=>(
<div className="Logo" style={{height: props.height}}>
    <img src={logo} alt="burger"/>
</div>
);

export default Logo;