import React from 'react'
import ProductList from '../components/Product/ProductList'
import { fetchProducts } from '../actions/productActions'
const Home = () => {
    return (
        <ProductList/>
    )
}

export default Home
