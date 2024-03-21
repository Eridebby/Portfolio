import javascript from '../Videos/javascript.gif';
import react from '../Videos/react.gif';
import css from '../Videos/css3.svg';
import html from '../Videos/html.svg';
import firebase from '../Videos/firebase.svg'



const Skills = () => {
    return (
      <section id="skills" className="skill p-3">
        <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
          <div className="container">
              <div className="text-center ftco-animate">
                <h1 className="skills big-2 text-light">Skills</h1>

              <div className='small px-5'>

              <p  className="script p-5 m-2">
              <img src={html} style= {{width: '80px' }}/>
             <h5>HTML</h5>
              </p>

              <p  className="script p-5 m-2">
              <img src={css} style= {{width: '80px' }}/>
             <h5>CSS</h5>
              </p>
              <p className="script p-5 m-2">
              <img src={javascript} style= {{width: '80px' }}
              />
             <h5>Javascript</h5>
              </p>

              <p  className="script p-5 m-2">
              <img src={react} style= {{width: '80px' }} />
             <h5>React</h5>
              </p>

              <p  className="script p-5 m-2">
              <img src={firebase} style= {{width: '80px' }} />
             <h5>Firebase</h5>
              </p>

              </div>
           
            </div>
            </div>
          </div>
      </section>
    );
  };
  export default Skills;
  