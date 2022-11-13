
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
import Admin from '../Admin/Admin'
import SignIn from '../pages/SignIn'
import Signup from '../pages/Signup'
export default function AllRoutes() {



  return (
    <div>

        {/* <MainNavbar /> */}
        <Routes >
             <Route path='/' element={<Home />} ></Route> 
             
         {/* <Route path="/Inspirations" element={<Inspirations />} /> */}
         <Route path="/navbar" element={<Navbar />} />
<Route path="/packages" element={<Packages />} />
<Route path='/Book'  element={<Form />}  />
<Route path='/admin'  element={< Admin/>}  />
<Route path='/Visit Singapore'  element={<VisitSingapore />}  />
<Route path='/Beaches'  element={<Beaches />}  />
<Route path='/Mountains'  element={<Mountains />}  />
<Route path='/Heritage'  element={<Heritage />}  />
<Route path='/signin'  element={<SignIn />}  />
<Route path='/Signup'  element={<Signup />}  />




 </Routes> 
 {/* <Navbar /> */}
{/* <h1>This is home</h1> */}
    </div>
  )
}
