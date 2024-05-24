import React from 'react'
import { Col, Container, Row } from 'reactstrap'

function Features6() {
  return (
    <>
        <div className='section features-6'>
            <Container>
                <Row className='align-items-center'>
                    <Col lg="6">
                        <div className='info info-horizontal info-hover-primary'>
                            <div className='icon icon-shape icon-shape-info'>
                                <i className='ni ni-html5 text-info'></i>
                            </div>
                            <div className='description pl-4'>
                                <h5 className='title'>For Developers</h5>
                                <p>
                                    The time is now for it to be okay to be great. People in this world
                                    this world shun people for being great. For the
                                    color. For standing out. But the time is now
                                </p>

                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    
    </>
  )
}

export default Features6