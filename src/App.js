import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';



function App() {

  //Normal API call 
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json)
  //     })
  //     .catch(e => {
  //       console.log(e)
  //     });

  // }, []);


  //Axio GET API call 
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/todos/')
  //     .then(function (response) {
  //       // handle success
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .finally(function () {
  //       // always executed
  //     });
  // }, [
  // ]);


  //Axio post API call
  useEffect(() => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1,
    })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);


  return (
    <div className="App">
      <h1>HI</h1>
    </div>
  );
}

export default App;
