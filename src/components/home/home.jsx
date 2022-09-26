import React from 'react';
import './home.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../navbar/navbar'
import Sidebar from '../sidebar/sidebar'
import Maincontent from '../maincontent/maincontent'
import Stack from 'react-bootstrap/Stack';
import Logo from "../../assets/logo.png";
import {CreateNew} from '../CreateNew/CreateNew';

function home() {


  return (

      <Container fluid className='Page'>

          <Row md={12} className='Navigation'>
      
              <Col md={2} ><img className='Logo' src={Logo} alt="Logoimg" /></Col>
              <Navbar />

          </Row>

      <Row>
        <Col className='Side' md={2}><Sidebar /></Col>
        <Col md={10}><CreateNew/></Col>
      </Row>


      </Container>
  );
}

export default home;
