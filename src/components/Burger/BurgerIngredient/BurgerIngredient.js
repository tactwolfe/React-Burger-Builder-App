//the component that handles the ingredients component of our burger that we will be using to create and display our burger in the app

import React from 'react';
import PropTypes from 'prop-types'; //importing the prop-type npm package we have downloaded for the prop type validation

import classes from './BurgerIngredient.css'; //react css module


const burgerIngredients = (props) => {
    let ingredient = null;

    switch(props.type) {

        case ('bread-bottom') :
            ingredient = <div className={classes.BreadBottom}></div>;
            break;

        case ('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
            
        case ('meat'):
            ingredient = <div className={classes.Meat}></div>
            break;

        case ('cheese'):
            ingredient = <div className={classes.Cheese}></div>
            break; 
                
        case ('bacon'):
            ingredient = <div className={classes.Bacon}></div>
            break;

        case ('salad'):
            ingredient = <div className={classes.Salad}></div>
            break;

        default :
            ingredient = null;
    }

    return ingredient;
}

burgerIngredients.propTypes = {
    type:PropTypes.string.isRequired  //to check the props we have required is of string type and isRequired so that if we ever try to pass an ingredient component without passing a type the we get an error
};

export default burgerIngredients;