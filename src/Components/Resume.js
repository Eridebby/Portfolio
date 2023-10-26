const Resume = () => {
    return (
      <div>
        <section id="resume" className="p-5">
          <div className="container mx-auto">
            <div className="text-center text-light mt-5">
              <h1 className="big big-2">Resume</h1>
             
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
            <div className="row ">
              <div className="col-md-6">
                <div
                  className=" card p-3 mb-4 text-light"
                  style={{ backgroundColor: "rgb(26,26,26)" }}
                >
                  <span className="date text-info">2022-2023</span>
                  <h2 className="text-light">Web Development</h2>
                  <span className="position">Codar institute</span>
                  <p className="mt-4 ">
                    Collaborated with a team of back-end developers, UI/UX, and
                    project manager to build the company website. Contributed to
                    group meetings and provide status update on development tasks
                    for progress report. 
                  </p>
                </div>
                <div
                  className=" card  mb-4 p-3"
                  style={{ backgroundColor: "rgb(26,26,26)" }}
                >
                  <span className="text-info">2013-2018</span>
                  <h2 className="text-light">Community Manager </h2>
                  <span className="text-light">19fifty</span>
                  <p className="mt-4 text-light">
                    A small river named Duden flows by their place and supplies it
                    with the necessary regelialia. It is a paradisematic country,
                    in which roasted parts of sentences fly into your mouth.
                  </p>
                </div>
                
              </div>
  
              <div className="col-md-6">
                <div
                  className="card mb-4 p-3 text-light"
                  style={{ backgroundColor: "rgb(26,26,26)" }}
                >
                  <span className="text-info">2013-2018</span>
                  <h2 className="text-light">Community Manager </h2>
                  <span className="text-light">19fifty</span>
                  <p className="mt-4">
                    Develop a content marketing plan and editorial calendar Create
                    engaging and shareable content for a blog, Facebook page,
                    monthly newsletters and/or promotional videos Provide
                    community feedback to the management and stakeholders.
                  </p>
                </div>
           
                <div
                  className="card mb-4 p-3 text-light"
                  style={{ backgroundColor: "rgb(26,26,26)" }}
                >
                  <span className="text-info">2023</span>
                  <h2 className="text-light">UI/UX Designer trainee</h2>
                  <span className="position">Udemy</span>
                  <p className="mt-4">
                    A small river named Duden flows by their place and supplies it
                    with the necessary regelialia. It is a paradisematic country,
                    in which roasted parts of sentences fly into your mouth.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-md-6 text-center ftco-animate">
                <p>
                  <a
                    href="#"
                    className="btn btn-info py-3 px-5"
                    style={{ borderRadius: "30px" }}
                  >
                    Download CV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  export default Resume;
  