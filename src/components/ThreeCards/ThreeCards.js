import SimpleCard from 'components/Cards/SimpleCard'
import React from 'react'
import { Badge, Button, Card, CardBody, Col, Container, Row } from 'reactstrap'

function ThreeCards() {
  return (
    <section className="section section-lg pt-lg-0 mt--100">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <SimpleCard 
                        icon="spaceship" 
                        color="primary" 
                        title="Frontend" 
                        description="Check my Frontend projects here"
                        badges={["React", "Vue", "Angular", "JavaScript"]} 
                        />
                    </Col>
                    <Col lg="4">
                    <SimpleCard 
                        icon="ui-04" 
                        color="success" 
                        title="Backend" 
                        description="Check my Backend projects here"
                        badges={["Nodejs", "Django", "Flask"]} 
                        />
                    </Col>
                    <Col lg="4">
                    <SimpleCard 
                        icon="palette" 
                        color="warning" 
                        title="Design" 
                        description="Look at my Designers here"
                        badges={["Photoshop", "Sketch", "Figma", "XD"]} 
                        />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
  )
}

export default ThreeCards