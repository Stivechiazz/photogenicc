import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import image1 from "../components/images1/pexels-transtudios-3082792.jpg";
import image2 from "../components/images1/pexel2.jpg";
import image3 from "../components/images1/pexels-trungnguyenphotog-5086415.jpg";

function Appgallery() {
  var galleryData = [
    {
      id: "1",
      image: image1,
      title: "A Stylish and Elegant Wedding at Castle Durrow",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim reprehenderit ipsum incidunt? Nihil, cum temporibus.",
    },
    {
      id: "2",
      image: image2,
      title: "Dreamy Wedding at Lisnavagh House",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim reprehenderit ipsum incidunt? Nihil, cum temporibus.",
    },
    {
      id: "3",
      image: image3,
      title: "The best wedding moments of 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim reprehenderit ipsum incidunt? Nihil, cum temporibus.",
    },
  ];
  return (
    <section id="gallery" className="blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Gallery</h2>
          <div className="subtitle">latest events</div>
        </div>
        <Row>
          {galleryData.map((gallery) => {
            return (
              <Col sm={4} key={gallery.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={gallery.image}
                    className="img-fluid"
                    loading="lazy"
                  />
                  <Card.Body>
                    <Card.Title>{gallery.title}</Card.Title>
                    <Card.Text>{gallery.description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Appgallery;
