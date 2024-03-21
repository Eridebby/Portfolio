import firstpic from "../Images/programming.png";
import github from "../Icons/githubicon.svg";
import linkedin from "../Icons/linkedin.svg";
import instagram from "../Icons/instagram.svg";
import facebook from "../Icons/facebook.svg";


const Home = () => {
  return (
    <div>
      <section className="  text-light text-center p-5">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div className="my-32 py-8">
              <div className="firstContent"
>             <h5>
                <em className="hello"> HELLO!</em>
              </h5>
              <h4 className=" ">
                Meet <span className="hello">Deborah</span>
              </h4>
              <h4 className= "job mb-4">A Front-End Developer</h4>
              <p className="homeText text px-5 py-3">
                Who specialize in designing and implementing web application
                interfaces, collaborating closely with design and backend teams
                for a seamless user experience.
              </p>
              </div> 
              <p>
                <a
                  href="https://www.linkedin.com/in/ogunmola-deborah-a55b45165/"
                  className=" py-2 px-2"
                >
                  <img src={linkedin} className="git" />
                </a>
                <a href="https://github.com/Eridebby" className=" py-2 px-2 ">
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
            <img
              src={firstpic}
              className="img w-30"
              // style={{ width: "40%", height: "30%" }}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
