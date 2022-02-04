import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Cart from './Cart';
import MyProducts from './MyProducts';
import Products from './Products'



function App() {
  
  return (
    <div className="App">
      <div>
        <button><Link style= {{ textDecoration:'none', padding: '0px 10px', fontSize: 20}} to= 'cart'>Cart</Link></button>
        <button><Link style= {{ textDecoration:'none', fontSize: 20 }} to= 'products'>Products</Link></button>
        <button><Link style= {{ textDecoration:'none', fontSize: 20 }} to= 'myProducts'>My Products</Link></button>
      </div>
      <Routes>
        <Route path= 'products' element={<Products />}></Route>
        <Route path= 'cart' element={<Cart />}></Route>
        <Route path= 'myProducts' element={<MyProducts />}></Route>
      </Routes>
    </div>
  );
}

export default App;
