import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <div className="site">
        <div className="container">
          <Navbar/>
          <Home />
          <About />

          <Resume />
         
          <Services />
         

          <Skills />

          <Projects />

          <Contact />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
