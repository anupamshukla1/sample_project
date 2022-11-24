import React from "react";
import { Container, Image, Col, Row, Carousel } from "react-bootstrap";
import AboutusBanner from "../images/banner.jpg";
import mapabout from "../images/map-about.png";
import "./Aboutus.css";
import inte from "../images/Integrity.webp";
import quote from "../images/left-quote.png";
import founder from '../images/founder.webp'

const Aboutus = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <Image
              src={AboutusBanner}
              style={{ height: "500px", width: "100%" }}
              alt="Banner"
            ></Image>
          </Col>
        </Row>

        <Row>
          <Col>
            <h4>OVERSEAS EDUCATION CONSULTANCY</h4>
            <h2>Where Technology, Excellence & Understanding come together!</h2>

            <Container fluid>
              <Row>
                <Col xs={6}>
                  <p>
                    Education sector is evolving, especially in the global
                    scenario. And hence we at Search Education exists to deliver
                    to these changing needs of the globe in this sector.
                  </p>

                  <p>
                    Established seven years ago, we believe in making every
                    student's dream to 'Study Abroad' a reality. As a student
                    you have complete 'Right to the Right Education through the
                    Right source of information'. Our dedicated team ensures
                    that you have a plethora of options matching your needs.
                    These options will help you decide the best out of all
                    shared options matching your need. The basic choices revolve
                    around education program, budget and career opportunity
                    linked to it. Our core experience in this industry has
                    allowed us to have best educationist. They are always on the
                    run to offer customized solutions for every aspirant.
                  </p>

                  <p>
                    Search Education engages with students through a one on one
                    approach both offline and online - 365 days a year during
                    the entire 'Student Recruitment Cycle'. This cycle begins
                    with Profile building, identifying options based on past
                    academic scores and other relevant documents, helping grab
                    the offers from the institutions/universities planned, and
                    prepare for visa interview until the student reaches the
                    final destination.
                  </p>
                </Col>

                <Col xs={6}>
                  <Image src={mapabout} />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>

        <Row>
          <Col style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <div className="bck">
              <Row fluid>
                <Row>
                  <Row>
                    <div className="lyer">
                      <Carousel className="Carousel" style={{ top: "70px" }}>
                        <Carousel.Item>
                          <Carousel.Caption>
                            <h3>OUR VISION…</h3>
                            <p>
                              By 2025 Search Education is committed to seeing
                              100,000 international students acquire quality
                              education and become successful global
                              professionals contributing meaningfully to the
                              society.
                            </p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <Carousel.Caption>
                            <h3>MISSION…</h3>
                            <p>
                              We believe there are no shortcuts to a world class
                              education. Our mission is to facilitate the
                              international academic journey by assisting
                              students throughout the challenging transition
                              into their post study aspirations and become the
                              best versions of themselves.
                            </p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                    </div>
                  </Row>
                </Row>
              </Row>
            </div>
          </Col>
        </Row>
        <Row style={{ paddingRight: "0px", paddingLeft: "0px" }}>
          <Image
            src={inte}
            style={{ paddingRight: "0px", paddingLeft: "0px" }}
          ></Image>
        </Row>

        <Row>
          <Col>
            <h3>A UNIQUE APPROACH</h3>
            <h2>Making the Dreams of Foreign Education a Reality</h2>
          </Col>
          <Row>
            <p>
              At Search Education, we understand what is required to ensure
              recruitment of committed and passionate students who aspire for
              extraordinary achievements. We constantly strive to surpass
              industry standards by using avant - guard technology and rigorous
              selection mechanisms to match students with our partners. Using a
              finer lens, we look closely at a student’s academic
              qualifications, financial background, character and career goals
              to ensure the right fit. With an exciting diversity in their
              educational backgrounds most of our team members hold global
              degrees, making them more empathetic towards the challenges faced
              by international education aspirants. To help our students steer
              through their struggles of studying abroad, the dynamic and adept
              team of Search Education remains accessible to them even during
              their international academic tenure.
            </p>

            <p>
              At Search Education we ardently believe that an association is for
              a and in our endeavor to stand true to our beliefs, we support our
              students for their post study aspirations to ensure a successful
              career and help our partners achieve their business goals.
            </p>
          </Row>
        </Row>

        <section className="Founder">
          <Container style={{ marginRight: "0px", marginLeft: "0px" }}>
            <Row
              style={{
                dispaly: "flex",
                // marginRight: "-15px",
                // marginLeft: "-15px",
              }}
            >
              {/* <div className="Col-md-8"> */}

              <div className="Founder-details" >
                <div className="Founder-title">
                  <h1>FOUNDER</h1>
                </div>
                <div className="Founder-body Col">
                  <Image
                    src={quote}
                    style={{
                      width: "10%",
                      verticalAlign: "middle",
                      borderStyle: "none",
                    }}
                  />

                  <p>
                    ” Ensuring all aspiring students have access to quality
                    education from universities and colleges across the globe,
                    we spectacularly pioneered AI based algorithms and
                    automation in different processes, which has granted us a
                    technology driven edge over others. ”
                  </p>

                  <p>
                    ” I am proud of where we have reached and I am sure that the
                    path ahead will bring abundant prosperity and success for
                    all our stakeholders!”
                  </p>
                  <h5> Bhupendra kumar </h5>
                </div>
              </div>
              <div className="col-md-4 founder-img">
              <Image src={founder}style={{maxWidth:'100%'}} className="img-fluid"/>

              </div>
              {/* </div> */}
            </Row>
          </Container>
        </section>
      </Container>
    </>
  );
};

export default Aboutus;
