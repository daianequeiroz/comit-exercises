import React, {useContext} from "react";
import { MyCount } from "./../App";

const ProductComponent = ()=> {

    const myContext = useContext(MyCount);

    return    <>
        <div>Count: {myContext.count}</div> 
        <button onClick={myContext.updateCount}>Click Me!</button>
        </>
    }

export default ProductComponent;

