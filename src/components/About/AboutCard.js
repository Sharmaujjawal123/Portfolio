import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone! I'm <span className="purple">Ujjawal Sharma</span> from{" "}
            <span className="purple">Aurangabad, Bihar, India</span>.
            <br />
            <br />
            I'm currently pursuing a <b className="purple">B.Tech</b> degree and am passionate about
            <b className="purple"> full-stack development</b>, modern web technologies,
            and building impactful software products.
            <br />
            <br />
            I enjoy learning new things and challenging myself through different tech domains like{" "}
            <b className="purple">DevSecOps, Web3, AI</b>, and more.
            <br />
            <br />
            When I’m not coding, you’ll probably find me indulging in one of the following:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket 🏏
            </li>
          
            <li className="about-activity">
              <ImPointRight /> Exploring New Places 🌍
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)", fontStyle: "italic" }}>
            "Strive to build things that make a difference!"
          </p> */}
          <footer className="blockquote-footer">Ujjawal Sharma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
