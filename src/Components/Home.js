
import aboutpic from '../Images/first.png'




const Home = () => {
  return (
    <div >
  

      {/* home */}
      <section id="home" className="  text-light text-center p-5">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div className="my-32 py-8">
              <h5 className="text-info"> HELLO!!!</h5>
              <h1 className="mb-4 mt-3">
                I'm <span className="text-info">Ogunmola Deborah</span>
              </h1>
              <h2 className="mb-4">A Full-Stack Developer</h2>
              <p>
                <a
                  href="#"
                  className="btn btn-info py-2 px-3 "
                  style={{ borderRadius: '30px' }}>
                  Hire me
                </a>{' '}
                <a
                  href="#"
                  className="btn btn-white btn-outline-light py-2 px-3"
                  style={{ borderRadius: '30px' }}>
                  My works
                </a>
              </p>
            </div>
            <img
              src={aboutpic}
              className="w-50"
              style={{ width: '50%', height: '40%' }}
              alt=""
            />
          </div>
        </div>
      </section>
   
    </div>
  );
};

export default Home;
