import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

function Appclients() {
  var clientsData = [
    {
      id: 1,
      name: "Stive chiazz",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.",

      designation: "Developer",
    },
    {
      id: 2,
      name: "Seraphim Kariuki",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, magni fugiat eveniet minus perspiciatis! Nostrum laborum maxime consequuntur repellat nam magni, quae incidunt distinctio enim itaque eligendi laboriosam, quod, ad!",
      designation: "Musician",
    },
    {
      id: 3,
      name: "Victor MoLuku",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis optio porro omnis alias eaque corporis error est ut, reprehenderit quae asperiores illum quo voluptates debitis non. Repellat fugit, asperiores?",
      designation: "Actor",
    },
  ];

  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client Testimonials</h2>
          <div className="subtitle">what clients says about us</div>
        </div>
        <Carousel controls={false}>
          {clientsData.map((clients) => {
            return (
              <Carousel.Item>
                <blockquote>
                  <p>{clients.description}</p>
                  <cite>
                    <span className="name">{clients.name}</span>
                    <span className="designation">{clients.designation}</span>
                  </cite>
                </blockquote>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
}
export default Appclients;
