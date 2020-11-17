import React, { useState } from 'react';
import './App.css';
import Student from './models/Student';

interface MyCountInterface {
  count: number;
  updateCount: () => void;
}

export const MyCount = React.createContext<MyCountInterface>({count: 0, updateCount: ()=>{}});

const App = () => {
  const [count, setCount] = useState<number>(0);

  const updateCount = ()=>{
    setCount(count+1);
  }

  return (
     <div className="App">      
       <header className="App-header">        
       <MyCount.Provider value={{count: count, updateCount : updateCount}}>
           <Student />   
        </MyCount.Provider>         
      </header>      
     </div>
  );
}
export default App;
