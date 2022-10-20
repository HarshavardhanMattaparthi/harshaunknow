import React from 'react'
import Data from "./../Data/data.json"
import EmployeeDetails from '../EmployeeDetails'

const Home=()=>{
    
return (
    <div>
    {Data.map(eachCard => (
        <EmployeeDetails cardDetails={eachCard} key={eachCard.id} />
      ))}
    </div>
)
}

export default Home