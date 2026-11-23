import { useEffect, useState } from "react"; //animation
import { Container, Row, Col} from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons" //arrow icons aus libary nutzen
import headerIMG from "../assets/img/header-img.svg"

export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0); //first word as default
    const [isDeleting,setIsDeleting] = useState(false); 
    const toRotate = ["Entwicklerin", "Programmiererin", "Studentin"]; //words to rotate
    const [text, setText] = useState(""); // letter for letter
    const period = 2000; //time when each letter is printed --> transition
    const [delta, setDelta] = useState(300 - Math.random() * 100); //how fast each will be printed

    useEffect(() =>{
        //interval text update: Führe diese Funktion immer wieder nach diesem Zeitintervall aus.
        let ticker = setInterval(() =>{
        tick();
        },delta);

        return() => {clearInterval(ticker)}; //clear damit man nicht mehrere timer hat

    }, [text])

    const tick = () =>{
        //just 3 elements so we want to go back to first again
        /*toRotate ist 3
         * loopNum sollte nie größer als 3 werden, weil es gar nicht so viele elemente gibt
         * daher muss er zurück
         *  z.B man ist bei index 2 --> 2%3 = 2 element im array wird gezeigt
         * beim 3 durchlauf gibt es kein element mehr: 3 % 3 = 0 (also wird das erste wieder angezeigt)
        */
        let i = loopNum % toRotate.length; 
        let fullText = toRotate[i];
        //wenn man am loeschen ist dann bitte buchstaben loeschen, ansonsten hinzufuegen
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2) //loeschvorgang verschnellern
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ""){
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        }
    }
     
    return(
        <section className = "banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={8}>
                    <span className= "tagline">Wilkommen zu meinem Portfolio</span>
                    <h1>{"Hallo, ich bin "}<span className="wrap">{text}</span></h1>
                    <p> Ich studiere Informatik und bin neugierig auf die vielfältigen Möglichkeiten, die dieser Bereich bietet. Durch verschiedene Studienprojekte konnte ich bereits praktische Erfahrungen mit
                         Programmiersprachen und modernen Technologien sammeln.</p>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                    <img src={headerIMG} alt="Headder img" />
                    
                    </Col>
                </Row>
            </Container>

        </section>
    )
}