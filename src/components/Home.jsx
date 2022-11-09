
import React from 'react'
import {Route,Routes} from "react-router-dom"

import Navbar from './Navbar'
import Packages from '../pages/Packages'
export default function Home() {
  return (
    <div>

        <Navbar />
        <Routes >
            <Route path='/' element={<Home />} ></Route>
        {/* <Route path="/navbar" element={<Navbar />} /> */}

<Route path="/packages" element={<Packages />} />

</Routes>

    </div>
  )
}
