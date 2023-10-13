import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PostLayouts from './layouts/PostLayouts';
import UserListLayouts from './layouts/UserListLayouts';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function App() {

  const [selectedUserId, setSelectedUserId] = useState('');

  const handleUserSelected = (id) => {
    console.log(id);
  };

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

    <div style={{}}>

      <Container>
        <Row>
          <Col>
            <UserListLayouts handleUserSelected={handleUserSelected} />
          </Col>
          <Col>
            <PostLayouts />
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default App;
