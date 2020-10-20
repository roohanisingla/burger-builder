import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props)=>{
let ingredients = Object.keys(props.ingredients).map(igKey=>{
    return [...Array(props.ingredients[igKey])].map((el,i)=>{
       return <BurgerIngredient key={igKey+i} type={igKey}/>
    }) 
}).reduce((arr, curr)=>{
    return arr.concat(curr);
},[]);
if(ingredients.length===0){
    ingredients=<p>Please start adding ingredients</p>
}
return (   
<div className="Burger">
    <BurgerIngredient type="bread-top"/>
    {ingredients}
    <BurgerIngredient type="bread-bottom"/>
</div>
)
}

export default burger;