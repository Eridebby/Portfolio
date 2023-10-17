
import {FaMailBulk} from "react-icons/fa"
import { FaAccusoft,FaSafari,FaDribbble } from "react-icons/fa6"
const iconStyles ={
  fontSize:"2.3em",
  color:"white"

}

const Contact = () => {
  return (
    <div>
      <section className="ftco-section contact-section ftco-no-pb" id="contact">
        <div className="container p-5">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center text-light ftco-animate">
              <h1 className="big big-2">Contact</h1>
              <h2 className="mb-4">Contact Me</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>

          <div className="row d-flex contact-info text-light mb-5">
           
            <div className="col-md-6 col-lg-3 d-flex  align-items-center justify-content-center ftco-animate">
              <div className="align-self-center box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center mb-3">
                  <span className="icon-phone2"><FaSafari style={iconStyles}/></span>
                </div>
                <h3 className="mb-4">Contact Number</h3>
                <p>
                  <a
                    href="tel://1234567920"
                    className="text-light"
                    style={{ textDecoration: 'none' }}>
                    + 234 8140636543
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex   align-items-center justify-content-center ftco-animate">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center mb-3">
                  <span className="icon-paper-plane"><FaMailBulk style={iconStyles}/></span>
                </div>
                <h3 className="mb-4">Email Address</h3>
                <p>
                  <a
                    href="mailto:erioluwadeborah@gmail.com"
                    className="text-light"
                    style={{ textDecoration: 'none' }}>
                    info@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex  align-items-center justify-content-center ftco-animate">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center mb-3">
                  <span className="icon-globe"><FaDribbble style={iconStyles}/></span>
                </div>
                <h3 className="mb-4">Website</h3>
                <p>
                  <a
                    href="#"
                    className="text-light"
                    style={{ textDecoration: 'none' }}>
                    Herrydev.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex  align-items-center justify-content-center ftco-animate">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center mb-3">
                  <span className="icon-globe"><FaAccusoft style={iconStyles}/></span>
                </div>
                <h3 className="mb-4">Address</h3>
                <p>Haruna street Ogba Lagos Nigeria</p>
              </div>
            </div>
          </div>

          <div >
            <div className="">
              <div className="bg-gray  p-4 mx-auto" style={{ width: '80%',backgroundColor:"rgb(248,249,250)" }}>
                <form className='my-3'>
                  <div className="mb-2">
                    
                    <input
                      type="text"
                      className="form-control"
                    
                      aria-describedby="emailHelp"
                      placeholder='Full-Name'
                    />
                  </div>
                  <div className="mb-3">
                   
                    <input
                      type="password"
                      className="form-control"
                
                      placeholder='Email Address'
                    />
                  </div>
                  <div className="mb-3">
                    
                    <input
                      type="text"
                      className="form-control"
                    
                      placeholder='Subject'
                    />
                  </div>
                  <div className="mb-3">
                    
                    <textarea
                      className="form-control"
                      placeholder='Message'
                      rows="4"
                     
                      ></textarea>
                  </div>
                  <div className="d-grid gap-2 col-6 mx-auto my-5">
                    <button
                      className="btn btn-info"
                      style={{ borderRadius: '30px' }}
                      type="button">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
