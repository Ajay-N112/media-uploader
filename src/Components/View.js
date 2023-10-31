import React, { useEffect, useState } from 'react'
import Viewcard from './Viewcard'
import { getAllVideos } from '../services/allapis'
import { Col, Row } from 'react-bootstrap'


function View() {

const [allVideos,setAllVideos]=useState([])

// state to update delete

const [deleteUpdate,setDeleteUpdate]=useState({})

const accessAllVideos=async()=>{
  const result=await getAllVideos()
  if(result.status>=200 && result.status<300){
    setAllVideos(result.data)
  }
}
accessAllVideos()

// console.log(allVideos);
useEffect(()=>{
  accessAllVideos()
},[])

  return (
    <Row>
      {
        allVideos.length>0?(
          allVideos.map(i=>
           <Col lg={6} md={10}> <Viewcard deleteFunc={setDeleteUpdate} video={i}></Viewcard></Col>
          )
        ):<h1>no videos In your Collection</h1>
      }
    </Row>
  )
}

export default View