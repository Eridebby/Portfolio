import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <div className="site">
        <div className="container">
          <Navbar/>
          <Home />
          <Services />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
