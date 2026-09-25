import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import hkp from "../assets/img/rezied_hkp.png"
import schiff from "../assets/img/schiff.jpg"
import oas from "../assets/img/oas.png"

import projImg2 from "../assets/img/project-img2.png";
import sql from "../assets/img/sql_projekt.png"
import ticketshop from "../assets/img/ticketshop.png"

import projImg3 from "../assets/img/project-img3.png";
import pythonShop from "../assets/img/pytho_shop.png"
import mb from "../assets/img/medbox.png"

import colorSharp2 from "../assets/img/color-sharp2.png";
//import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Hello Kitty backing page",
      description: "HTML, CSS, Node,js Anwendung",
      imgUrl: hkp,
    },
    {
      title: "E-Shop",
      description: "Eine E-Shop Anwendung in Java",
      imgUrl: projImg1,
    },
    {
      title: "Reisesystem",
      description: "SQL Datenbank",
      imgUrl: sql,
    },
    {
      title: "Python Projekte",
      description: "Einkaufsanwendung & Model für Filmanalyse",
      imgUrl: pythonShop,
    },
    {
      title: "Schiffssimulator",
      description: "Schiffssimulator mithilfe von Unity implementiert",
      imgUrl: schiff,
    },
    {
      title: "Ticketshop",
      description: "Angular Anwendung: Konzertticketshop",
      imgUrl: ticketshop,
    },
    {
      title: "KI Bildanalyse im industriellen Kontext",
      description: "Projekt mit OAS; KI für Bildanalyse",
      imgUrl: oas,
    },
    {
      title: "Medication Reminder System",
      description: "Mithilfe von einem Arduino ein Erinnerungssystem für die Medikamenteneinnahme implementiert",
      imgUrl: mb,
    },
    {
      title: "Big Data",
      description: "In diesem Kurs haben wir mit Hadoop gearbeitet",
      imgUrl: projImg1,
    },
    {
      title: "Servertechnologie",
      description: "In diesem Kurs haben wir unseren eigenen Server mit Linux eingerichtet",
      imgUrl: projImg2,
    },
    {
      title: "Cloudtechonolgie",
      description: "3 kleine Projekte, um sich mit dem Thema cloudtech vertraut zu machen",
      imgUrl: projImg3,
    },
    {
      title: "Serverquality",
      description: "Wichtige Konzepte erlent, um clean code zu schreiben: 4 praktische Übungen zum Thema: Java, Code Smell, Testing und ?",
      imgUrl: projImg3,
    },
    {
      title: "Prozess und Qualitätsmanagement",
      description: "6 ECTs für ein Wahlmodul: Möglichkeit an der FH Kurse von anderen Bereichen zu belegen",
      imgUrl: projImg1,
    },
    {
      title: "Business Communication",
      description: "6 ECTs für ein Wahlmodul: Möglichkeit an der FH Kurse von anderen Bereichen zu belegen",
      imgUrl: projImg1,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.slice(0,6).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      <Row>
                      {
                          projects.slice(6,8).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>VVlt Sachen, die ich im Auslandssemester gelernt habe?</p>
                       <Row>
                      {
                          projects.slice(8,14).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
