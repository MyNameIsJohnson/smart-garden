import React from 'react'
import { Container, TestimonialSection, Card, Icons, Companys, Cactus } from '../styles/TestimonialStyle'

const Testimonial = () => {

  return (
    <Container >
      <TestimonialSection>
        <h1>What our clients have to say..</h1>
        <Card className='card-1'> 
          <p className='quote'>"My garden has never looked better"</p>
          <p>- Jocelyn (Stockton, CA</p>
        </Card>
        <Card className='card-2'>
          <p className='quote'>“Totally worth the investment”</p>
          <p>-Oscar (Concord, CA)</p>
        </Card> 
        <Card className='card-3'>
          <p className='quote'>"They were the best, really helped my plants thrive in their environment"</p>
          <p>-Coc{'\u00F3'} (Beverlly Hills, CA</p>
        </Card>
        <Card className='card-2'>
          <p className='quote'>"People stop and take pictures!"</p>
          <p>-Rebeca (Los Gatos, CA)</p>      
        </Card>
        <Card className='card-5'>
          <p className='quote'>"Getting home is a joy!"</p>
          <p>-Agatha (Palo Alto, CA)</p>
        </Card>
      </TestimonialSection>
      <Companys>
        <Cactus>
          <img alt='icons' className='cactus' src={process.env.PUBLIC_URL + 'images/testimonials-section/cactus.png'}/>
        </Cactus>
        <Icons>
          <img alt='icons' className='qr-code' src={process.env.PUBLIC_URL + 'images/testimonials-section/QRcode.png'}/>
          <img alt='icons' className='apple icons' src={process.env.PUBLIC_URL + 'images/testimonials-section/apple-download.png'}/>
          <img alt='icons' className='google icons' src={process.env.PUBLIC_URL + 'images/testimonials-section/google-download.png'}/>
        </Icons>
      </Companys>
    </Container>
  )
}

export default Testimonial