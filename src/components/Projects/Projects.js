import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AI Code Reviewer"
              description="An AI-powered code review tool built using the MERN stack. The application takes code input and reviews it using the Gemini API to suggest improvements. It focuses on code quality, efficiency, and potential bugs. The system is fully containerized using Docker for seamless deployment. No database is used in the current version."
              ghLink="https://github.com/Sharmaujjawal123/AI-Code-reviewer"
              demoLink="https://ai-code-reviewer-3abv.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Real-time Chat Application"
              description="A full-stack real-time chat application built using React, Node.js, MongoDB, and WebSocket. Users can create accounts, join rooms, and exchange messages instantly. Features include message history, online user indicators, and modern UI using React and Tailwind CSS."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sorting Visualizer"
              description="A simple and educational sorting algorithm visualizer. It demonstrates how selection sort, insertion sort, and bubble sort work, by visually animating each step of the algorithm. This project helps in understanding the internal working of basic sorting techniques."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
