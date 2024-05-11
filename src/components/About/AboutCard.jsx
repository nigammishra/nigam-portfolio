import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <ImPointRight />Hi Everyone, I am <span className="purple">Nigam Mishra</span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            <ImPointRight /> I am currently intern at Occac tower in Way India .
            <br />
            <ImPointRight />I have completed BCA (Bachelor in computer application ) At 
            Uttkal University(BBSR).
            <br />
            <br />
            <ImPointRight /> Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Riding Motorbikes
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nigam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
