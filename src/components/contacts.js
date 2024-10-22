import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


function Appcontacts() {
  return (
    <section id='contact' className='contact-block'>
        <Container fluid>
            <div className="title-holder">
                <h2>contact us</h2>
                <div className="subtitle">get connected with us</div> 
            </div>
            <Form>
      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="formGridFullName">
        <Form.Label>FullName</Form.Label>
        <Form.Control placeholder="john doe" />
      </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Control as="textarea" placeholder="Leave a comment here" />

        <Button variant="primary" type="submit">
            Submit
      </Button>
    </Row>
    </Form>
    </Container>
    <Container fluid>
    <div className="contact-info">
            <ul>
                <li>
                    <i className='fas fa-phone'></i>
                    +254786985096
                </li>
                <li>
                    <i className='fas fa-envelope'></i>
                    photogenic@gmail.com
                </li>
                <li>
                <i className='fas fa-map-marker-alt'></i>
                    kikuyu,Nairobi,Kenya
                </li>
            </ul>
        </div>
    </Container>

    </section>
  )
}

export default Appcontacts