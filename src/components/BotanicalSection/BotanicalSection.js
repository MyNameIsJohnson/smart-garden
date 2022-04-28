import React from 'react'
import { Container, Button } from '../styles/BotanicalStyle';

const BotanicalSection = () => {
  return (
    <Container>
      <h1>Botanical Transformations</h1>
      <div>
        <img src={process.env.PUBLIC_URL + 'images/botanical-section/video-image.png'} alt="still video" />
        <p>Layfeyatte CA, March 2020</p>
        <Button>Get Started</Button>
      </div>
      <img className='pinkFlower' src={process.env.PUBLIC_URL + 'images/botanical-section/pinkflower.png'} alt="" />
      <img className='purpleFlower' src={process.env.PUBLIC_URL + 'images/botanical-section/purpleflower.png'} alt="" />
    </Container>
  )
}

export default BotanicalSection