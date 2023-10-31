import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import View from './View'
import Add from './Add'
import Categories from './Categories'
import './Home.css';
import { Link } from 'react-router-dom'





function Home() {
  
// state for state.lifting
const [addUpdate,setAddUpdate]=useState({})

  return (
    <div className='mt-5'>
        <h1>start uploading videos for free</h1>
        <div className='ms-5 ps-5 mb-4'>
     <Link to={'/watch-history'} style={{textDecoration:"none"}}>
            <a   className=''style={{textDecoration:'none'}}><h2>
              <i class="fa-sharp fa-regular fa-clock fa-spin-pulse fa-1x"></i>watch history</h2>
              </a>
     </Link>
          </div>

          <div>

          </div>
        <div>
          <a href="">link</a>
        </div>
        <Row>
          <Col lg={1}>
          <Add update={setAddUpdate} ></Add>
          </Col>
          <Col lg={7}>
         <View updatedState={addUpdate}></View>
          </Col>
          <Col lg={4}>
          <Categories></Categories>
          </Col>
        </Row>
        {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}


    
    </div>
  )
}

export default Home