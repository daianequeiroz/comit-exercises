import React, { useState } from 'react';
import './App.css';
import ProductListing from "./models/ProductListing";
interface ICart {
  total: number;
  updateCart: Function;
}
export const Cart = React.createContext<ICart>({ total: 0, updateCart: () => { } });
const App = () => {
  const [sum, setSum] = useState<number>(0);
  return (
    <div className="App">
      <header className="App-header">
        <div>Cart: {new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(sum)}</div>
        <Cart.Provider value={{ total: sum, updateCart: setSum }}>
          <ProductListing />
        </Cart.Provider>
      </header>
    </div>
  );
}
export default App;