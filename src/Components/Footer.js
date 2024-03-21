// import { FaFacebookSquare,FaInstagram } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
//  const iconStyles ={
//    fontSize:"1.5em",
//    color:"white"

//  }

import github from '../Icons/githubicon.svg'


 
const Footer = () => {
  return (
    <div>
      <section id="footer" className=" p-3
      align-self-center">
        <div className="container text-light" style-={{height:'100vh'}}>
          <div className="my-0">
            <div className="col-md-12 text-center ">
              <p className='porfolio'>
                Portfolio source code:
                <a href="https://github.com/Eridebby" className=" px-2 ">
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
                <p> &copy;2023
                 </p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
 export default Footer;