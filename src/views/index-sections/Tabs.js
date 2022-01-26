import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="8">
              <p className="category">PORTFOLIO</p>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        
                        PERSONAL INFORMATION
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        
                        EDUCATION
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        
                        TRAINING
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("4");
                        }}
                      >
                        
                        CONTACT
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <p>NickName : Nig</p>
                      <p>Date Of Birth : 13 October 1999</p>
                      <p>Age : 21 Years Old</p>
                      <p>Nationality : Thai</p>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>2011 - 2017</p>
                      <p>Inthuputhpittaya Shool</p>
                      <p>2018 - Present</p>
                      <p>Major Computer engineering Pibulsongkram Rajabhat University</p>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <p>SolidWork</p>
                      <p>IOS Developer</p>
                      <p>Infographic Presentation Design</p>
                      <p>IC3 </p>
                    </TabPane>
                    <TabPane tabId="iconPills4">
                      <p>Address</p>
                      <p>73 Moo 8 Sri PhiromPhrom Phiram Phitsanulok 65180</p>
                      <p>Phone</p>
                      <p>095-6286802</p>
                      <p>E-mail</p>
                      <p>tiwut18102560@gmail.com</p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
