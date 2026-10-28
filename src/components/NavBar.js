
import {useState, useEffect} from "react";
import {Navbar, Container,Nav} from "react-bootstrap" //nutzen grundgerüst von bootstrap
import{FaGithub} from "react-icons/fa"

//bilder importe, assets können dann über src einfach eingebunden werden
import logo from"../assets/img/logo.svg";
import pengweng from"../assets/img/pengweng.jpg";
import panda from"../assets/img/panda.png"; //selbst ausgewählt

import navIcon1 from"../assets/img/nav-icon1.svg";
import navIcon2 from"../assets/img/nav-icon2.svg";
import navIcon3 from"../assets/img/nav-icon3.svg";

//fertiges navbar einbinden
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home"); //speichert Wert der später verändert wird
    const [scrolled,setScrolled] = useState(false);

    useEffect(() =>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll); //celan up, damit eventlistener nicht weiter läuft

    },[]) //Führe diesen Effect beim Mounten der Komponente aus und nicht bei jedem normalen Re-Render erneut.

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className = {scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                <img src= {panda} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon" ></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className = {activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick ={() => onUpdateActiveLink("home")} >Home</Nav.Link>
                        <Nav.Link href="#skills" className = {activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick ={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className = {activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick ={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
                    </Nav>
                    <span className = "navbar-text">
                        <div className = "social-icon">
                            <a
                             href="https://github.com/SaZahed"
                             target="_blank"
                             rel="noopener noreferrer"
                             aria-label="GitHub-Profil öffnen"
                             
                            >
                                <FaGithub></FaGithub>
                            </a>
                         
                        </div>
                        <button className="vvd" onClick={() => {window.location.href = "mailto:szahed@stud.hs-bremen.de";}}> <span> Let's connect </span> </button>

                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}