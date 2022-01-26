// import React from "react";

// // reactstrap components
// import {
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Form,
//   Input,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
//   Container,
//   Col,
// } from "reactstrap";

// // core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
// import TransparentFooter from "components/Footers/TransparentFooter.js";

// function LoginPage() {

//   return (
//     <>
//       <div className="page-header clear-filter" filter-color="blue">
//         <div
//           className="page-header-image"
//           style={{
//             backgroundImage:
//               "url(" + require("assets/img/login.jpg").default + ")",
//           }}
//         ></div>
//         <div className="content">
//           <Container>
//             <Col className="ml-auto mr-auto" md="4">
//               <Card className="card-login card-plain">
//                 <Form action="" className="form" method="">

//                   <CardBody>
//                     <InputGroup

//                     >
//                       <InputGroupAddon addonType="prepend">
//                         <InputGroupText>
//                           <i className="now-ui-icons users_circle-08"></i>
//                         </InputGroupText>
//                       </InputGroupAddon>
//                       <Input
//                         placeholder="First Name..."
//                         type="text"


//                       ></Input>
//                     </InputGroup>
//                     <InputGroup

//                     >
//                       <InputGroupAddon addonType="prepend">
//                         <InputGroupText>
//                           <i className="now-ui-icons text_caps-small"></i>
//                         </InputGroupText>
//                       </InputGroupAddon>
//                       <Input
//                         placeholder="Last Name..."
//                         type="text"

//                       ></Input>
//                     </InputGroup>
//                   </CardBody>
//                   <CardFooter className="text-center">
//                     <Button
//                       block
//                       className="btn-round"
//                       color="info"
//                       href="#pablo"
//                       onClick={(e) => e.preventDefault()}
//                       size="lg"
//                     >
//                       Get Started
//                     </Button>
//                     <div className="pull-left">
//                       <h6>
//                         <a
//                           className="link"
//                           href="#pablo"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           Create Account
//                         </a>
//                       </h6>
//                     </div>
//                     <div className="pull-right">
//                       <h6>
//                         <a
//                           className="link"
//                           href="#pablo"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           Need Help?
//                         </a>
//                       </h6>
//                     </div>
//                   </CardFooter>
//                 </Form>
//               </Card>
//             </Col>
//           </Container>
//         </div>
//       </div>
//     </>
//   );
// }

// export default LoginPage;

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

const LoginPage = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        try {

            firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
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
                                        LOGIN
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
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </CardFooter>
                                Or <a href=""><Link to="/SignUp">register now!</Link></a>
                            </Form>
                        </Card>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default LoginPage;



