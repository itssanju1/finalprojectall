import React from 'react'
import '../Allcss/PAge2.css'
import pic3 from '../Images/5.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import pic4 from '../Images/7.png'
const Page2 = () => {
  return (
    <>
    <div className='w-100 mt-5 container'>
      <div className='container'>
     <h1 className='text-center container fw-bold'>Our Services</h1>
     
     </div>
     <div className='ml-5'>
     <p className='text-center font-weight-light fs-2 lh-1 container ml-5'>Tailored packages to suit your brand's unique needs and budget, ensuring the right platform selection for maximum impact and results.</p>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-xl-3 col-xs-12 col-sm-12 col-md-6 col-lg-5 mb-5'>
        <img src={pic3} className="w-100 img-fluid" alt="..."/>
     
        </div>
        <div className='col-xl-6 col-md-6 col-xs-12 col-sm-12  mt-5'>
         
          <button type='button' className='mt-5 btn  buttonclasscss' style={{textAlign:'left',backgroundColor:'rgb(243, 243, 243)'}}><h4 className='fs-5' style={{marginLeft:'2rem'}}>1. SOCIAL MEDIA MANAGEMENT <ArrowForwardIcon className='arrowcss rounded-5' style={{width:'3rem',height:'3rem',marginLeft:'7rem'}}/></h4></button>
          <button type='button' className='mt-1 btn  buttonclasscss' style={{textAlign:'left',backgroundColor:'rgb(243, 243, 243)'}}><h4 className='fs-5' style={{marginLeft:'2rem'}}>2. SOCIAL MEDIA MARKETING <ArrowForwardIcon className='arrowcss rounded-5' style={{width:'3rem',height:'3rem',marginLeft:'8.5rem'}}/></h4></button>
          <button type='button' className='mt-1 btn  buttonclasscss font-weight-bold' style={{textAlign:'left',backgroundColor:'rgb(243, 243, 243)'}}><h4 className='fs-5' style={{marginLeft:'2rem'}}>3. ONLINE REPUTATION MANAGEMENT <ArrowForwardIcon className='arrowcss rounded-5' style={{width:'3rem',height:'3rem',marginLeft:'3rem'}}/></h4></button>
          <button type='button' className='mt-1 btn buttonclasscss' style={{textAlign:'left',backgroundColor:'rgb(243, 243, 243)'}}><h4 className='fs-5' style={{marginLeft:'2rem'}}>4.PRODUCT PHOTOSHOOT & REELS <ArrowForwardIcon className='arrowcss rounded-5' style={{width:'3rem',height:'3rem',marginLeft:'5.5rem'}}/></h4></button>
          <button type='button' className='mt-1 btn  buttonclasscss' style={{textAlign:'left',backgroundColor:'rgb(243, 243, 243)'}}><h4 className='fs-5' style={{marginLeft:'2rem'}}>5. SOCIAL MEDIA ADUIT<ArrowForwardIcon className='arrowcss rounded-5' style={{width:'3rem',height:'3rem',marginLeft:'12.4rem'}}/></h4></button>
          <button type='button' className='mt-1 btn  buttonclasscss' style={{textAlign:'left',backgroundColor:'rgb(243, 243, 243)'}}><h4 className='fs-5' style={{marginLeft:'2rem'}}>6. CONTENT & SEO  <ArrowForwardIcon className='arrowcss rounded-5' style={{width:'3rem',height:'3rem',marginLeft:'15rem'}}/></h4></button>
          <button type='button' className='mt-1 btn  buttonclasscss' style={{textAlign:'left',backgroundColor:'rgb(243, 243, 243)'}}><h4 className='fs-5' style={{marginLeft:'2rem'}}>7. CAMPAIGN MANAGEMENT  <ArrowForwardIcon className='arrowcss rounded-5' style={{width:'3rem',height:'3rem',marginLeft:'9rem'}}/></h4></button>
       

          <img src={pic4} className="w-25  img-fluid" style={{marginLeft:'25rem'}} alt="..."/>
     
        </div>
      <div className='col-xl-3 col-md-3 col-xs-12 col-sm-12  mt-5'></div>
     
     
     
      </div>
    </div>
    </div>
    </>
  )
}

export default Page2