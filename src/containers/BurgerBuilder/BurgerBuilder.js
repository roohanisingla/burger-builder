import React,{ Component } from "react";
import Aux from '../../hoc/hoc';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGRE_PRICES= {
    salad: 0.4,
    meat: 0.7,
    bacon: 0.8,
    cheese:0.5
}
class BurgerBuilder extends Component{
    state={
        ingredients:{
            cheese: 0,
            meat:0,
            bacon:0,
            salad:0
        },
        totalPrice: 4
    }
    addIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]= updatedCount;
        const priceAddition = INGRE_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+ priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    }
    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount = oldCount-1;
        
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]= updatedCount;
        const priceMinus = INGRE_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice- priceMinus;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    }
    render(){
        const disabledInfo={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key]<=0;
        }
        return (<Aux>
            <Burger ingredients={this.state.ingredients}/>
           <BuildControls ingreAdded = {this.addIngredientHandler} ingreRemoved ={this.removeIngredientHandler}
           disabled={disabledInfo} price={this.state.totalPrice}/>
        </Aux>);
    }
}

export default BurgerBuilder;