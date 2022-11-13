// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from "react"


import { Heading } from '@chakra-ui/react';
import AdminAdd from "./AdminAdd";
import Pagination from "./Pagination";
import Navbar from "../components/Navbar";

function Admin() {
  const [page,setPage] = useState(1)

 
  return (
    <div className="App">
        
<Navbar url="https://static2.tripoto.com/media/filter/nl/img/267346/TripDocument/1486733036_dsc_0153.jpg" />
      <Heading>Add Location Name And Price</Heading>
<AdminAdd page={page}/>
      <Pagination setPage={setPage} page={page}  />
    </div>
  );
}


export default Admin;
