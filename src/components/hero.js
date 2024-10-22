import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function Apphero() {
  const heroData = [
    {
      id: "1",
      image:require ("../components/images1/lvly.jpg"),
      title: "See the world through a new lens.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim reprehenderit ipsum incidunt? Nihil, cum temporibus.",
    },
       
    {
      id: "2",
      image: require("../components/images1/lovely2.jpg"),
      title: "Compose, don't just click.",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim reprehenderit ipsum incidunt? Nihil, cum temporibus.",

    },
    {
      id: "3",
      image: require("../../src/components/images1/lovely3.jpg"),
      title: "Every shot tells a story.",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim reprehenderit ipsum incidunt? Nihil, cum temporibus.",

    },
    {
      id: "4",
      image: require("../components/images1/lovely4.jpg"),
      title:"Frame the unseen, feel the light, and let your lens tell the story.",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim reprehenderit ipsum incidunt? Nihil, cum temporibus.",

    },
    {
      id: "5",
      image: require("../components/images1/lovely6.jpg"),
      title: "Light is everything.",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim reprehenderit ipsum incidunt? Nihil, cum temporibus.",

    },
  ];
  return (
    <section id="hero" className="hero-block">
      <Carousel>
        {heroData.map(hero => {
          return (
            <Carousel.Item key={hero.id}>
              <Image src={hero.image} fluid={hero.title} />
              <Carousel.Caption>
                <h3>{hero.title}</h3>
                <p>{hero.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      </section>
    
  );
}

export default Apphero;
