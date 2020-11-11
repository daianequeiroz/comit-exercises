import React from 'react';
import Student, { IStudent } from './Student';
import './App.css';


function App() {

  const students: IStudent[] = [
    {
      name: 'sandra',
      age: 27,
      city: 'winnipeg'
    },
    {
      name: 'Mark',
      age: 24,
      city: "ahu"
    }];
  return (
    <div className="App">
      <header className="App-header">
        {students.map(student =>
          <Student age={student.age} name={student.name} city={student.city} />)}
      </header>
    </div>
  );
}

export default App;
