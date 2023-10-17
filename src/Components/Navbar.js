import "../App.css"


const Navbar = () => {
  return (
    <div className="header " style={{backgroundColor:'rgb(0,0,0)'}}>
      <div className="container ">
        <nav className="navbar navbar-dark navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">
              <span className="text-info">Herry</span>Dev
            </a>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation" >
              <span className="navbar-toggler-icon text-white"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white " href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#resume">
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white " href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white " href="#skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#projects">
                    Projects
                  </a>
                </li>
      
                <li className="nav-item">
                  <a className="nav-link text-white " href="#contact">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
