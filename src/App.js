import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  //Normal API call 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => {
        console.log(json)
      })
      .catch(e => {
        console.log(e)
      });

  }, []);


  //Axio API call 
  useEffect(() => { }, [

  ]);


  return (
    <div className="App">
      <h1>HI</h1>
    </div>
  );
}

export default App;
