import React,{ Component } from "react";
import Aux from '../../hoc/hoc';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorhandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGRE_PRICES= {
    salad: 0.4,
    meat: 0.7,
    bacon: 0.8,
    cheese:0.5
}
class BurgerBuilder extends Component{
    state={
        ingredients:null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    }
    componentDidMount(){
        axios.get('/ingredients.json').then(response=>{
            this.setState({ingredients: response.data});
        }).catch(error=>{});
    }
    updatePurchaseState = (ingredients)=>{
        const sum= Object.keys(ingredients).map(key=>{
            return ingredients[key];
        }).reduce((sum, el)=>{return sum+el},0);
        this.setState({purchasable:sum>0});
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
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
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
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = ()=>{
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = ()=>{
        this.setState({purchasing: false});
    }
    purchaseContinueHandler = ()=>{
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'ROohani',
                address: {
                    street: 'test street',
                    zip: '134112',
                    country: 'India'
                },
                email: "test@gmail.com"
            },
            deliveryMethod: 'fastest'
        }
      axios.post('/orders.json',order).then(response=>{
        this.setState({loading: false, purchasing: false});
      })
      .catch(error=>{
        this.setState({loading: false, purchasing: false});
      });
    }
    render(){
        const disabledInfo={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key]<=0;
        }
        return (<Aux>
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
            {this.state.loading || !this.state.ingredients?
            <Spinner/>: <OrderSummary 
            purchaseContinueHandler={this.purchaseContinueHandler}
            purchaseCancelHandler={this.purchaseCancelHandler}
            totalPrice={this.state.totalPrice}
            ingredients={this.state.ingredients}/>}</Modal>
            {this.state.ingredients?
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingreAdded = {this.addIngredientHandler} ingreRemoved ={this.removeIngredientHandler}
                disabled={disabledInfo} price={this.state.totalPrice} purchasable={this.state.purchasable} 
                purchaseHandler={this.purchaseHandler}/>
            </Aux> : <Spinner/>
           }
            
        </Aux>);
    }
}

export default withErrorhandler(BurgerBuilder, axios);