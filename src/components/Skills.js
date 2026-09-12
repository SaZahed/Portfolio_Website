import meter1 from "../assets/img/meter1.svg";
import java from "../assets/img/Java.png"
import webDev from "../assets/img/webDev.avif";
import python from "../assets/img/pyTransparent.jpg"
import cSharp from "../assets/img/c#.png"

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
                        <p>Hier muss ich mal schauen was ich noch hinzufüge. Im Studium lernt man vieles kennen, aber einzuschätzen wie gut man die Skills beherrscht kann schwer sein.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={webDev} alt="Image" /> {/* davor war hier meter1 */}
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={cSharp} alt="Image" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />{/*vorher meter 3*/ }
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
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
