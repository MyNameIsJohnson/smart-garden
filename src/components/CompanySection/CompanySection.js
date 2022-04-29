import React from 'react';
import { Container, Button } from '../styles/CompanyStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const CompanySection = () => {
  return (
    <Container>
      <h1>A California Company</h1>
      <div className='images'>
        <img className='leftImage' src={process.env.PUBLIC_URL + 'images/company-section/SF-image.png'} alt='SF' />
        <img className='rightImage' src={process.env.PUBLIC_URL + 'images/company-section/bay-garden.png'} alt='SF' />
      </div>
      <p>
        The Plant Story is the antidote to the fast-paced society we live in, a gateway to the hustle and bustle of rapid urbanisation; a respite for the tired soul to slow down in nature as you nourish your well-being.
      </p>
      <Button className='appointment-btn'>SCHEDULE APPOINTMENT
        <FontAwesomeIcon className='carotIcon' icon={faAngleRight}  />
      </Button>  
    </Container>
  )
}

export default CompanySection