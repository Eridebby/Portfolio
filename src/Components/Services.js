import { FcIdea, FcGlobe, FcDeployment } from 'react-icons/fc';
import { FaCloudflare,FaDeezer} from "react-icons/fa"

let iconStyles = { color: 'rgb(245,182,56)', fontSize: "2em" };
const Services =()=>{
    return(
        <div>
     <section id="services" className="p-5">
        <div className="container">
          <div className="text-center text-light">
            <h1 className="big big-2">Services</h1>
          
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
          <div className="row p-3 g-3">
            
              <div className="col-md-4  col-sm-6  text-center ">
                <div className="card p-3 bg-info" style={{ height:"150px"}}>
                  <a href="#" className="" style={{textDecoration:"none"}}>
                   <FcGlobe style={iconStyles}/>
                    <div className="desc text-center text-dark">
                      <h6 className="mb-5 text-dark">Web Design</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4   col-sm-6 text-center   ">
                <div className="card p-3 bg-info" style={{height:"150px"}}>
                  <a href="#" className="services-1 text-dark" style={{textDecoration:"none"}}>
                   <FcDeployment style={iconStyles}/>
                    <div className=" text-center text-dark">
                      <h6 className="mb-5">Web Development</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4   col-sm-6 text-center   ">
                <div className="card p-3 bg-info" style={{height:"150px"}}>
                  <a href="#" className="services-1" style={{textDecoration:"none"}}>
                   <FcIdea style={iconStyles}/>
                    <div className="desc text-center">
                      <h6 className="mb-5  text-dark text-decoration-none">Ui/Ux design</h6>
                    </div>
                  </a>
                </div>
              </div>
  
          </div>
        </div>
      </section>
        </div>

    )
}
 export default Services;