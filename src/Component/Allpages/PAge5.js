import React from 'react'
import '../Allcss/Page5.css'
import card1 from '../Images/card1.jpg'
import card2 from '../Images/card2.jpg'
import card3 from '../Images/card3.jpg'
import card4 from '../Images/card4.jpg'
import card5 from '../Images/card5.jpg'
import card6 from '../Images/card6.jpg'
const PAge5 = () => {
  return (
    <>
      <div className='container mt-5 mb-5'>
        <div className='row'>
        <div className='col-xl-4 col-xs-12 col-sm-12 col-md-8 col-ld-4 mt-5'></div>
          <div className='col-xl-5 col-xs-12 col-sm-12 col-md-8 col-ld-4'>
            <h1 className='text-center fw-bold'>Why choose <span style={{color: "rgb(255, 110, 20)" }}>SOCIOCURRY?</span></h1>
       
       
        </div>
        </div>
        <h3 className='text-center mt-5'>Our social media strategy goes above beyond daily posts. We combine data driven insights, captivating brand stories and innovative digital campaigns that captivate your audience and add spie to their online presence.</h3>
       
        <div className='container-fluid mt-5'>
          <div className='row'>

            <div className='col-xl-4 col-xs-12 col-sm-12 col-md-8 col-ld-4 mt-5'>
              <div className="card border-0" style={{ backgroundColor: 'rgb(240, 237, 237)' }}>
                <img src={card1} className="card-img-top" alt="..." />
                <div className="card-body m-3" >
                  <h2 className="card-title text-center mb-4" style={{ color: 'rgb(255, 110, 20)' }}>ROI Driven Approach</h2>
                  <p className="card-text m-3 mb-5 fs-2 text-center lh-1"> Maximize results with targeted campaigns on optimal platforms all with in brand's budget.</p>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-xs-12 col-sm-12 col-md-8 col-ld-4 mt-5'>
              <div className="card border-0" style={{ backgroundColor: 'rgb(240, 237, 237)' }}>
                <img src={card2} className="card-img-top" alt="..." />
                <div className="card-body m-1 " >
                  <h2 className="card-title text-center mt-3 mb-3" style={{ color: 'rgb(255, 110, 20)' }}>AI-Infused Strategic Content Creation</h2>
                  <p className="card-text m-3 mt-4  mb-5 fs-2 text-center lh-1"> Expertly crafted content strategies fuellend by AI that align with your brand's objectives.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-xs-12 col-sm-12 col-md-8 col-ld-4 mt-5'>
              <div className="card border-0 " style={{ backgroundColor: 'rgb(240, 237, 237)', width: '100%', height: '100%' }} >
                <img src={card3} className="card-img-top" alt="..." />
                <div className="card-body m-3 " >
                  <h2 className="card-title text-center mb-1 lh-1" style={{ color: 'rgb(255, 110, 20)' }}>Visually Appealing Grids & AI-Driven Creatives</h2>
                  <p className="card-text m-0 mb-4 mt-3 fs-2 text-center lh-1">Captivating Ai curated visuals for unforgettable brand experiences on Social Media Platforms.

                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-4 col-xs-12 col-sm-12 col-md-8 col-ld-4 mt-5'>
              <div className="card border-0 " style={{ backgroundColor: 'rgb(240, 237, 237)', width: '100%', height: '100%' }} >
                <img src={card4} className="card-img-top" alt="..." />
                <div className="card-body m-3 " >
                  <h2 className="card-title text-center mb-1 lh-1" style={{ color: 'rgb(255, 110, 20)' }}>Enthralling Brand Stories & Compaigns</h2>
                  <p className="card-text m-0 mb-4 mt-3 fs-2 text-center lh-1">Crafting alluring brand stories & campaigns that ignite emotional connections & drive engagement
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-xs-12 col-sm-12 col-md-8 col-ld-4 mt-5'>
              <div className="card border-0 "  style={{backgroundColor:'rgb(240, 237, 237)',width:'100%',height:'100%'}} >
                <img src={card5} className="card-img-top" alt="..." />
                <div className="card-body m-3 " >
                  <h2 className="card-title text-center mb-1 lh-1" style={{ color: 'rgb(255, 110, 20)' }}>Tailored Solutions for Your Business</h2>
                  <p className="card-text m-0 mb-4 mt-3 fs-2 text-center lh-1">Tailored Solutions for industry-specific challenges, propelling your growth beyond industry benchmarks.
       
                    </p>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-xs-12 col-sm-12 col-md-8 col-ld-4 mt-5'>
              <div className="card border-0 "  style={{backgroundColor:'rgb(240, 237, 237)',width:'100%',height:'100%'}} >
                <img src={card6} className="card-img-top" alt="..." />
                <div className="card-body m-3 " >
                  <h2 className="card-title text-center mb-1 lh-1" style={{ color: 'rgb(255, 110, 20)' }}>Personal Attention</h2>
                  <p className="card-text m-0 mb-4 mt-3 fs-2 text-center lh-1"> Our team goes the extra mile, shooting content directly at your location, eliminating the hassle for you.
              
                    </p>
                </div>
              </div>
            </div>




          </div>
        </div>
      </div>
    </>
  )
}

export default PAge5