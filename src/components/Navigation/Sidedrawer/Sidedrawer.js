import React from 'react';
import Logo from "../../Logo/Logo";
import NavItems from '../NavItems/NavItems';
import './Sidedrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/hoc'

const Sidedrawer = (props)=>{
let classes=["Sidedrawer", "Close"];
if(props.open){
    classes=["Sidedrawer", "Open"];
}
return (
    <Aux>
    <Backdrop show={props.open} clicked={props.closed}/>
    <div className={classes.join(' ')}>
        <Logo height="11%"/>
        <nav>
        <NavItems/>
        </nav>
        
    </div>
    </Aux>
);
};

export default Sidedrawer;