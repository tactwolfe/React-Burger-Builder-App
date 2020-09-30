
//our component that displays the burger and enable us to build it as we like

import React , {Component} from 'react';
import Aux from '../../hoc/Auxillary'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICES = {
    salad : 0.5,
    bacon: 0.4,
    cheese: 1.3,
    meat: 0.7,
}

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad : 0,
            bacon:0,
            cheese:0,
            meat:0,

        },
        totalPrice : 4
    }

    //function that add ingredients to our burger
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState( { totalPrice : newPrice , ingredients : updatedIngredients})
    }

    //function that remove ingredients from our burger
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) { //to avoid error if the count become less than zero
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState( { totalPrice : newPrice , ingredients : updatedIngredients})
    }

    render(){

        const disabledInfo = { //a constant that helps to disable the remove button incase of the ingredient count of that item is already zero or less
            ...this.state.ingredients
        };

        for( let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded = {this.addIngredientHandler} 
                ingredientRemoved = {this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;