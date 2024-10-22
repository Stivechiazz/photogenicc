import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import prof from '../components/images1/mj prof.jpg'


function Appabout() {
  return (
    <section id='about' className='about-block'>
        <Container fluid>
            <div className="title-holder">
                <h2>About Us</h2>
                <div className="subtitle">get to know about us</div>
            </div>
      <Row>
        <Col sm={6}>
        <Image src={prof} fluid/>
        </Col>
        <Col sm={6}>
       <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste laboriosam nesciunt quis eos tempore cum corporis aliquam?
         Repellendus aliquid veniam amet laboriosam ea quas dolore sequi iusto. Debitis laudantium atque veniam, porro libero tempora ipsum ratione!
          Architecto, rerum sit. Porro dolores, quibusdam facere, laudantium quasi consequuntur saepe eius distinctio aperiam non velit sunt impedit 
          autem harum commodi debitis labore, quisquam atque quo tempora.
         Ullam sit ratione, accusamus culpa minus quaerat.</p>
         <br/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed facilis illo labore magni itaque? Aliquam quaerat possimus 
          facilis libero odio nostrum repellat enim est optio vitae, animi praesentium ipsum sunt impedit laboriosam iure vel illum temporibus adipisci iusto quas.
           Alias ipsa voluptate ipsam quos quaerat, recusandae possimus magnam odit eius reiciendis sed error asperiores. Facere excepturi rerum aspernatur quasi.</p>
        </Col>
      </Row>
    </Container>

    </section>
  )
}

export default Appabout