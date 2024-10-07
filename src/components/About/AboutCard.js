import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Ola eu sou <span className="purple">Athos Rodrigues Alves </span>
           sou de  <span className="purple"> Sao Paulo</span>
            <br />
            Tenho habilidade para aprender novos conceitos e técnicas rapidamente, boa capacidade de comunicação e trabalho em equipe
            <br />
            Atualmente cursando o primeiro ano de Engenharia de Software na FIAP,
            <br />
            
          </p>
        

        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
