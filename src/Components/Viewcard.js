import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Trash2 } from 'react-feather';
import { addHistory, deleteVideo } from '../services/allapis';
import uniqid from 'uniqid';
import { format } from 'date-fns';




function Viewcard({video,deleteFunc}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() => {
      setShow(true);
      // body
    //  id
    var id=uniqid()
    
    // title

    var video_title=video.caption
    // url
    var url=video.video_url
    // date
    var date=format(new Date(),'yyyy-MM-dd h:mm:ss a')
    // console.log(date);
     
    const body={id,video_title,url,date}
    if(body){
       // api call
       const result=await addHistory(body)
    }


    }

    const handleDelete=async(id)=>{
      const result=await deleteVideo(id)
      if (result.status==200 && result.status<300){
        deleteFunc(result.data)
      }
    }
  
    const dragStart=(e,id)=>{
      console.log("drag started... source card id-"+id);
      // store dragged data
      e.dataTransfer.setData("cardId", id);
    } 


  return (
    <div>
 <Card draggable onDragStart={(e)=>dragStart(e,video.id)} style={{ width: '18rem'  }}>
      <Card.Img onClick={handleShow}
       variant="top" src={video.cover_images} style={{height:'300px'}} />
      <Card.Body>
      <Card.Title>{video.caption}</Card.Title>
      <Trash2 onClick={()=>handleDelete(video.id)}size={50} className='btn'></Trash2>
      {/* <i style={{color:'white',marginLeft:'220px',marginTop:"10px"}} class="fa-solid fa-trash-can fa-2x"></i> */}

              </Card.Body>
             
    </Card>


   

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body className='bg-black border border-danger'>

        <iframe width="450" height="380"
         src={video.video_url} 
         title="" 
         frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Viewcard