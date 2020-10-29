
//This component is passed as child into our modal component and this hold our order summary

import React,{Component} from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component  {

    componentDidUpdate() {
        console.log('Order Summary will update');
    }


    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map( igKey => {
            return (
            <li key={igKey}>
            <span style={{textTransform : "capitalize"}}>{igKey}</span> : {this.props.ingredients[igKey]} 
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
                <p><strong>Total Price : ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout</p>
                <Button btnType="Danger" click={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" click={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}


export default OrderSummary;