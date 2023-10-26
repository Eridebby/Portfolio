import project1 from '../Images/project-1.png';
import project2 from '../Images/project-2.png';
import project3 from '../Images/project-3.png';
import project4 from '../Images/project-4.png';
import project5 from '../Images/project-5.png';
import project6 from '../Images/project-6.png';

const project = [project1, project2, project3, project4, project5, project6];

const Projects = () => {
  return (
    <section id='projects'>
      <div className="container p-5">
        <div className="text-center text-light">
          <h2>Projects</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
        <div className="row g-3">
          {project.map((projects) => {
            return (
              <div className="col-md-4">
                ''
                <div
                  className="card"
                  style={{ border: 'none', outline: 'none' }}>
                  <img src={projects} alt="" style={{ height: '300px' }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section> 
  );
};
export default Projects;
