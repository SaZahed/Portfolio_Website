import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import hkp from "../assets/img/rezied_hkp.png"
import schiff from "../assets/img/schiff.jpg"
import eshop from "../assets/img/eshop.png"
import hadoop from "../assets/img/hadoop.png"
import bc from "../assets/img/bc.png"
import pqm from "../assets/img/pqm.png"

import lkws from "../assets/img/lkws.png"

import sql from "../assets/img/sql_projekt.png"
import ticketshop from "../assets/img/ticketshop.png"
import apache from "../assets/img/apache.webp"

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
      description: "HTML, CSS, Javascript, Node.js Anwendung",
      imgUrl: hkp,
    },
    {
      title: "E-Shop",
      description: "Implementierung einer E-Shop Anwendung in Java",
      imgUrl: eshop,
    },
    {
      title: "Datenbanken Projekt",
      description: "SQL-Datenbank für ein Reisesystem",
      imgUrl: sql,
    },
    {
      title: "Python Projekte",
      description: "Einkaufsanwendung und Modell zur Filmdatenanalyse",
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
      title: "KI Bildanalyse",
      description: "Projekt mit dem Unternehmen OAS; KI-gestützte Analyse der Parkposition eines Lkw",
      imgUrl: lkws,
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
      description: "Einrichtung und Konfiguration von Linux-Servern mit DNS, Apache und E-Mail-Diensten.",
      imgUrl: apache,
    },
    {
      title: "Cloudtechnologie",
      description: "Cloud Computing, NIST-Modell, Service-Modelle und praktische Übungen mit Cloud-Diensten.",
      imgUrl: cloud,
    },
    {
      title: "Softwarequality",
      description: "Softwarequalität, Code Smells, Code-Komplexität und Softwaretesting anhand von vier praktischen Übungen.",
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
                <p>Während meines Studiums habe ich an verschiedenen Projekten gearbeitet und Einblicke in unterschiedliche Bereiche der Informatik gewonnen.</p>
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
                        <p>Projekte vom 1-4 Semester</p>

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
                      <p>Im 6. Semester entwickelten wir als Studentengruppe im Auftrag des Unternehmens OAS, das auf Wägetechnik spezialisiert ist, eine KI-gestützte Lösung zur Analyse der Parkposition von Lkw.</p>
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
                      <p>Im 5 Semster absolvierte ich mein Auslandssemester an der FH Joaneeum in der Steiermark. Im Studiengang Software Design and Cloud Computing belegte ich sieben Kurse und beschäftigte mich mit verschiedenen Themen; von Webentwicklung bis hin zu Servern.</p>
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