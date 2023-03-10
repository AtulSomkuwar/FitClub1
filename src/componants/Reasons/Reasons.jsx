import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';
const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
       <div className="left-r">
        <img src={image1} alt=" "/>
        <img src={image2} alt=" "/>
        <img src={image3} alt=" "/>
        <img src={image4} alt=" "/>
       </div>

       <div className="right-r">
         <span>Some Reasons</span>
         <div>
          <span className="stroke-text">WHY</span>
          <span className="stroke-text">CHOOSE US?</span>
         </div>

         <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>Over +150 Expert coaches</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>FREE PROGRAM FOR NEW MEMBER</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>RELAIBLE PARTNERS</span>
          </div>
   
         </div>
         <div style={{marginTop:"70px",fontSize:"25px"}}> 
         <span style={{color:"var(--gray)",fontWeight:"normal",color:"orange"}}>Our Partners</span>
         </div>
         <div className="partners">
          <img src={nb} alt=""/>
          <img src={adidas} alt=""/>
          <img src={nike} alt=""/>
         </div>
       </div>
    </div>
  )
}

export default Reasons

