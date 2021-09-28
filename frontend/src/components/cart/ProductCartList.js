import React from 'react';

import { useSelector } from 'react-redux';
import { selectCartState } from '../../store';
import ProductCartItem from './ProductCartItem';

const ProductCartList = () => {
    const cartState = useSelector(selectCartState);

    const {cartItems} = cartState;
    return (
        <div>
           {cartItems.map((cartItem,i)=>(
               <ProductCartItem key={i} cartItem={cartItem}/>
           ))}
        </div>
    )
}

export default ProductCartList
