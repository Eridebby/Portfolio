import hero from '../Images/second.png';



const About = () => {
  return (
    <div>
      <section id="about" className="p-5">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <img
              src={hero}
              className="d-none d-sm-block w-50"
              style={{ width: '50%', height: '40%' }}
              alt=""
            />
            <div className="text-light text-center text-sm-start">
              <h1 className="big">About</h1>
             
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <ul className="about-info mt-4 px-md-0 px-2">
                <li className="d-flex">
                  <span>Name: Ogunmola Deborah</span> 
                </li>
               
                <li className="d-flex">
                  <span>Address: Haruna street Ogba Lagos Nigeria</span> 
                </li>
                <li className="d-flex">
                  <span>Zip code: 100218</span>
                </li>
                <li className="d-flex">
                  <span>Email: erioluwadeborah@gmail.com</span> 
                </li>
                <li className="d-flex">
                  <span>Phone: +234 814 063 6543</span> 
                </li>
              </ul>
              <div className="counter-wrap ftco-animate d-flex mt-md-3">
                <div className="text">
                  <p className="mb-4">10 Project complete</p>
                  <p>
                    <a href="#" className="btn btn-info py-2 px-2">
                      Download CV
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
export default About;
