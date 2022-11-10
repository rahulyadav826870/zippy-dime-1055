
import React from 'react'
import {Route,Routes} from "react-router-dom"

import Navbar from './Navbar'
import Packages from '../pages/Packages'
import MainNavbar from './MainNavbar'
import Form from '../pages/Form'
import VisitSingapore from '../pages/VisitSingapore'
import Mountains from "../pages/Mountains"
import Beaches from "../pages/Beaches"
import Inspirations from "../pages/Inspirations"
import Home from './Home'
import Heritage from "../pages/Heritage"
export default function AllRoutes() {



  return (
    <div>

        {/* <MainNavbar /> */}
        <Routes >
             <Route path='/' element={<Home />} ></Route> 
             
         {/* <Route path="/Inspirations" element={<Inspirations />} /> */}
         <Route path="/navbar" element={<Navbar />} />
<Route path="/packages" element={<Packages />} />
<Route path='/Forum'  element={<Form />}  />
<Route path='/Visit Singapore'  element={<VisitSingapore />}  />
<Route path='/Beaches'  element={<Beaches />}  />
<Route path='/Mountains'  element={<Mountains />}  />
<Route path='/Heritage'  element={<Heritage />}  />
{/* <Route path='/packages/Visit Singapore'  element={<VisitSingapore />}  />
<Route path='/packages/Beaches'  element={<Beaches />}  />
<Route path='/packages/Mountains'  element={<Mountains />}  />
<Route path='/packages/Heritage'  element={<Heritage />}  /> */}

 </Routes> 
 {/* <Navbar /> */}
{/* <h1>This is home</h1> */}
    </div>
  )
}
