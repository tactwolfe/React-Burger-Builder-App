
//the component that will display the burger in our app 


import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let transformedIngredients = 
        Object.keys(props.ingredients).map( igkey => { //use the object.keys method to convert the object we recieved as props into an array so we can loop through it
            return [...Array(props.ingredients[igkey])].map( 
                (_,i)=> {
                    return <BurgerIngredient key={igkey + i} type={igkey} /> 
            });
        }).reduce((arr,el)=> {
            return arr.concat(el)
        } ,[]); 

    if(transformedIngredients.length === 0 ) {
        transformedIngredients = <p>Please start adding ingredients ! <span role="img" aria-labelledby="smiling emoji">😀</span></p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;