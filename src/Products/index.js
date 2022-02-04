import React from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { buyProduct } from '../redux/actions'
import { searchInputProductsSelector } from '../redux/selectors';
import Search from '../Search';
// import 'bootstrap/dist/css/bootstrap.min.css';


const Products = () => {
    const allProducts = useSelector(searchInputProductsSelector)


    const dispatch = useDispatch()
    const handleBuyProduct = (product) => {
        dispatch(buyProduct(product))

    }
    return (
        <div>
            <h1>PRODUCTS</h1>
            <div><Search /></div>
            <div className="products">
                {allProducts.map((product) => (
                    <div className="product" key={product.id}>
                        <h2>{product.name}</h2>
                        <img src={product.img} alt={product.name}></img>
                        <h3>{product.cost}</h3>
                        <button onClick={() => handleBuyProduct(product)}>Buy</button>
                    </div>
                    // <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item" key={product.id} >
                    //     <div className="card" style={{ width: "18rem" }}>
                    //         <img src={product.img} className="card-img-top" alt={product.name} />
                    //         <div className="card-body">
                    //             <h2 className="card-title">{product.name}</h2>
                    //             <p className="card-text">
                    //                 {product.cost}
                    //             </p>
                    //             <button onClick={() => handleBuyProduct(product)}>Buy</button>
                    //         </div>
                    //     </div>
                    // </div>
                ))}
            </div>
        </div>
    )
};

export default Products;
