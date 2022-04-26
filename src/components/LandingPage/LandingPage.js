import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

// import styles from '../../App.css'
const LandingPage = () => {

  const Container = styled.div`
    background-color: #f0f5dd;
    height: 100vh;
    width: 100vw;
    display: flex;
  `;

  const Navbar = styled.div`
    flex: 1;

    ul {
      text-decoration: none;
      list-style: none;
      display: flex;
      float: right;
      gap: 20px;
      margin: 50px 40px 0 0;
      color: #466C3D;
      font-size: 15px
    }
  `;

  const Logo = styled.div`
    flex: 1;
    img {
      width: 200px;
      margin: 50px 0 0 40px;
    }    
  `;
  
  const Card = styled.div`
    background: #FFFFFF;
    opacity: 0.7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 70%; 
    height: 40%;
    color: #8EAD27;
    position: absolute;
    top 200px;
    left: 55px;
    font-family: 'Arima Madurai';
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    line-height: 114%;    
  `;

  
  return (
    <Container >
      <Logo>
        <img src={process.env.PUBLIC_URL + 'images/Landing-section/Group22.png'} className="App-logo" alt="logo" />
      </Logo>
      <Navbar>
        <ul>
          <li className="nav-list">Our Story</li>
          <li className="nav-list">Plants</li>
          <li className="nav-list">Services</li>
          <li className="nav-list">Contact</li>
        </ul>      
      </Navbar>
      <Card>
        <p className='cardContent'>
          We help you find the perfect plant that will thrive in the climate of your environment, with a micro-climate analysis.
        </p>
        <div className="btn">
          <button className='appointment-btn'>SCHEDULE APPOINTMENT
          <FontAwesomeIcon icon={faAngleRight}  />
          </button>        
          <button className='learn-btn'>learn more</button>
        </div>
      </Card>

      <img className='tree-branch' src={process.env.PUBLIC_URL + 'images/Landing-section/tree-branch.png'} alt="tree-branch" />

    </Container>
  )
}

export default LandingPage