import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
// import { ModalHeader } from 'react-bootstrap';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteCat, getAllCat, getVideo, updateCategory } from '../services/allapis';
import {Trash2} from 'react-feather';
import { addCategory } from '../services/allapis';




function Categories() {

    //state to hold input,id and video array
    const [catInputs,setCatInputs]=useState({
      id:"",
      name:"",
      videos:[]
    })
  


  const [categories,setCategories]=useState([])



  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const setInputs=(e)=>{
const{value,name}=e.target
setCatInputs({...catInputs,[name]:value})
}

const addData=async()=>{
let id=uniqid()
setCatInputs({...catInputs,["id"]:id})

const {name}=catInputs
if(name==""){
toast.error(" Enter caption", {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  });
}
else{
//api call
const result=await addCategory(catInputs)
if(result.status>=200 && result.status<300){
 setShow(false);

 getAllCategories()
 toast.success(`${result.data.name} added`, {
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
}

}
// console.log(catInputs);


const getAllCategories=async()=>{
const result=await getAllCat()
if(result.status>=200 && result.status<300){
setCategories(result.data)
}
}
// categories
const removeCategory=async(id)=>{
const result=await deleteCat(id)
if (result.status>= 200 && result.status <300){
  
  //refresh category list
  getAllCategories()
}
}





useEffect(()=>{
getAllCategories()
},[])


const dragOver=(e)=>{
  e.preventDefault();
  console.log("dragged over the category... ");
}

const dropped=async(e,id)=>{
console.log("dropped category id-"+id);
// video id access
const videoId=e.dataTransfer.getData("cardId")
console.log(videoId);
// access video data from backend

const {data}=await getVideo(videoId)
console.log(data);

// select dropped category from all cetegories
const selectedCategory=categories.find(i=>i.id==id) 
console.log(selectedCategory);

// update category object eith video data
selectedCategory.videos.push(data)
console.log(selectedCategory);

// api call to update the changed category in backend
await updateCategory(id,selectedCategory)
getAllCategories()

}

  return (
    <div className='text-center'>

<Button  variant="primary" onClick={handleShow}>
        Add categories
      </Button>
      {
        categories.length>0?(
          categories.map(i=>(
            <div droppable
             onDragOver={(e)=>dragOver(e)} 
            onDrop={(e)=>dropped(e,i?.id)}

            className='border mt-3 p-3 justify-content-center align-item-center text-center' >
              <p className='fs-3 fw-bold' style={{color:'white'}}>{i.name}</p>
              <div className='text-end'>
                <Trash2 size={55} className='text-danger btn' onClick={()=>{removeCategory(i.id)}}></Trash2>
              </div>
              {
                i.videos.map(j=>(
                  <img style={{height:'100px',width:'100px',padding:'5px'}}
                  src={j?.cover_images} alt="" />
                ))
              }
            </div>
          ))
        ):<></> 
      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>All new Categories</Modal.Title>
        </Modal.Header>
        <FloatingLabel
        controlId="floatingInput"
        label="Add Categories"
        className="mb-3"
      >
        <Form.Control type="text" onChange={(e)=>setInputs(e)} name="name" id='catId' placeholder="Add Categories" />
      </FloatingLabel>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addData}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer/>
    </div>
  )
}

export default Categories