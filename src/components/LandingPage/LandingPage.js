import React from 'react'
import { Container, Header, Card, Logo, Navbar, Button } from '../styles/LandingPageStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const LandingPage = () => {
  
  return (
    <Container >
      <Header >
          <Logo>
            <img src={process.env.PUBLIC_URL + 'images/Landing-section/Group22.png'} className="App-logo" alt="logo" />
          </Logo>
          <Navbar>
            <ul >
              <li className="nav-list">Our Story</li>
              <li className="nav-list">Plants</li>
              <li className="nav-list">Services</li>
              <li className="nav-list">Contact</li>
            </ul> 
          </Navbar>     
      </Header>
      <Card>
        <p className='cardContent'>
          We help you find the perfect plant that will thrive in the climate of your environment, with a micro-climate analysis.
        </p>
        <div className="btn">
          <Button className='appointment-btn'>SCHEDULE APPOINTMENT
            <FontAwesomeIcon className='carotIcon' icon={faAngleRight}  />
          </Button>        
          <Button className='learn-btn'>LEARN MORE</Button>
        </div>
      </Card>
      <div className='tree-branch'>
        <img src={process.env.PUBLIC_URL + 'images/Landing-section/tree-branch.png'} alt="tree-branch" />
      </div>
    </Container>
  )
}

export default LandingPage