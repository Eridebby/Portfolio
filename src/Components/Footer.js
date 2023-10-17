import { FaFacebookSquare,FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
 const iconStyles ={
   fontSize:"1.5em",
   color:"white"

 }


 
const Footer = () => {
  return (
    <div>
      <section id="footer" className=" p-5 align-self-center">
        <div className="container text-light" style-={{height:'100vh'}}>
          <div className="row  ">
            <div className="col-md-3 ">
              <div className="ftco-footer-widget mb-4">
                <h5 className="ftco-heading-2 mb-5">About</h5>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ul className=" d-flex  ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="ftco-animate px-2">
                    <a href="#">
                      <span className="icon-twitter"><FaSquareXTwitter style={iconStyles}/></span>
                    </a>
                  </li>
                  <li className="ftco-animate px-2">
                    <a href="#">
                      <span className="icon-facebook"> <FaFacebookSquare style={iconStyles} /></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="https://www.instagram.com/?hl=en">
                      <span className="icon-instagram"><FaInstagram style={iconStyles} /></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md col-sm-6">
              <div className=" mb-4 ml-md-4  mx-sm-2">
                <h5 className="ftco-heading-2 mb-3">Links</h5>
                <ul className="list-unstyled">
                  <li className="py-2">
                    <a href="#" className="text-light" style={{textDecoration:'none'}}>
                      <span className="text-light"></span>Home
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="text-light" style={{textDecoration:'none'}}>
                      <span className="icon-long-arrow-right mr-2"></span>About
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="text-light" style={{textDecoration:'none'}}>
                      <span className="icon-long-arrow-right mr-2"></span>Services
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="text-light" style={{textDecoration:'none'}}>
                      <span className="icon-long-arrow-right mr-2"></span>Projects
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#"  className="text-light"style={{textDecoration:"none"}} >
                      <span className="icon-long-arrow-right mr-2"></span>Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md ">
              <div className="ftco-footer-widget mb-4">
                <h5 className="ftco-heading-2 mb-3">Services</h5>
                <ul className="list-unstyled">
                  <li className="py-2">
                    <a href="#"  className="text-light"style={{textDecoration:"none"}}>
                      <span className="icon-long-arrow-right mr-2"></span>Web Design
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#"  className="text-light"style={{textDecoration:"none"}}>
                      <span className="icon-long-arrow-right mr-2"></span>Web
                      Development
                    </a>
                  </li >
                  <li className="py-2">
                    <a href="#"  className="text-light"style={{textDecoration:"none"}}>
                      <span className="icon-long-arrow-right mr-2"></span>Business
                      Strategy
                    </a>
                  </li>
             
                  <li className="py-2">
                    <a href="#"  className="text-light"style={{textDecoration:"none"}}>
                      <span className="icon-long-arrow-right mr-2"></span>Graphic
                      Design
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              
              <div className="ftco-footer-widget mb-4">
                <h5 className="ftco-heading-2 mb-3">Have Questions?</h5>
                <ul className="list-unstyled">
                <li style={{listStyleType:"none"}}>
                      <span className="icon icon-map-marker"></span>
                      <span className="text">
                      Haruna street Ogba Lagos Nigeria
                      </span>
                    </li>
                    <li style={{listStyleType:"none"}}>
                      <a href="#"  className="text-light"style={{textDecoration:"none"}}>
                        <span className="icon icon-phone"></span>
                        <span className="text">+234 814 063 6543</span>
                      </a>
                    </li>
                    <li style={{listStyleType:"none"}}>
                      <a href="#" className="text-light" style={{textDecoration:'none'}}>
                        <span className="icon icon-envelope"> </span>
                        <span className="text">erioluwadeborah@gmail.com</span>
                      </a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md-12 text-center my-5">
              <p>
                Copyright &copy;2023
                 All rights reserved 
              
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
 export default Footer;