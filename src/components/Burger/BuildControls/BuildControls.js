import React from 'react';
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "cheese"},
    {label: "Meat", type: "meat"},
    {label: "Salad", type: "salad"}
]
const buildControls=(props)=>(<div className="BuildControls">
    <p>Current Price: {props.price}</p>
    {controls.map((control)=>{
       return <BuildControl key={control.label} label={control.label} type={control.type} added = {()=>props.ingreAdded(control.type)}
       removed = {()=>props.ingreRemoved(control.type)} disabled={props.disabled[control.type]}
       />
    })}
    <button className="OrderButton" disabled={!props.purchasable} onClick={props.purchaseHandler}>ORDER NOW</button>
</div>);

export default buildControls;