import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Typography() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <div className="space-50"></div>
          <div id="images">
            <h2 className="title">Skill</h2>
            <Row>
              <Col sm="2">
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/html5.svg").default}
                ></img>
              </Col>
              <Col sm="2">
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/css3.svg").default}
                ></img>
              </Col>
              <Col sm="2">
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/javascript.svg").default}
                ></img>
              </Col>
              <Col sm="2">
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/nodejs.svg").default}
                ></img>
              </Col>
              <Col sm="2">
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/react.svg").default}
                ></img>
              </Col>
              <Col sm="2">
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/bootstrap-stack.png").default}
                  style={{ height: 161 }}
                ></img>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Typography;
