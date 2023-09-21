import React from 'react'
import '../Allcss/Page6.css'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Page6 = () => {
  return (
    <>
      <div className='container-fluid w-100 mb-5' style={{ backgroundColor: ' rgb(207, 184, 158)',height:'23rem' }}>
        <div className='w-100 container-fluid mt-5 '>
          <div className='row w-100'>
            <div className='col-xl-2 col-lg-2 col-xs-12 col-sm-12 col-md-4'></div>
            <div className='col-xl-8 col-lg-8 col-sm-12 col-sm-12 col-md-12 mt-5 w-100'>
            <h1 className='text-center'>Take your Brand to new heights with <span class="third-word-color">customised </span> </h1>
   






              
            </div>
          </div>
          <div className='w-100'>
          <h1 className='text-center ' style={{ color: "rgb(255, 110, 20)" }}>Social Media Packages</h1>
          <h4 className='text-center'>Starting with Rs 32,000/-

            25,000/-</h4>
            
            </div>
        </div>
        
        <div className='custom-button1'>
          <button  className='rounded-5  cssbutton' style={{ backgroundColor: 'rgb(255, 110, 20)', color: 'white', }}>Get a Quote  
          <ArrowCircleRightIcon style={{ width: '2rem', height: '2rem' }} /></button>
          
          
          
        
      </div>
      <h4 className='text-center mb-5  '>Offer valid for next 3 days only. Hurry up!</h4>
      </div>
    </>
  )
}

export default Page6