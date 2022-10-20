
import React, {useState, useEffect} from "react";
import Data from "./../Data/data.json"
//import ProjectDetails from "../projectDetails";

import "./index.css"



const Fulldetails=(props)=>{
    const {match}=props
    
    const {params}=match
    const {id}=params
    

    const [data, setData] = useState([]);
    const[projectsdata,setProjectData]=useState([])
    
  console.log( data);
  
  useEffect(() => {
    const data = Data.find((data) => String(data.id) === id);   
    if (data) {
      setData(data);
      setProjectData(data.Projects)
    }
  }, [id]);

    return(
        <div className="main-container">
        <div className="card-container">
        <div className="image-container">
        <img src={data.image_url} alt={data.Name} className="personal-data-image"/>
        </div>
        <div>
        <div className="details-card-container">
        <h1>{`Name:${data.Name}`}</h1>
        
        <h1> {`Role:${data.Role}`}</h1>
        <h1>{`Experience:${data.Experience}`}</h1>
        <h1>{`Employment:${data.Employment}`}</h1>
        <h1>{`Offshore:${data.Offshore}`}</h1>
        <h1>{`TechStack:${data.Tech_Stack}`}</h1>
        {
          projectsdata.map(eachItems=>{
            return (
              <h1>{`PROJECTS:${eachItems.Name}`}</h1>
            )
          })
        }
        
          
       
        
       <div>
    
       
       
       </div>
        
        </div>
        
        
        </div>
        </div>
      
        </div>
    )
}

export default Fulldetails
