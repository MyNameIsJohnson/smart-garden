import React from 'react'
import { Container, Process, Tree, Button, Card } from '../styles/ProcessStyle';

const ProcessSection = () => {
  return (
    <Container>
      <Tree>
        <img src={process.env.PUBLIC_URL + 'images/process-section/tree-process.png'} alt="tree process" className="tree" />
      </Tree>
      <Process >
        <Card>
          <h1>EACH HOME HAS UNIQUE MICROCLIMATES</h1>
          <p>
            The Plant Story is the antidote to the fast-paced society we live in, a gateway to the hustle and bustle of rapid urbanisation; a respite for the tired soul to slow down in nature as you nourish your well-being.
          </p> 
          <p>
            It is a place for self-discovery, as well as a place where you can connect with family, friends, co-workers through active and harmonious nature-based workshops as you nurture your love for Mother Earth.
          </p>
          <Button>
            Get Started
          </Button>            
        </Card>
      </Process>
    </Container>
  )
}

export default ProcessSection