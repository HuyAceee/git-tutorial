import { createSelector } from "@reduxjs/toolkit";

export const allCartsSelector = (state) => state.carts;
export const allProductsSelector = (state) => state.Products;
export const searchInputSelector = (state) => state.search.input;
export const searchMaxSelector = (state) => state.search.max;
export const searchMinSelector = (state) => state.search.min;
export const searchChangeType = (state) => state.search.type;
export const myProductsSelector = (state) => state.myProducts;

export const searchInputProductsSelector = createSelector(allProductsSelector,
    searchInputSelector,
    searchMaxSelector,
    searchMinSelector,
    searchChangeType,
    (allProducts, input, max, min, type) => {
    return (
        allProducts.filter(product => {
            return product.name.includes(input) &&
            (max === '' ? true : product.cost <= Number(max)) &&
            product.cost >= Number(min) &&
            (type === 'All' ? true : product.type === type)
        })
    )
})