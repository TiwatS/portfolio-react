import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebaseConfig from "firebace/firebaseConfig";
import { Redirect } from 'react-router-dom'
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
} from "reactstrap";

// core components

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    try {

      firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
      setCurrentUser(true);

    } catch (error) {
      alert(error);
    }
  }

  if (currentUser) {
    return <Redirect to="/index" />
  }
  return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundImage:
            "url(" + require("assets/img/bg11.jpg").default + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "655px",
        }}
      >
        <Container>
          <Row >
            <Card className="card-signup" data-background-color="blue">
              <Form onSubmit={handleSubmit} >
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    Sign Up
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"></div>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                </CardBody>
                <CardFooter className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </CardFooter>
              </Form>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SignUp;
