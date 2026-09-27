import meter1 from "../assets/img/meter1.svg";
import java from "../assets/img/Java.png"
import webDev from "../assets/img/webDev.avif";
import py from "../assets/img/py.jpg"

import bss from "../assets/img/bss.webp"

import cSharp from "../assets/img/c#.png"

import sql from "../assets/img/sql.avif"

import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Kentnisse und Technologien:<br></br> Im Studium habe ich bereits mit verschiedenen Programmiersprachen und Technologien gearbeitet. Dabei konnte ich praktische Erfahrungen sammeln und mir Grundlagen in den folgenden Bereichen aneignen.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={webDev} alt="Image" /> 
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={cSharp} alt="Image" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={py} alt="Image" />
                                <h5>Python</h5> {/*bild aendern*/}
                            </div>
                            <div className="item">
                                <img src={py} alt="Image" />
                                <h5>Python: Datascience Grundlagen</h5> 
                                <p>Pandas • NumPy • Datenanalyse</p>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={bss} alt="Image" />
                                <h5>Linux</h5>
                            </div>
                             <div className="item">
                                <img src="https://tse1.mm.bing.net/th/id/OIP.evJyqicYI7-mg6t9MJwOpgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Image" />
                                <h5>Unity</h5>
                                <p>Schiffssimulator mit C# und Unity</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
