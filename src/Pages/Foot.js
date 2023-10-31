import React from 'react'
import './Foot.css';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
function Foot() {
    return (
            <>
            <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-light m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-light m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-light m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-light m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-light m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-light m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', }}>
        © 2020 Copyright:
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
{/* //                 <div className='footer d-flex  bg-light p-1'>
//                 <i className="fa-solid fa-photo-film  fa-2x"></i>
                    
//                         <p className='w-25'>
//                             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore modi molestias deserunt alias, quam ab, sunt possimus commodi architecto quos excepturi aut at eum. Modi dolore blanditiis cumque asperiores optio.
//                         </p>
//                         <p className='w-25'>
//                             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore modi molestias deserunt alias, quam ab, sunt possimus commodi architecto quos excepturi aut at eum. Modi dolore blanditiis cumque asperiores optio.
//                         </p>
//                         <p className='w-25'>
//                             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore modi molestias deserunt alias, quam ab, sunt possimus commodi architecto quos excepturi aut at eum. Modi dolore blanditiis cumque asperiores optio.
//                         </p>
                    
     
//      </div>
//      <div className='copy'>
   
//  <p> &copy; all rights reserved</p>  
//  <i class="fa-brands fa-facebook me-3"></i> 
//  <i class="fa-brands fa-whatsapp me-3"></i>    
//  <i class="fa-brands fa-instagram me-3"></i>   

//      </div>
     */}
            </>
 


        
    )
}

export default Foot