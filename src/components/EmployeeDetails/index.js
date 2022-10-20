import {Link} from 'react-router-dom'

import "./index.css"

const EmployeeDetails = (props)=>{
   const {cardDetails}=props
   const {Name,image_url,Role,id}=cardDetails
return (
  
  
  <div>
  <Link to={`/fulldetails/${id}` } >
        <li className="card-item" >
        <img src={image_url} alt="images" className="image"/>
        <div className="disc">
        <h1 className="heading">{Name}</h1>
        <h1 className="discription">{Role}</h1>
        </div>
        </li>
        </Link>
        </div>
       

    
)
}

export default EmployeeDetails