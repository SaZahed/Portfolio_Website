
import {useState, useEffect} from "react"; //hooks von react: daten speichern und veraendern
import {Navbar, Container,Nav} from "react-bootstrap" //nutzen grundgerüst von bootstrap
import{FaGithub} from "react-icons/fa"

//bilder importe, assets können dann über src einfach eingebunden werden
import character from "../assets/img/animeted_logo.avif"



//fertiges navbar einbinden: export wichtig damit wir es in App.js nutzen koennen
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home"); //speichert Wert der später verändert wird: am anfang immer in home section
    const [scrolled,setScrolled] = useState(false); //erst wenn user scrolled true

    useEffect(() =>{
        const onScroll = () =>{ //prueft wie viel pixel vertikal nach unten gescrolled wurde
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);//wenn ein scroll event passiert Methode ausfuehren
        return () => window.removeEventListener("scroll", onScroll); //celan up, damit eventlistener nicht weiter läuft

    },[]) //Dependency Array: Führe diesen Effect beim Mounten der Komponente aus und nicht bei jedem normalen Re-Render erneut.

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value); //je nach dem in welcher Section value auf home, skill oder project
    }
    //JSX
    return (
        <Navbar expand="lg" className = {scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                <img src= {character} alt="Logo"/>
                {/* img src= {panda} alt="Logo"/> */}

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> //Button, der auf kleinen Bildschirmen die Navbar auf- und zuklappt
                    <span className="navbar-toggler-icon" ></span>
                </Navbar.Toggle>
                {/*Bereich, der auf kleinen Bildschirmen ein-/ausgeblendet wird*/}
                <Navbar.Collapse id="basic-navbar-nav"> 
                    <Nav className="me-auto"> 
                        {/*className fuer styleing anpassen*/}
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