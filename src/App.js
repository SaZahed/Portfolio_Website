/**App ist eine React-Component.
 *  Sie importiert andere Components und gibt JSX zurück. 
 * Die Components NavBar, Banner, Skills und Projects werden innerhalb von App gerendert.
 *  App wird wiederum von index.js importiert und dort mit root.render() gestartet.
*/

import './App.css';
// in react wird die webseite in Komponenten zerlegt, die man sich dann stueckweise holt
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from "./components/Projects";
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap css bibliothek nutzen


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner /> 
      <Skills /> 
      <Projects/>
    </div>
  );
}

export default App; //damit App exportiert werden darf