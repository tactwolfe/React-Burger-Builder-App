
//This component is passed as child into our modal component and this hold our order summary

import React from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map( igKey => {
        return (
        <li key={igKey}>
        <span style={{textTransform : "capitalize"}}>{igKey}</span> : {props.ingredients[igKey]} 
        </li>
        )
    })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p> A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : ${props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout</p>
            <Button btnType="Danger" click={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" click={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;