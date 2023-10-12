import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import PostLayouts from './layouts/PostLayouts';
import UserListLayouts from './layouts/UserListLayouts';



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





  //Axio post API call
  // useEffect(() => {
  //   axios.post('https://jsonplaceholder.typicode.com/posts', {
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1,
  //   })
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);


  return (
    <div className="App">
      <PostLayouts />
      <br />
      <UserListLayouts />
    </div>
  );
}

export default App;
