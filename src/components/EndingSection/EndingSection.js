import React from 'react'
import { CenterIcons, Container, LeftFlower, RightFlower, Content, Footer } from '../styles/EndingStyle'

const EndingSection = () => {
  return (
    <Container >
      <Content>
        <LeftFlower>
          <img src={process.env.PUBLIC_URL + 'images/ending-section/left-side-flower.png'} alt="left side flower" />
        </LeftFlower>
        <CenterIcons>
          <img src={process.env.PUBLIC_URL + 'images/ending-section/eco.png'} alt="eco" />
          <img src={process.env.PUBLIC_URL + 'images/ending-section/rating.png'} alt="rating" />
          <img src={process.env.PUBLIC_URL + 'images/ending-section/carbon.png'} alt="carbon" />
        </CenterIcons>
        <RightFlower>
          <img src={process.env.PUBLIC_URL + 'images/ending-section/right-side-flower.png'} alt="right side flower" />
        </RightFlower>
      </Content>
      <Footer>
        <p className="copyright">Copyright 2022 Smart Gardening</p>
        <img src={process.env.PUBLIC_URL + 'images/ending-section/social-media-icons.png'} alt="icons" className="icons" />
      </Footer>
    </Container>
  )
}

export default EndingSection