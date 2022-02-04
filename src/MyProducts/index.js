import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addCost, addImage, addName, addNewProduct, addType, deleteMyProduct } from '../redux/actions';
import { myProductsSelector } from '../redux/selectors';

const MyProducts = () => {

    const myProducts = useSelector(myProductsSelector)

    const dispatch = useDispatch()

    const handleAddName = (e) => {
        dispatch(addName(e.target.value))
    }

    const handleAddImage = (e) => {
        dispatch(addImage((e.target.value)))
    }

    const handleAddCost = (e) => {
        dispatch(addCost(e.target.value))
    }

    const handleAddType = (e) => {
        dispatch(addType(e.target.value))
    }

    const handleAddNewProduct = () => {
        dispatch(addNewProduct())
    }

    const handleDeleteMyProduct = (id) => {
        dispatch(deleteMyProduct(id))
    }
    return (
        <div>
            <h1>MY PRODUCTS</h1>
            <div className="myProductsMain">
                <div className="mySales">
                    <div className="propertyProduct">
                        <h2 className="propertyText">Name: </h2>
                        <input onChange={handleAddName}></input>
                    </div>
                    <div className="propertyProduct">
                        <h2 className="propertyText">Image: </h2>
                        <input type="text" onChange={handleAddImage}></input>
                    </div>
                    <div className="propertyProduct">
                        <h2 className="propertyText">Cost: </h2>
                        <input onChange={handleAddCost}></input>
                    </div>
                    <div className="propertyProduct">
                        <h2 className="propertyText">Type: </h2>
                        <input onChange={handleAddType}></input>
                    </div>
                    <div className="propertyProductButton">
                        <button onClick={handleAddNewProduct}>Post</button>
                    </div>
                </div>
                <div className="myAllProduct">
                    {myProducts.map((myProduct) => (
                        <div key={myProduct.id}>
                            <h2>{myProduct.name}</h2>
                            <img src={myProduct.img} alt={myProduct.name}></img>
                            <h3>{myProduct.cost}</h3>
                            <button onClick= {() => handleDeleteMyProduct(myProduct.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default MyProducts;
