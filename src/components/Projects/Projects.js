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
          Meus  <strong className="purple">trabalhos recentes</strong>
        </h1>
        <p style={{ color: "white" }}>
         alguns dos meus projetos 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Portfolio em html e css"
              description="acabei produzindo um portfolio em html e css responsivo "
              ghLink="https://github.com/Athosalvesz/portfolio"
               demoLink="https://atzsite.vercel.app"   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
