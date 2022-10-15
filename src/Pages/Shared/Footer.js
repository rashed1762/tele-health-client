import React from 'react'
import '../../Components/Cssfile/Footer.css'
import img1 from '../../assets/icons/logo2.png'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="row">
        <div className="col-md-3">
            <img src={img1} alt="" />
            <h2>TeleHealth</h2>
        </div>
        <div className="col-md-3 mt-5">
                <h5>SERVICE</h5>
                <br />
                <p>Emergency Checkup</p>
                <p>Monthly Checkup</p>
                <p>Weekly Checkup</p>
                <p>Deep Checkup</p>
        </div>
        <div className="col-md-3 mt-5">
        <h5>OUR HEALTH</h5>
        <br />
                <p>Fluoride Treatment</p>
                <p>Cavity Filling</p>
                <p>Teath Whitening</p>
                <p>Teath safe and healty</p>
        </div>
        <div className="col-md-3 mt-5">
                <h5>OUR LOCATION</h5>
                <br />
                <FontAwesomeIcon className='icon' icon={faLocationDot} />
                <h6>Kewatkhali,moynermor,mymensingh</h6>

        </div>
      </div>

      <p className='mt-5'>
Copyright 2022 All Rights Reserved</p>
    </div>
  )
}

export default Footer;
