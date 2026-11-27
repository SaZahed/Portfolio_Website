import java from "../assets/img/Java.png"
import webDev from "../assets/img/webDev.avif";
import py from "../assets/img/py.jpg"
import ds from "../assets/img/ds.jpg"
import bss from "../assets/img/bss.webp"

import cSharp from "../assets/img/c#.png"

import postgres from "../assets/img/postgres.svg"

import yolo from "../assets/img/yolo.png"
import gtm from "../assets/img/gtm.jpg"
import roboflow from "../assets/img/roboflow.webp"
import gc from "../assets/img/gc.png"

import swagger from "../assets/img/swagger.png"
import dotnet from "../assets/img/Net.png"



import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import angular from "../assets/img/Angular_gradient_logo.png"

export const Skills = () => {
  //responsive design um je nach dem wie groß bildschirm ist elemente anzuzeigen
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
                  {/* wow und zoomIn sind aus Animation-Library*/}
                    <div className="skill-bx wow zoomIn"> 
                        <h2>Skills</h2>
                        <p>Kentnisse und Technologien:<br></br> Im Studium habe ich bereits mit verschiedenen Programmiersprachen und Technologien gearbeitet. <br/>Dabei konnte ich praktische Erfahrungen sammeln und mir Grundlagen in den folgenden Bereichen aneignen.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={webDev} alt="Image" /> 
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={gtm} alt="Image"/>
                                <h5>Teachable Machine</h5>       
                                <p>Training eines Bildklassifikationsmodell</p>                         
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
                                <img src={ds} alt="Image" />
                                <h5>Datascience Grundlagen</h5> 
                                <p>Pandas • NumPy • Datenanalyse</p>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={postgres} alt="Image" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={bss} alt="Image" />
                                <h5>Linux</h5>
                            </div>
                             <div className="item">
                                <img src="https://tse1.mm.bing.net/th/id/OIP.evJyqicYI7-mg6t9MJwOpgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Image" />
                                <h5>Unity</h5>
                                <p>Schiffssimulator Projekt mit C# und Unity</p>
                            </div>
                            <div className="item">
                                <img src={angular} alt="Image"/>
                                <h5>Angular</h5>                                
                            </div>
                            <div className="item">
                                <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*aFPoPQSaO4DFD7ezZC8WrQ.png"/>
                                <h5>Apache/Hadoop</h5>
                                <p>Erste Erfahrungen mit Hadoop, MapReduce und Hive</p>
                            </div>
                            <div className="item">
                                <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png?utm_source=de.wikipedia.org&utm_campaign=index&utm_content=thumbnail"/>
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={yolo} alt="Image"/>
                                <h5>YOLO: Object detection</h5>                                
                            </div>
                            <div className="item">
                                <img src={roboflow} alt="Image"/>
                                <h5>Roboflow</h5>       
                                <p>Bildannotation und Vorbereitung von Datensätzen</p>                         
                            </div>
                            <div className="item">
                                <img src={gc} alt="Image"/>
                                <h5>Google Collab</h5>       
                                <p>Python Notebook für kollaboratives arbeiten  </p>                         
                            </div>
                            <div className="item">
                                <img src={swagger} alt="Image"/>
                                <h5>Swagger</h5>       
                            </div>
                            <div className="item">
                                <img src={dotnet} alt="Image"/>
                                <h5>.NET10</h5>       
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
