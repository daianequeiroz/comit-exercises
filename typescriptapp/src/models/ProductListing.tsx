import React from "react";
import IProduct from "./../types/IProduct";
import Product from "./Product";
const ProductListing = () => {
    const products: IProduct[] =
        [
            { name: 'Burger', description: 'Best Burger in Town', unitPrice: 3.45 },
            { name: 'Sandwich', description: 'Best Sandwich', unitPrice: 5.45 },
            { name: 'Taco', description: 'Best Taco in Town', unitPrice: 4.55 },
        ];
    return <>{products.map(product => <><Product product={product} /><hr /></>)}</>;
}
export default ProductListing;