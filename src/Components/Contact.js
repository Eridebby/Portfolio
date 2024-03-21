import sendmsg from "../Icons/send.png";
import github from "../Icons/githubicon.svg";
import linkedin from "../Icons/linkedin.svg";
import instagram from "../Icons/instagram.svg";
import facebook from "../Icons/facebook.svg";
import love from "../Icons/love.gif";
import { FaMailBulk } from "react-icons/fa";
import { FaAccusoft, FaSafari, FaDribbble } from "react-icons/fa6";
const iconStyles = {
  fontSize: "2.3em",
  color: "white",
};

const Contact = () => {
  return (
    <div>
      <section className="ftco-section contact-section ftco-no-pb" id="contact">
        <div className="container ">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center text-light ftco-animate">
              <h1 className="contact big-2">Contact me</h1>
            </div>
          </div>

          <div className="row contact-info text-light mb-5">
            <div className="col-md-6 col-lg-3 d-flex  align-items-center justify-content-center ftco-animate">
              <div className="align-self-center box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center mb-3">
                  <span className="icon-phone2">
                    <FaSafari style={iconStyles} />
                  </span>
                </div>
                <h3 className="mb-4">Contact</h3>
                <p>
                  <a
                    href="tel://1234567920"
                    className="text-light"
                    style={{ textDecoration: "none" }}
                  >
                    + 234 8140636543
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex   align-items-center justify-content-center ftco-animate">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center mb-3">
                  <span className="icon-paper-plane">
                    <FaMailBulk style={iconStyles} />
                  </span>
                </div>
                <h3 className="mb-4">Email Address</h3>
                <p>
                  <a
                    href="mailto:erioluwadeborah@gmail.com"
                    className="text-light"
                    style={{ textDecoration: "none" }}
                  >
                    info@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex  align-items-center justify-content-center ftco-animate">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center mb-3">
                  <span className="icon-globe">
                    <FaDribbble style={iconStyles} />
                  </span>
                </div>
                <h3 className="mb-4">Website</h3>
                <p>
                  <a
                    href="#"
                    className="text-light"
                    style={{ textDecoration: "none" }}
                  >
                    Herrydev.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex  align-items-center justify-content-center ftco-animate">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center mb-3">
                  <span className="icon-globe">
                    <FaAccusoft style={iconStyles} />
                  </span>
                </div>
                <h3 className="mb-4">Address</h3>
                <p>Lagos Nigeria</p>
              </div>
            </div>
          </div>

          <div>
            <div className="">
              <div
                className="formContent bg-gray  p-4"
              >
                <form className="form my-3">
                  <div className="flex justify-content-between py-3 mb-2">
                    <input
                      type="text"
                      className="form-control  rounded-bottom-0"
                      style={{ width: "250px" }}
                      aria-describedby="emailHelp"
                      placeholder="name"
                    />

                    <input
                      type="email"
                      className="form-control input rounded-bottom-0"
                      style={{ width: "250px" }}
                      placeholder="email"
                    />
                  </div>

                  <div className="mb-3 ">
                    <textarea
                      className="textarea form-control  rounded-top-0"
                      placeholder="message"
                      // style={{ width: "250px" }}
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="d-grid gap-2 col-6 mx-auto my-5">
                    <button className="button" type="button">
                      SEND
                      <img className="px-2 " src={sendmsg} />
                    </button>
                  </div>
                </form>
                <div className="social">
                  <p className=" text-light" style={{ marginLeft: '1.5rem'}}>
                    
                    Built with
                    <span>
                      <img src={love} />
                    </span> by <span style={{color:'rgb(240, 57, 240)'}}>code<em>It</em></span>
                  </p>
                  <p className=" d-flex">
                    <a
                      href="https://www.linkedin.com/in/ogunmola-deborah-a55b45165/"
                      className=" py-2 px-2"
                    >
                      <img src={linkedin} className="git" />
                    </a>
                    <a
                      href="https://github.com/Eridebby"
                      className=" py-2 px-2 "
                    >
                      <img
                        src={github}
                        className="git"
                        style={{
                          backgroundColor: "white",
                          width: "43px",
                          height: "43px",
                        }}
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/erioluwadebby/"
                      className="py-2 px-2"
                    >
                      <img src={instagram} className="git" />
                    </a>
                    <a
                      href="https://www.facebook.com/erioluwaogunmola?mibextid=LQQJ4d"
                      className="py-2 px-2"
                    >
                      <img src={facebook} className="git" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
