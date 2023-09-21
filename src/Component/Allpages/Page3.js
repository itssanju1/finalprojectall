import React from 'react'
import '../Allcss/PAge3.css'
import pic5 from '../Images/c.jpg'
const Page3 = () => {
  return (
   <>
   <div className='w-100 mt-5'>
    <div className='container'>
    <h1 className='text-center container fw-bold'>Trusted by Leading Brands across Sectors</h1>

    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pic5} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pic5} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pic5} className="d-block w-100" alt="..."/>
    
    </div>
  </div>
  
</div>


    </div>
    <div className='container-fluid page3css w-100 mb-5'>
      <div className='row '>
        <div className='col '>
          <h1 className='text-center mt-5 ' style={{color:'white'}}>Our Numebr Speak For Us</h1>
        </div>
        <div className='row mt-5 mb-5'>
        <div className='col-xl-1 col-xs-0 col-sm-0 col-md-2 col-lg-1 '></div>
          <div className='col-xl-2 col-xs-12 col-sm-12 col-md-4 col-lg-2  classcsspage8a12' style={{color:'white'}} >
            <h1 className='text-center classcsspage8a1234'>100+</h1>
            <h4 className='text-center classcsspage8a123'>Happy Clients</h4>
          </div>
          <div className='col-xl-2 col-xs-12 col-sm-12 col-md-4 col-lg-2  classcsspage8a12' style={{color:'white'}} >
            <h1 className='text-center classcsspage8a1234'>45+</h1>
            <h4 className='text-center classcsspage8a123'>Industries</h4>
          </div>
          <div className='col-xl-2 col-xs-12 col-sm-12 col-md-4 col-lg-2  classcsspage8a12' style={{color:'white'}} >
            <h1 className='text-center classcsspage8a1234'>10X</h1>
            <h4 className='text-center classcsspage8a123'>Growth</h4>
          </div>

          <div className='col-xl-2 col-xs-12 col-sm-12 col-md-4 col-lg-2  classcsspage8a12' style={{color:'white'}} >
            <h1 className='text-center classcsspage8a1234'>3245+</h1>
            <h4 className='text-center classcsspage8a123'>Compaigns Cooked</h4>
          </div>
          <div className='col-xl-2 col-xs-12 col-sm-12 col-md-4 col-lg-2  ' style={{color:'white'}} >
            <h1 className='text-center classcsspage8a1234'>100%</h1>
            <h4 className='text-center classcsspage8a123'>Satisfaction</h4>
          </div>
        </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default Page3