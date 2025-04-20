import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/img.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hey there! I'm a passionate developer who found a deep love for
              programming through building real-world projects. 🚀
              <br />
              <br />
              I'm well-versed in
              <i>
                <b className="purple"> C++, JavaScript, and PostgreSQL</b>
              </i>
              , and I enjoy solving problems and building intuitive user
              experiences.
              <br />
              <br />
              My interests revolve around
              <i>
                <b className="purple"> Web Technologies</b>, developing
                meaningful <b className="purple">products</b>, and diving into
                areas like <b className="purple">DevSecOps</b> and cloud
                infrastructure.
              </i>
              <br />
              <br />
              I love working with
              <b className="purple"> Node.js</b> and modern JavaScript tools
              like
              <i>
                <b className="purple"> React.js</b> and <b className="purple">Next.js</b>
              </i>
              , always trying to deliver fast, secure, and scalable apps.
              <br />
              <br />
              I'm constantly learning and seeking out new challenges — whether
              it's deploying with Docker, exploring WebSockets, or contributing
              to open-source.
            </p>
          </Col>
          <Col md={4} className="myAvtar d-flex justify-content-center align-items-center">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid rounded-circle"
                alt="avatar"
                style={{ width: "200px", height: "200px", objectFit: "cover", border: "4px solid #6f42c1" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sharmaujjawal123"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sharma-ujjawal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/your_profile"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
