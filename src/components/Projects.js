import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import hkp from "../assets/img/rezied_hkp.png"
import schiff from "../assets/img/schiff.jpg"
import oas from "../assets/img/oas.png"
import eshop from "../assets/img/eshop.png"
import hadoop from "../assets/img/hadoop.png"

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
      imgUrl: eshop,
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
      description: "Big-Data-Verarbeitung mit Apache Hadoop MapReduce, Hive und Spark sowie praktische Projektarbeit.",
      imgUrl: hadoop,
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
                <p>In meinem Studium habe ich verschiedene Projekte in unterschiedlichen Modulen gemacht.</p>
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
                        <p>Hier sind Projekte vom 1-4 Semester</p>

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
                      <p>Im 6 Semster hat man im Rahmen des Modulds Projekt ein großes Projekt mit einem Unternehmen. In unserem Fall war es das Unternehmen OAS, welches sich mit Wägetechnik beschäftigt. Unsere Aufgabe war es eine KI Analyse zu implementieren, die die Parkposition eines LKWs prüft.</p>
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
                      <p>Im 5 Semster erfolgte das Auslandssemester. Für mich ging es in die Steiermark an die FH Joaneeum. Dort habe ich insgesamt 7 Kurse belegt.
                          Hierbei habe ich verschiedene Themengebiete kennenlernen dürfen von Webentwicklung zu Servern.
                          Eingeschrieben war ich ind dem Software Design and Cloud Computing Studiengang.
                      </p>
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