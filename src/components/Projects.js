import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import hkp from "../assets/img/rezied_hkp.png"
import schiff from "../assets/img/schiff.jpg"
import oas from "../assets/img/oas.png"
import eshop from "../assets/img/eshop.png"
import hadoop from "../assets/img/hadoop.png"
import bc from "../assets/img/bc.png"
import pqm from "../assets/img/pqm.png"

import projImg2 from "../assets/img/project-img2.png";
import sql from "../assets/img/sql_projekt.png"
import ticketshop from "../assets/img/ticketshop.png"
import apache from "../assets/img/apache.webp"

import projImg3 from "../assets/img/project-img3.png";
import pythonShop from "../assets/img/pytho_shop.png"
import mb from "../assets/img/medbox.png"
import sq from "../assets/img/software_quality.png"
import cloud from "../assets/img/cloud.png"

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
      description: "SQL Datenbank für ein Reisesytem",
      imgUrl: sql,
    },
    {
      title: "Python Projekte",
      description: "Einkaufsanwendung & Model für Filmadatennalyse",
      imgUrl: pythonShop,
    },
    {
      title: "Schiffssimulator",
      description: "Einen Schiffssimulator mithilfe von Unity in C# implementiert",
      imgUrl: schiff,
    },
    {
      title: "Ticketshop",
      description: "Angular Anwendung: Konzertticketshop",
      imgUrl: ticketshop,
    },
    {
      title: "KI Bildanalyse im industriellen Kontext",
      description: "Projekt mit dem Unternehmen OAS; KI für die Analyse der Parkposition eines LKW's",
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
      description: "Einrichtung und Konfiguration von Linux-Servern mit DNS, DHCP, Apache und E-Mail-Diensten.",
      imgUrl: apache,
    },
    {
      title: "Cloudtechonolgie",
      description: "Cloud Computing, NIST-Modell, Service-Modelle und praktische Übungen mit Cloud-Diensten.",
      imgUrl: cloud,
    },
    {
      title: "Softwarequality",
      description: "Grundlagen der Softwarequalität. 4 praktische Übungen zum Thema: Java, Code Smell, Code-Komplexität und Testing",
      // description: "Wichtige Konzepte erlent, um clean code zu schreiben: 4 praktische Übungen zum Thema: Java, Code Smell, Testing und Cyclomatic Complexity",
      imgUrl: sq,
    },
    {
      title: "Prozess & Qualitätsmanagement",
      description: "Wahlmodul: Einführung zum Thema Geschäftsprozesse",
      imgUrl: pqm,
    },
    {
      title: "Business Communication",
      description: "Wahlmodul: Unternehmerisches Denken, Teamentwicklung, nachhaltige Geschäftsmodelle und Scrum.",
      imgUrl: bc,
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
                      <p>Im 5 Semster absolvierte ich mein Auslandssemester an der FH Joaneeum in der Steiermark. Dort habe ich insgesamt 7 Kurse belegt.
                          Hierbei habe ich verschiedene Themengebiete kennenlernen dürfen: von Webentwicklung bis zu Servern.
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