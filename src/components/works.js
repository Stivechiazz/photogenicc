import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const worksData = [
  {
    id: 1,
    link: "https://www.google.com",
    image: require("../components/images1/mj3.jpg"),
    title: "Lonely Path",
    subtitle: "Nature",
  },
  {
    id: 2,
    link: "https://www.google.com",
    image: require("../components/images1/mj2.jpg"),
    title: "Photographer Girl",
    subtitle: "Weddings",
  },
  {
    id: 3,
    link: "https://www.google.com",
    image: require("../components/images1/mj3.jpg"),
    title: "The Difference",
    subtitle: "Indoor",
  },
  {
    id: 4,
    link: "https://www.google.com",
    image: require("../components/images1/img5.jpg"),
    title: "Nature Patterns",
    subtitle: "Events",
  },
  {
    id: 5,
    link: "https://www.google.com",
    image: require("../components/images1/img6.jpg"),
    title: "The Difference",
    subtitle: "Photography",
  },
  {
    id: 6,
    link: "https://www.google.com",
    image: require("../components/images1/img7.jpg"),
    title: "Winter Sonata",
    subtitle: "Videography",
  },
  {
    id: 7,
    link: "https://www.google.com",
    image: require("../components/images1/img8.jpg"),
    title: "Lonely Path",
    subtitle: "Baby showers",
  },
  {
    id: 8,
    link: "https://www.google.com",
    image: require("../components/images1/img9.jpg"),
    title: "Appreciation",
    subtitle: "Graphics",
  },
  {
    id: 9,
    link: "https://www.google.com",
    image: require("../components/images1/img2.jpg"),
    title: "Happy Days",
    subtitle: "Branding",
  },
];

// let active = 2;
// let items = [];
// for (let number = 1; number <= 5; number++) {
//   items.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>
//   );
// }

function AppWorks() {
  return (
    <section id="works" className="works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Works</h2>
          <div className="subtitle">Our awesome works</div>
        </div>
        <Row className="portfoliolist">
          {worksData.map((works) => {
            return (
              <Col sm={6} md={4} key={works.id}>
                <div className="portfolio-wrapper">
                  <a href={works.link}>
                    <Image src={works.image} className="portfolio-image" />
                    <div className="label text-center">
                      <h3>{works.title}</h3>
                      <p>{works.subtitle}</p>
                    </div>
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
        {/* <Pagination>{items}</Pagination> */}
      </Container>
    </section>
  );
}


export default AppWorks;
