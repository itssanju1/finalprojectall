import React from 'react'
import '../Allcss/Page1.css'
import pic1 from '../Images/3.jpg'
// import { Button, Col, Container, Row } from 'react-bootstrap'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import pic2 from '../Images/4.jpg'


const Page1 = () => {
  return (
    <>
     <img src={pic1} className=" w-100 img-fluid" alt="..."/>
    <div className='w-100 lg container-fluid colorbgdic1'>
    
    
   
  
    <div className="container lg sm md xs ">
  <div className="row w-100">
    <div className="col-lg-5 col-md-6 col-xs-12 col-xl-5  mt-5">
      
    <h1 className='mt-5'>Accelerate your </h1>
             <h1 className='colorh6'>Business growth<span style={{color:'black'}}>With</span>  SOCIAL MEDIA MARKETING</h1>
             <h6 className=''>Unlock your social media potential with our expert guidance and AI-Driven Social Media Marketing Solutions.</h6>
             <button type='button' className='btn mt-5 custom-button  rounded-5' style={{ backgroundColor: 'rgb(255, 110, 20)', color: 'white' }}>LET'S TALK  <ArrowCircleRightIcon style={{ width: '2rem', height: '2rem' }} /></button>
 
              
                </div>
    <div class="col-2">
      
    </div>
    <div class="col-lg-5 col-md-6 col-xs-12 col-sm-12 col-xl-5 ">
      <div className='mt-3 w-100 bg-white rounded-5'>
          <form className='m-4 '>
            <div className='mt-5'>
              <h1 className='mt-5 ml-3 coloredivh1 ' >.</h1>
                <h4 className=' text-center fs-4'>Get a FREE Consultation</h4>
                </div>

            <div className='mt-3 mb-1 '>
              <label className='form-label fs-5'>Your Name</label>
            <input type='text' placeholder='Enter your name' className=' border-0 border-bottom w-100 form-control'/>
            </div>
            <div className=' mb-3'>
              <label className='form-label fs-5'>Your Email</label>
            <input type='text' placeholder='Enter your Email Id' className=' border-0 border-bottom w-100 form-control'/>
            </div>
            <div className=' mb-3'>
              <label className='form-label fs-5'>Your Mobile Number</label>
            <input type='text' placeholder='Enter your Mobile Number' className=' border-0 border-bottom w-100 form-control'/>
            </div>
            <div className=' mb-4'>
              <label className='form-label fs-5'>Your Service Required</label>
            <input type='text' placeholder='Enter the service you are looking for' className=' border-0 border-bottom w-100 form-control'/>
            </div>
          
          <button type='button' className='btn custom-button mb-3 rounded-5'  style={{backgroundColor:'rgb(255, 110, 20)',color:'white',marginLeft:'7rem'}}>Book a Call  <ArrowCircleRightIcon style={{width:'2rem',height:'2rem'}}/></button>
        
          </form>
      </div>
      
    </div>
  </div>
</div>
<img src={pic2} className="w-25 img-fluid" alt="..."/>
    
     </div>
    </>
  )
}

export default Page1