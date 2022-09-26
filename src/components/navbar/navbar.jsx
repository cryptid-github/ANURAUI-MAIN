import React from 'react';
import './navbar.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Dropdown from 'react-bootstrap/Dropdown';
function navbar(){
return(

<>
    <Col><a href='/' ><button className='Nav1 NavFont'>NEWS</button></a></Col>
    <Col><a href='/' ><button className='Nav2 NavFont'>HEROES</button></a></Col>
    <Col><a href='/' ><button className='Nav3 NavFont'>LANDS</button></a></Col>
    <Col><a href='/' ><button className='Nav4 NavFont'>QUESTING</button></a></Col>
    <Col><a href='/' ><button className='Nav5 NavFont'>GOLDEN COUNCIL</button></a></Col>
    <Col>  
     <Dropdown>
      <Dropdown.Toggle className='Nav6 NavFont' >
      DECENTRALORE
      </Dropdown.Toggle>

      <Dropdown.Menu className='Drop'>
        <Dropdown.Item href="/" className='Nav6 NavFont'>Action</Dropdown.Item>
        <Dropdown.Item href="/" className='Nav6 NavFont'>Another action</Dropdown.Item>
        <Dropdown.Item href="/" className='Nav6 NavFont'>Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Col>
</> 



)}
export default navbar;