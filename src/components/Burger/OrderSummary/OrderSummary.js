import React from 'react';
import Aux from '../../../hoc/hoc';
import Button from '../../UI/Button/Button'
const orderSummary = (props)=>{
    const ingreSummary = Object.keys(props.ingredients).map(key=>{
    return <li key={key}><span style={{textTransform: "capitalize"}}>{key}</span> : {props.ingredients[key]}</li>
    })
return (
    <Aux>
        <h3>Your Order</h3>
        <p>Burger with following ingredients:</p>
        <ul>
            {ingreSummary}
        </ul>
        <p>Continue to Checkout</p>
<p>Total price: <strong>{props.totalPrice}</strong></p>
        <Button btnType="Danger" clicked={props.purchaseCancelHandler}>CANCEL</Button>
        <Button btnType= "Success" clicked={props.purchaseContinueHandler}>CONTINUE</Button>
    </Aux>
)
};

export default orderSummary;