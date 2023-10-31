import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { addVideo } from '../services/allapis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({update}) {

  // state to hold input datas
const [inputs,setInputs]=useState({
  id:"",
  caption:"",
  cover_images:"",
  video_url:""
})

// function for onchange
const setValues=(e)=>{
  let {value,name}=e.target
  // console.log(value,name);
  setInputs({...inputs,[name]:value})
}

// function to extract video url
const extractUrl=(e)=>{
  let videoUrl=e.target.value
  // console.log(videoUrl);
if(videoUrl.includes("v=")){
  let subUrl=videoUrl.split("v=")[1]
  // console.log(subUrl);
  let finalUrl=`https://www.youtube.com/embed/${subUrl}`
  setInputs({...inputs,["video_url"]:finalUrl})
}

}
// function to add button click

const addHandle=async()=>{ 
  let id=uniqid

  setInputs({...inputs,["id"]:id})
  const {caption,cover_images,video_url}=inputs
  if(caption=="" || cover_images=="" || video_url==""){
    toast.error("all inputs are required", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

  }
  else{
    const result = await addVideo(inputs)
console.log(result);

    if (result.status >=200 && result.status<300){

// update state of home
      update(result.data)

      toast.success("video added", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      setShow(false)
    }

  }




}

console.log(inputs);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <i className="fa-solid fa-upload  fa-4x bg-light" onClick={handleShow}></i>

<Modal show={show} onHide={handleClose} animation={false}>
  <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
  </Modal.Header>
  <FloatingLabel
  controlId="floatingInput"
  label="Video Caption"
  className="mb-3"
>
  <Form.Control  name='caption' onChange={(e)=>setValues(e)} type="text" placeholder="Video Caption" />
</FloatingLabel>
<FloatingLabel controlId="floatingInput1" label="Cover Image URL">
  <Form.Control name='cover_images' onChange={(e)=>setValues(e)}   className="mb-3"type="text" placeholder="Cover Image URL" />
</FloatingLabel>

<FloatingLabel controlId="floatingInput2" label="utube video url">
  <Form.Control onChange={(e)=>extractUrl(e)} type="text" placeholder="utube video url" />
</FloatingLabel>


  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={addHandle}>
      Add
    </Button>
  </Modal.Footer>
</Modal>
<ToastContainer />
    </div>
  )
}

export default Add

