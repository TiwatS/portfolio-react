import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/1.jpg").default,
    altText: "IOS Developer",
    caption: "IOS Developer",
  },
  {
    src: require("assets/img/3.jpg").default,
    altText: "IOS Developer",
    caption: "IOS Developer",
  },
  {
    src: require("assets/img/4.jpg").default,
    altText: "IOS Developer",
    caption: "IOS Developer",
  },
  {
    src: require("assets/img/2.jpg").default,
    altText: "IOS Developer",
    caption: "IOS Developer",
  },
  {
    src: require("assets/img/11.jpg").default,
    altText: "SolidWork",
    caption: "SolidWork",
  },
  {
    src: require("assets/img/14.jpg").default,
    altText: "SolidWork",
    caption: "SolidWork",
  },
  {
    src: require("assets/img/13.jpg").default,
    altText: "SolidWork",
    caption: "SolidWork",
  },
  {
    src: require("assets/img/113.jpg").default,
    altText: "Infographic Presentation Design",
    caption: "Infographic Presentation Design",
  },
  {
    src: require("assets/img/112.jpg").default,
    altText: "Infographic Presentation Design",
    caption: "Infographic Presentation Design",
  },
  {
    src: require("assets/img/111.jpg").default,
    altText: "Infographic Presentation Design",
    caption: "Infographic Presentation Design",
  },
];


function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section" id="carousel">
        <Container>
          <div className="title">
            <h4>TRAINING</h4>
          </div>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
