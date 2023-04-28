import { Button } from '@chakra-ui/react'
import React from 'react'

export default function Pagination({setPage,page}) {


    const pageChanges=(val)=>{
        setPage(page + val)
      }

  return (
    <div>

<Button colorScheme='blue' m={5} onClick={() =>pageChanges(-1)} disabled={page===1}>Pre</Button>
      <Button>{page}</Button>
      <Button colorScheme='blue'm={5}  onClick={()=>pageChanges(1)}>Next</Button>

    </div>
  )
}
