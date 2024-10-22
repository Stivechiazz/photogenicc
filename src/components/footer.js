import React from "react";
import { Container } from "react-bootstrap";

function Appfooter() {
  return (
    <section id="footer" className="footer-block">
      <Container fluid>
        <div className="copyright">
          &copy;{new Date().getFullYear()}All Rights Reserved.Photogenicstudio
        </div>
        <div className="socials">
          <ul>
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
            <a href="https://www.linkedin.com" target="_blank">
             <i className="fab fa-linkedin-in"></i>
            </a>
              
            </li>
          </ul>
        </div>
        <div className="designer">
          <p>
            Design & Development :
            <a
              href="https://stivechiazz-portfolio-pro-main.vercel.app/"
              target="_blank"
            >
                Stive chiazz
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Appfooter;
