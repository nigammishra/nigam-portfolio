import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import artificial from "../../Assets/Projects/artificial intelligence.png";
import librarymanagementsystem from "../../Assets/Projects/librarymanagementsystem.png";
import tourismmanagementsystem from "../../Assets/Projects/tourismmanagementsystem.png";
import easyshop from "../../Assets/Projects/EasyShop.png";
import freshcart from "../../Assets/Projects/Freshcart.png";
import employeemanagementsystem from "../../Assets/Projects/employeemanagementsystem.png";
import contactbook from "../../Assets/Projects/contactbook.png";
import portfolio2 from "../../Assets/Projects/portfolio2.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={tourismmanagementsystem}
              isBlog={false}
              title="Tourism Management System"
              description="This  website  embodies  the  essence  of  the  Odisha  Tourism  System,  featuring  fullresponsiveness.  It  comprehensively  showcases  all  the  tourist  destinations  acrossOdisha.  Technologies utilized in its development include React, Bootstrap, JavaScript, andReact-Bootstrap."
              ghLink="https://github.com/nigammishra/tourism-management-system.git"
              demoLink="https://nigammishra.github.io/tourism-management-system/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio2}
              isBlog={false}
              title="Animated Portfolio"
              description="This is a fully responsive HTML static portfolio template."
              ghLink="https://github.com/nigammishra/animatedportfolio.git"
              demoLink="https://nigammishra.github.io/animatedportfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={freshcart}
              isBlog={false}
              title="Fresh Cart"
              description="This self-initiated project is a fully responsive website, similar to any online grocery store. The primary language used is React.js, with additional technologies including HTML, CSS, Bootstrap, React-Bootstrap, and JavaScript."
              ghLink="https://github.com/nigammishra/grocery-react.git"
              demoLink="https://nigammishra.github.io/Grocery-react/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={artificial}
              isBlog={false}
              title="About Artificial Intelligence"
              description="This static project, comprising approximately 120 web pages, provides comprehensive information about artificial intelligence, including its benefits, drawbacks, and merits. The project is built using HTML, CSS, and JavaScript."
              ghLink="https://github.com/nigammishra/Artificial-intelligence.git"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={librarymanagementsystem}
              isBlog={false}
              title="Library Management System"
              description="It's  a  full-stack  project  where  admins  manage  CRUD  operations.  Data  is  storedlocally, with login and registration data sourced from session storage.Technologies utilized in its development include React, Bootstrap, JavaScript, andReact-Bootstrap."
              ghLink="https://github.com/frex-arup/library-mgmt-react.git"
              demoLink="https://frex-arup.github.io/library-mgmt-react/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easyshop}
              isBlog={false}
              title="Easy Shop"
              description="It is a fully responsive front-end design for a shopping website featuring a wide variety of items, similar to Flipkart and Amazon."
              ghLink="https://github.com/nigammishra/EasyShop.git"
              demoLink="https://nigammishra.github.io/EasyShop/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employeemanagementsystem}
              isBlog={false}
              title="Employee Management System"
              description="This React project uses a JSON server as the backend and database, enabling CRUD operations via the server's base URL. The frontend is built with React.js and Bootstrap, supporting API integration for GET and POST methods to retrieve and submit data."
              ghLink="https://github.com/nigammishra/employee-management-systemm.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contactbook}
              isBlog={false}
              title="Contact Book"
              description="In this React.js project, all contacts are saved in a JSON server, and CRUD operations—including create, read, update, and delete—are performed on the data."
              ghLink="https://github.com/frex-arup/contact-book-react.git"
              demoLink="https://frex-arup.github.io/contact-book-react/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
