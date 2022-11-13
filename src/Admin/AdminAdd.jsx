import React from 'react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { useEffect,useState } from 'react';
import { Input,Button } from '@chakra-ui/react'
import AdminBtn from './AdminBtn';
// import { Button } from '@chakra-ui/react/dist';

export default function AdminAdd({page}) {
 // REACT use
 const [text, setText] = useState("")
 const [price,setPrice] =useState("")
 const [todo, setTodo] = useState([])
 const [loading, setLoading] = useState(false)
 const [toggle,setToggle] =useState(false)


 const newTodo = (e) => {
   setText(e.target.value)
 }

 const getData = async (page) => {
   setLoading(true)
   let res = await fetch(`http://localhost:3009/posts?_limit=5&_page=${page}`)
   let data = await res.json()
   // console.log("data: ", data);
   setTodo(data)
   setLoading(false)
 }

 
useEffect(() => {
  // sendData()
  getData(page)

}, [page])

if (loading) {
  return <CircularProgress max={100} isIndeterminate color='green.300' />

        
}



 const sendData = async () => {

   setLoading(true)
   const newItem = {
     id: Math.floor(Math.random() * 100) + text,
     title: text,
     status:false,
     price:price
   }
   let res = await fetch(`http://localhost:3009/posts`, {
     method: "POST",
     body: JSON.stringify(newItem),
     headers: {
       "Content-Type": "application/json"
     }
   })

   let data = await res.json()
   console.log(data)
   setTodo([...todo, data])
   setLoading(false)
   setText("")
   setPrice("")
   // getData()


 }



 // console.log(todo)

  return (
    <div>
<div style={{    display: "flex",
    justifyContent: "space-around",
    margin: "33px"}}>
<Input style={{margin: "0px 12% 0px 0px"}} placeholder="Location Name" value={text} onChange={newTodo} />
<Input placeholder="Price"  type="number" value={price} onChange={(e)=>setPrice(e.target.value)} />

</div>

      <Button style={{display: "block",
    marginBottom: "27px",
    marginLeft: "2%"}} colorScheme='gray' onClick={sendData}>ADD</Button>
    
     < AdminBtn getData={getData} todo={todo} />

    </div>
  )
}
