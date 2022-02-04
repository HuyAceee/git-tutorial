import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deleteCart, increaseCart, reductionCart } from '../redux/actions';
import { allCartsSelector } from '../redux/selectors'


const Cart = () => {
    
    
    const allCarts = useSelector(allCartsSelector)
    
    const toltalCost = allCarts.reduce((acc, curr) => {
        return acc + curr.cost*curr.quantity
    }, 0)
    const dispatch = useDispatch()
    

    const handleDeleteCart = (index) => {
        dispatch(deleteCart(index))
    }
    
    const handleIncrease = (index) => {
        dispatch(increaseCart(index))
    }
    const handleReduction = (index) => {
        dispatch(reductionCart(index))
    }
  return (
    <div>
        <h1>CART</h1>
        <div>
            {allCarts.map((cart, index) => (
                <div key= {index}>
                    <h2>{cart.name}</h2>
                    <img src= {cart.img} alt= {cart.name} />
                    <h3>{cart.cost}</h3>
                    <h3>Quantity: {cart.quantity}</h3>
                    <button onClick= {() => handleIncrease(index)}>+</button>
                    <button onClick= {() => handleReduction(index)}>-</button>
                    <button onClick = {() => handleDeleteCart(index)}>Delete</button>
                </div>
            ))}
        </div>
        <div>
            <h2>Total Cost: {toltalCost}</h2>
        </div>
    </div>
  )
};

export default Cart;
