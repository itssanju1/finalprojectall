import React from 'react'
import '../Allcss/Page7.css'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Face3Icon from '@mui/icons-material/Face3';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ApartmentIcon from '@mui/icons-material/Apartment';
import WeekendIcon from '@mui/icons-material/Weekend';
// import pic1 from '../Images/1.jpg'
import pic0 from '../Images/page7pic.jpg'
import { Carousel, CarouselItem } from 'react-bootstrap';
const PAge7 = () => {
  return (
    <>
      <div className='container-fluid mt-5'>
        <h1 className='text-center mt-5 fw-bold mb-5'>Industries We Have Served So Far</h1>
      </div>

      <Carousel>
        <CarouselItem>
        <div className='row'>
          <div className='col-xl-3 col-lg-3 col-xs-2 col-sm-2 col-md-3'>
            <div className='text-center div2forpage7cssp' >   <RestaurantIcon className='rounded-5 ' style={{ width: '3.5rem', height: '3.5rem', backgroundColor: 'rgb(255, 110, 20)', color: 'white' }} /></div>
           <div className='div2csspage7s text-center'>
            <h5 className='text-center lh-1 mt-4'>Food, Beverages</h5>
            <h5 className='text-center lh-1'>& Hospitality</h5>
          </div>
</div>

          <div className='col-xl-3 col-lg-3 col-xs-3 col-sm-3 col-md-3'>
            <div className='text-center div2forpage7cssp' >   <Face3Icon className='rounded-5 ' style={{ width: '3.5rem', height: '3.5rem', backgroundColor: 'rgb(255, 110, 20)', color: 'white' }} /></div>
            <h5 className='text-center lh-1 mt-4'>Beauty & Wellness</h5>
            </div>

          
          <div className='col-xl-3 col-lg-3 col-xs-3 col-sm-3 col-md-3'>
            <div className='text-center div2forpage7cssp' >   <FastfoodIcon className='rounded-5 ' style={{ width: '3.5rem', height: '3.5rem', backgroundColor: 'rgb(255, 110, 20)', color: 'white' }} /></div>
            <h5 className='text-center lh-1 mt-4'>Fast Moving Consumer Good</h5>

          </div>

          <div className='col-xl-3 col-lg-3 col-xs-3 col-sm-3 col-md-3'>
            <div className='text-center div2forpage7cssp' >   <CardGiftcardIcon className='rounded-5 ' style={{ width: '3.5rem', height: '3.5rem', backgroundColor: 'rgb(255, 110, 20)', color: 'white' }} /></div>
            <h5 className='text-center lh-1 mt-4'>Fashion & Lifestyl</h5>

          </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='row'>
          <div className='col-xl-4 col-lg-4 col-xs-4 col-sm-4 col-md-4'>
            <div className='text-center div2forpage7cssp1' >   <PsychologyIcon className='rounded-5 ' style={{ width: '3.5rem', height: '3.5rem', backgroundColor: 'rgb(255, 110, 20)', color: 'white' }} /></div>
            <h5 className='text-center lh-1 mt-4'>Tech & AI</h5>

          </div>

          <div className='col-xl-4 col-lg-4 col-xs-4 col-sm-4 col-md-4'>
            <div className='text-center div2forpage7cssp1' >   <CarRepairIcon className='rounded-5 ' style={{ width: '3.5rem', height: '3.5rem', backgroundColor: 'rgb(255, 110, 20)', color: 'white' }} /></div>
            <h5 className='text-center lh-1 mt-4'>Automobile &  Electronics</h5>

          </div>
          <div className='col-xl-4 col-lg-4 col-xs-4 col-sm-4 col-md-4 mb-5'>
            <div className='text-center div2forpage7cssp1' >   <SportsKabaddiIcon className='rounded-5 ' style={{ width: '3.5rem', height: '3.5rem', backgroundColor: 'rgb(255, 110, 20)', color: 'white' }} /></div>
            <h5 className='text-center lh-1 mt-4'>Sports & Entertainment</h5>

          </div>


          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='row'>
        <div className='col-xl-4 col-lg-4 col-xs-4 col-sm-4 col-md-4   '>
              <div className='text-center div2forpage7cssp1' >   <TrendingUpIcon className='rounded-5 ' style={{ width: '3.5rem', height: '3.5rem', backgroundColor: 'rgb(255, 110, 20)', color: 'white' }} /></div>
              <h5 className='text-center lh-1 mt-4'>B2B, Finance & Corporates</h5>
              
            </div>

            <div className='col-xl-4 col-lg-4 col-xs-4 col-sm-4 col-md-4'>
              <div className='text-center div2forpage7cssp1' >   <ApartmentIcon className='rounded-5 ' style={{ width: '3.5rem', height: '3.5rem', backgroundColor: 'rgb(255, 110, 20)', color: 'white' }} /></div>
              <h5 className='text-center lh-1 mt-4'>Real Estate, Architecture & Interrior Design</h5>
              
            </div>
            <div className='col-xl-4 col-lg-4 col-xs-4 col-sm-4 col-md-4 mb-5'>
              <div className='text-center div2forpage7cssp1' >   <WeekendIcon className='rounded-5 ' style={{ width: '3.5rem', height: '3.5rem', backgroundColor: 'rgb(255, 110, 20)', color: 'white' }} /></div>
              <h5 className='text-center lh-1 mt-4'>Homeware & Furniture</h5>
              
            </div>

            </div>

        </CarouselItem>

      </Carousel>

      <div className='container'>
        <div className='row mt-5'>
          <div className='col-xl-5 col-xs-12 col-sm-12 col-md-5 col-lg-5 mt-5'>
            <h1 className='fw-bold' style={{ color: "rgb(255, 110, 20)", float: 'left', marginRight: '1%', marginLeft: '5%' }}>Goals</h1>
            <h1 className='page6cssh4col2' >we help you achieve</h1>
            <h1 className='page6cssh4col4' style={{ float: 'left', marginRight: '1%', marginLeft: '5%' }}> with our </h1>
            <h1 className='page6cssh4col3' style={{ color: "rgb(255, 110, 20)" }}>Expert Guidance</h1>
            <div className='m-4 mt-5'>
              <h4 className='m-3 ' style={{ lineHeight: '3rem', borderBottom: '0.1rem solid black' }}>Create Brand Awareness</h4>
              <h4 className=' m-3' style={{ lineHeight: '3rem', borderBottom: '0.1rem solid black' }}>Generate Leads & Sales</h4>
              <h4 className='m-3 ' style={{ lineHeight: '3rem', borderBottom: '0.1rem solid black' }}>Community & Brand Building</h4>
              <h4 className=' m-3' style={{ lineHeight: '3rem', borderBottom: '0.1rem solid black' }}>Organic Social media Growth</h4>
              <h4 className=' m-3' style={{ lineHeight: '3rem', borderBottom: '0.1rem solid black' }}>Multiple Platform Management</h4>

            </div>
          </div>
          <div className='col-2'></div>
          <div className='col-xl-5 col-xs-12 col-sm-12 col-md-5 col-lg-5 mt-5'>
            <h5 className='text-left mb-4'>Is your brand rocking the social scene but lacking in conversions and sales? Or are you hungry for more likes and shares? Fear not, we've got the magic touch to turn things around!</h5>
            <img src={pic0} className="w-75 m-5 img-fluid" alt="..." />



          </div>
        </div>
      </div>
    </>
  )
}

export default PAge7